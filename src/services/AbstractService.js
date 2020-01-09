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
  }

  /**
   *
   * @param {object} headers
   */
  headers(headers) {
    this.axiosconfig.headers = headers;
    return this;
  }
}

module.exports = AbstractService;
