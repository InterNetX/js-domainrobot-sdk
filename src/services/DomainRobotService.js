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
        if (domainRobotConfig.auth !== undefined) {
            if (!domainRobotConfig.auth.context) {
                domainRobotConfig.auth.context = config.API_CONTEXT;
            }
            // add context header
            axios.defaults.headers.common[Headers.DOMAINROBOT_HEADER_CONTEXT] =
                domainRobotConfig.auth.context;
        }

        // define basic headers
        axios.defaults.headers.common[Headers.DOMAINROBOT_CONTENT_TYPE] =
            "application/json";
        axios.defaults.headers.common[Headers.DOMAINROBOT_USER_AGENT] =
            "JSDomainrobotSdk/" + packageJson.version;

        this.domainRobotConfig = domainRobotConfig;

        // decide which authentcation method we should use
        // its either 'basic auth' or via 'session_id'
        if (domainRobotConfig.auth !== undefined) {
            // set basic axios config
            this.axiosconfig = {
                auth: {
                    username: domainRobotConfig.auth.user,
                    password: domainRobotConfig.auth.password
                }
            };
        } else if (domainRobotConfig.session_id !== null && domainRobotConfig.session_id !== undefined) {
            // set the session_id header for authentication
            axios.defaults.headers.common[Headers.DOMAINROBOT_HEADER_SESSION_ID] = domainRobotConfig.session_id;
        }

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

    async sendRequest(method, url, data = null) {
        try {
            console.log(Object.assign(
                {
                    method,
                    url,
                    data
                },
                this.axiosconfig
            ));
            let result = await this.axios(
                Object.assign(
                    {
                        method,
                        url,
                        data
                    },
                    this.axiosconfig
                )
            );

            let domainRobotResult = new DomainRobotResult(result.data, result.status);
            if (result.headers !== undefined) {
                domainRobotResult.setHeaders(result.headers);
            }

            if (!domainRobotResult.isValid()) {
                throw new DomainRobotException({}, 500);
            }

            return domainRobotResult;
        } catch (error) {
            console.log(error)
            throw new DomainRobotException(
                error.response.data,
                error.response.status
            );
        }
    }

    async sendGetRequest(url) {
        return this.sendRequest("GET", url);
    }

    async sendPostRequest(url, data) {
        return this.sendRequest("POST", url, data);
    }

    async sendPutRequest(url, data) {
        return this.sendRequest("PUT", url, data);
    }

    async sendDeleteRequest(url, data) {
        return this.sendRequest("DELETE", url, data);
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
