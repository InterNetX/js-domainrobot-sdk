let DomainRobotService = require("./DomainRobotService");

class Zone extends DomainRobotService {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async create(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone",
            model
        );
    }

    async update(model, systemNameServer) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/zone/" + model.name + '/' + systemNameServer,
            model
        );
    }

    async delete(name, systemNameServer) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/zone/" + name + '/' + systemNameServer
        );
    }

    async info(name, systemNameServer) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/zone/" + name + '/' + systemNameServer
        );
    }

    async list(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone/_search" + keysString,
            model
        );
    }

    async stream(name, model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone/" + name + "/_stream" + keysString,
            model
        )
    }

    async import(name, model, systemNameServer) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone/" + name + "/" + systemNameServer + "/_import",
            model
        );
    }
}

module.exports = Zone;
