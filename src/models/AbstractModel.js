/* global module */
class AbstractModel {
  constructor() {
    if (typeof this.modelDefinition !== "function") {
      throw new TypeError("modelDefintion method must be defined in Model");
    }

    this.buildModel();
    return this;
  }

  buildModel() {
    let modelDefinition = this.modelDefinition();

    this.processProperties(modelDefinition);
  }

  processProperties(modelDefinition, isNested = false) {
    let rawModel = {};
    for (let property in modelDefinition) {
      if (modelDefinition[property].type === JSON) {
        this[property] = this.processProperties(
          modelDefinition[property],
          true
        );
        continue;
      }
      if (property === "type") {
        continue;
      }
      if (!isNested) {
        this[property] = "";
      }
      rawModel[property] = "";
    }
    return rawModel;
  }
}

module.exports = AbstractModel;
