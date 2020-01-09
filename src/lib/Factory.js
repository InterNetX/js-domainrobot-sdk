function Factory(specs) {
  this.specs = specs;
  this.models = {};

  const that = this;
  const baseModel = function(spec, data) {
    that.makeModel(spec, this, data);
  };

  for (const modelName in specs.definitions) {
    const model = function(data) {
      baseModel.call(this, specs.definitions[modelName], data);
    };
    model.prototype = Object.create(baseModel.prototype);
    model.prototype.constructor = model;
    this.models[modelName] = model;
  }

  return {
    baseModel,
    models: this.models,
    resolvePath: this.resolvePath.bind(this),
    resolveTree: this.resolveTree.bind(this),
    specs
  };
}

Factory.prototype.makeModel = function(spec, obj, data) {
  // console.log('makeModel:', spec);

  if ("$ref" in spec) {
    const sub = this.resolveRef(spec.$ref);
    if (sub) {
      this.makeModel(sub.spec, obj, data);
    }
  }

  if ("allOf" in spec) {
    spec.allOf.forEach(subSpec => {
      this.makeModel(subSpec, obj, data);
    });
  }

  if ("properties" in spec) {
    Object.entries(spec.properties)
      .filter(p => !(p[0] in obj))
      .forEach(p => {
        obj[p[0]] = this.makeProperty(
          p[1],
          typeof data === "object" && p[0] in data ? data[p[0]] : undefined
        );
      });
  }
};
Factory.prototype.makeProperty = function(spec, data) {
  // A) no data provided -> undefined, no resolving
  if (data === undefined) {
    return undefined;
  } else {
    // B) data provided -> value has to be set...
    // 1) property is complex/model object -> resolve -> model instance
    if ("$ref" in spec) {
      const sub = this.resolveRef(spec.$ref);
      if (sub) {
        // special case: enum is a $ref, but  -_-
        if ("enum" in sub.spec) {
          const value = this.makeValue(sub.spec, data);
          return sub.spec.enum.includes(value) ? value : undefined;
        } else {
          return new this.models[sub.name](data);
        }
      } else {
        Vue.$log.error("Error: Invalid $ref:", spec.$ref);
        return undefined;
      }
    } else {
      // 2) property is simple -> convert/set
      return this.makeValue(spec, data);
    }
  }
};
Factory.prototype.makeValue = function(spec, data) {
  if (data === undefined) return undefined;
  if (!("type" in spec)) return data;

  const type = spec.type.toLowerCase();

  switch (type) {
    case "boolean":
      return Boolean(data);
    case "integer":
      return parseInt(data, 10) || data;
    case "number":
      return parseFloat(data) || data;
    case "string":
      return String(data);
    case "date":
      return new Date(String(data).replace(/T/i, " "));
    case "array":
      if (!Array.isArray(data)) {
        return undefined;
      }
      if (!("items" in spec)) {
        return undefined;
      }
      if (!data.length) {
        return [];
      }
      return data.map(d => this.makeProperty(spec.items, d));
    default:
      return data;
  }
};
Factory.prototype.resolveRef = function(
  ref,
  { props = false, propsDeep = false } = {}
) {
  const parts = ref.split("/");
  const modelName = parts[parts.length - 1];
  if (modelName in this.specs.definitions) {
    const result = {
      name: modelName,
      spec: this.specs.definitions[modelName]
    };
    if (props || propsDeep) {
      result.props = this.resolveProps(result.spec, undefined, propsDeep);
    }
    return result;
  }
};
// ---
Factory.prototype.resolveModel = function(ref) {
  return this.resolveRef(ref, { propsDeep: true });
};
Factory.prototype.resolveProps = function(spec, obj = {}, deep = false) {
  if ("$ref" in spec) {
    const sub = this.resolveRef(spec.$ref);
    if (sub) {
      this.resolveProps(sub.spec, obj);
    }
  }

  if ("allOf" in spec) {
    spec.allOf.forEach(subSpec => {
      this.resolveProps(subSpec, obj);
    });
  }

  if ("properties" in spec) {
    Object.entries(spec.properties)
      .filter(p => !(p[0] in obj))
      .forEach(p => {
        if (!("$ref" in p[1]) || !deep) {
          obj[p[0]] = p[1];
        } else {
          const refModel = this.resolveRef(p[1].$ref);
          if (!refModel) {
            return;
          }
          obj[p[0]] = refModel.spec;
        }
      });
  }

  return obj;
};
Factory.prototype.resolvePath = function(ref, path = "") {
  const parts = path.split(".").filter(p => p.length > 0);
  if (!parts.length) {
    return this.resolveModel(ref);
  }

  let model = this.resolveRef(ref, { props: true });
  if (!model) {
    return;
  }
  let modelName;

  let part, prop;
  // Vue.$log.debug('resolvePath', ref, path, model, parts, this)

  while (parts.length > 0) {
    modelName = model.name;
    part = parts.shift();

    if (!(part in model.props)) {
      return;
    }
    prop = model.props[part];

    if ("$ref" in prop) {
      if (!(model = this.resolveRef(prop.$ref, { props: true }))) {
        return;
      }
      prop = model.spec; // not props! we need $ref spec itself!
      if (prop.type === "object") {
        modelName = model.name;
      } else {
        prop.model = model.name;
      }
    }

    if (parts.length > 0) {
      if (prop.type !== "object") {
        // impossible to follow path further / have to step into object
        return;
      } // else continue -> next part
    } else {
      // end of line reached
      return {
        name: part,
        spec: prop,
        model: modelName
      };
    }
  }
};
Factory.prototype.resolveTree = function(ref, path = "") {
  const tree = {};
  const model = this.resolvePath(ref, path);

  Object.entries(model.spec.properties || []).forEach(p => {
    this.resolveTreeBranch(tree, model.model, `${path}.${p[0]}`, p[1]);
  });

  return tree;
};
Factory.prototype.resolveTreeBranch = function(tree, modelName, path, prop) {
  let refModel;
  if (
    !("$ref" in prop) ||
    !(refModel = this.resolveRef(prop.$ref, { props: true })) ||
    !Object.keys(refModel.props).length
  ) {
    tree[path] = {
      name: path.split(".").slice(-1)[0],
      spec: refModel ? refModel.spec : prop,
      model: modelName
    };
  } else {
    Object.entries(refModel.props).forEach(p => {
      this.resolveTreeBranch(tree, refModel.name, `${path}.${p[0]}`, p[1]);
    });
  }
};

module.exports = Factory;
