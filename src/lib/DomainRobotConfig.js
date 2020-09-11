class DomainRobotConfig {
    constructor(domainRobotConfig) {
        // set default values if nothing has been specified
        this.url = domainRobotConfig.url || config.API_URL;
        this.auth = domainRobotConfig.auth || undefined;

        if (this.auth !== undefined && !this.auth.context) {
            this.auth.context = config.API_CONTEXT;
        }

        this.session_id = domainRobotConfig.session_id || undefined;
        this.logRequestCallback = domainRobotConfig.logRequestCallback || undefined;
        this.logResponseCallback = domainRobotConfig.logResponseCallback || undefined;
        this.headers = domainRobotConfig.headers || undefined;
    }

    hasLogRequestCallback(){
        return this.logRequestCallback !== undefined;
    }

    hasLogResponseCallback() {
        return this.logResponseCallback !== undefined;
    }
}

module.exports = DomainRobotConfig;