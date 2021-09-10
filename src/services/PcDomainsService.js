let DomainRobotService = require("./DomainRobotService");

class PcDomains extends DomainRobotService {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async estimation(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/v1/estimate",
            model
        )
    }

    async alexa(domain) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/alexasiteinfo/" + domain
        )
    }

    async keyword(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/kwe",
            model
        )
    }

    async meta(domain) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/meta/" + domain
        )
    }

    async majestic(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/majestic",
            model
        )
    }

    async smuCheck(username) {
        // New /v1 Route is not implemented in DEV
        // Only in LIVE it seems
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/v1/smu_check/" + username
        )
    }

    async wayback(domain) {
      return await this.sendGetRequest(
            this.domainRobotConfig.url + "/wayback/" + domain
        )
    }
}

module.exports = PcDomains;
