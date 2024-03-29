let DomainRobotService = require("./DomainRobotService");

class TrustedApp extends DomainRobotService {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async create(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/trustedapp",
            model
        );
    }

    async update(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/trustedapp/" + model.uuid + keysString,
            model
        );
    }

    async delete(id) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/trustedapp/" + id
        );
    }

    async info(id) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/trustedapp/" + id
        );
    }

    async list(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/trustedapp/_search" + keysString,
            model
        );
    }



}

module.exports = TrustedApp;
