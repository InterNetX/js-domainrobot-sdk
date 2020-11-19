/* global require,module */
let axios = require("axios");
const Headers = require("../lib/Headers");
const config = require("../lib/config");
const packageJson = require("../../package.json");

const DomainRobotException = require("../lib/DomainRobotException");
const DomainRobotResult = require("../lib/DomainRobotResult");
const DomainRobotConfig = require("../lib/DomainRobotConfig");

let specs = require("../lib/specs.json");
let ApiFactory = require("../lib/Factory");

class DomainRobotService {
    /**
     *
     * @param {object} domainRobotConfig
     */
    constructor(domainRobotConfig) {

        this.modelFactory = null;

        this.domainRobotConfig = new DomainRobotConfig(domainRobotConfig);

        // Reset the Axios global Headers
        // https://stackoverflow.com/questions/47046575/axios-different-headers-for-express-request
        axios.defaults.headers.common = {}

        // add context header
        if (domainRobotConfig.auth !== undefined) {
            axios.defaults.headers.common[Headers.DOMAINROBOT_HEADER_CONTEXT] =
                domainRobotConfig.auth.context;
        }

        // define basic headers
        axios.defaults.headers.common[Headers.DOMAINROBOT_CONTENT_TYPE] =
            "application/json";
        axios.defaults.headers.common[Headers.DOMAINROBOT_USER_AGENT] =
            "JSDomainrobotSdk/" + packageJson.version;

        // if global headers were set in the config assign them
        if (this.domainRobotConfig.headers !== undefined) {
            for (let [headerKey, headerValue] of Object.entries(this.domainRobotConfig.headers)) {
                axios.defaults.headers.common[headerKey] = headerValue
            }
        }

        // decide which authentcation method we should use
        // its either 'basic auth' or via 'session_id'
        if (this.domainRobotConfig.auth !== undefined) {
            // set basic axios config
            this.axiosconfig = {
                auth: {
                    username: this.domainRobotConfig.auth.user,
                    password: this.domainRobotConfig.auth.password
                }
            };
        } else if (this.domainRobotConfig.session_id !== null && this.domainRobotConfig.session_id !== undefined) {
            // set the session_id header for authentication
            axios.defaults.headers.common[Headers.DOMAINROBOT_HEADER_SESSION_ID] = this.domainRobotConfig.session_id;
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
            let requestOptions = Object.assign(
                {
                    method,
                    url,
                    data
                },
                this.axiosconfig
            );

            this.logRequestIfCallbackSet(requestOptions, this.axios.defaults.headers);

            let start = new Date().getTime();

            let result = await this.axios(requestOptions);

            let end = new Date().getTime();

            this.logResponseIfCallbackSet(result, end - start);

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

    async sendPatchRequest(url, data) {
        return this.sendRequest("PATCH", url, data);
    }

    models() {
        const Backend = new ApiFactory(specs);
        if (this.modelFactory === null) {
            this.modelFactory = Backend.models;
        }
        return this.modelFactory;
    }

    logRequest(logRequestCallback) {
        this.logRequestCallback = logRequestCallback;
        return this;
    }

    logResponse(logResponseCallback) {
        this.logResponseCallback = logResponseCallback;
        return this;
    }

    logRequestIfCallbackSet(requestOptions, headers) {
        if (typeof this.logRequestCallback === 'function') {
            this.logRequestCallback(requestOptions, headers);
            return;
        }

        if (this.domainRobotConfig.hasLogRequestCallback()) {
            this.domainRobotConfig.logRequestCallback(requestOptions, headers);
        }
    }

    logResponseIfCallbackSet(rawResponse, executionTime) {
        if (typeof this.logResponseCallback === 'function') {
            this.logResponseCallback(rawResponse, executionTime);
            return;
        }

        if (this.domainRobotConfig.hasLogResponseCallback()) {
            this.domainRobotConfig.logResponseCallback(rawResponse, executionTime);
        }
    }
}

module.exports = DomainRobotService;
