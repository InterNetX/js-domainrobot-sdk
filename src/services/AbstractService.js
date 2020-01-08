/* global require,module */
let axios = require("axios");
const Headers = require("../lib/Headers");
const config = require("../lib/config");

class AbstractService {
  /**
   *
   * @param {object} domainRobotConfig
   */
  constructor(domainRobotConfig) {
    // set default values if nothing has been specified
    if (!domainRobotConfig.url) {
      domainRobotConfig.url = config.API_URL;
    }
    if (!domainRobotConfig.auth.context) {
      domainRobotConfig.auth.context = config.API_CONTEXT;
    }

    this.domainRobotConfig = domainRobotConfig;

    // define headers
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common[Headers.DOMAINROBOT_HEADER_CONTEXT] =
      domainRobotConfig.auth.context;

    // set basic axios config
    this.axiosconfig = {
      auth: {
        username: domainRobotConfig.auth.user,
        password: domainRobotConfig.auth.password
      }
    };

    this.axios = axios;
    this.shouldBeTypeSecure = false;
  }

  /**
   *
   * @param {object} headers
   */
  headers(headers) {
    this.axiosconfig.headers = headers;
    return this;
  }

  /**
   * Call to set type security flag to true and check every
   * value of a given model if it has the corrext expected type
   */
  typeSecure() {
    this.shouldBeTypeSecure = true;
    return this;
  }

  /**
   * check every value of a given model if it has the corrext expected type
   * throw TypeError on invalid types
   */
  checkTypeSecurity(model, modelDefinition = null, modelName = "") {
    if (!this.shouldBeTypeSecure) {
      return;
    }

    if (modelDefinition === null) {
      modelDefinition = model.modelDefinition();
      modelName = model.constructor.name;
    }

    for (let property in model) {
      if (typeof modelDefinition[property].type === "function") {
        if (
          new modelDefinition[
            property
          ].type().constructor.name.toLowerCase() !== typeof model[property]
        ) {
          throw new TypeError(
            "Expected type " +
              new modelDefinition[
                property
              ].type().constructor.name.toLowerCase() +
              " for property " +
              property +
              " in model " +
              modelName +
              " got " +
              typeof model[property] +
              " instead!"
          );
        }
        continue;
      }

      if (modelDefinition[property].type === JSON) {
        this.checkTypeSecurity(
          model[property],
          modelDefinition[property],
          modelName
        );
      }
    }
  }
}

module.exports = AbstractService;
