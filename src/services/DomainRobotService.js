/* global require,module */
let axios = require("axios");
const Headers = require("../lib/Headers");
const config = require("../lib/config");
const packageJson = require("../../package.json");

const DomainRobotException = require("../lib/DomainRobotException");
const DomainRobotResult = require("../lib/DomainRobotResult");

let specs = require("../lib/specs.json");
let ApiFactory = require("../lib/Factory");

class DomainRobotService {
  /**
   *
   * @param {object} domainRobotConfig
   */
  constructor(domainRobotConfig) {
    this.modelFactory = null;

    // set default values if nothing has been specified
    if (!domainRobotConfig.url) {
      domainRobotConfig.url = config.API_URL;
    }
    if (!domainRobotConfig.auth.context) {
      domainRobotConfig.auth.context = config.API_CONTEXT;
    }

    this.domainRobotConfig = domainRobotConfig;

    // define headers
    axios.defaults.headers.common[Headers.DOMAINROBOT_CONTENT_TYPE] =
      "application/json";
    axios.defaults.headers.common[Headers.DOMAINROBOT_USER_AGENT] =
      "JSDomainrobotSdk/" + packageJson.version;
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
  }

  /**
   *
   * @param {object} headers
   */
  headers(headers) {
    this.axiosconfig.headers = headers;
    return this;
  }

  async sendPostRequest(url, data) {
    try {
      let result = await this.axios(
        Object.assign(
          {
            method: "POST",
            url,
            data
          },
          this.axiosconfig
        )
      );
      let domainRobotResult = new DomainRobotResult(result.data, result.status);

      if (!domainRobotResult.isValid()) {
        throw new DomainRobotException({}, 500);
      }

      return domainRobotResult;
    } catch (error) {
      throw new DomainRobotException(
        error.response.data,
        error.response.status
      );
    }
  }

  models() {
    const Backend = new ApiFactory(specs);
    if (this.modelFactory === null) {
      this.modelFactory = Backend.models;
    }
    return this.modelFactory;
  }
}

module.exports = DomainRobotService;
