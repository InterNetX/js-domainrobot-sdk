let DomainRobotService = require("./DomainRobotService");

class User extends DomainRobotService {

    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async info(user, context) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context
        );
    }

    async list(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/user/_search" + keysString,
            model
        );
    }
}

module.exports = User;