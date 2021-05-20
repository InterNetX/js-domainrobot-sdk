let DomainRobotService = require("./DomainRobotService");

class PeriodicBilling extends DomainRobotService {

    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async update(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/intern/periodicBilling/" + model.articleTypeLabel + "/" + model.articleLabel + "/" + model.object,
            model
        );
    }

    async delete(articleTypeLabel, articleLabel, object) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/intern/periodicBilling/" + articleTypeLabel + "/" + articleLabel + "/" + object
        );
    }

    async list(model, keys = []) {
        let keysString = "";
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join("&keys[]=");
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/intern/periodicBilling/_search" + keysString,
            model
        );
    }
}

module.exports = PeriodicBilling;
