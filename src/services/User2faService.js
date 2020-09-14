let DomainRobotService = require("./DomainRobotService");

class User2fa extends DomainRobotService {

    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async tokenConfigInfo() {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/OTPAuth/"
        );
    }

    async tokenConfigCreate() {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/OTPAuth/"
        );
    }

    async tokenConfigActivate() {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/_2fa"
        );
    }

    async tokenConfigDelete() {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/user/_2fa"
        );
    }
}

module.exports = User2fa;