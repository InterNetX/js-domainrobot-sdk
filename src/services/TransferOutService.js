let DomainRobotService = require("./DomainRobotService");

class TransferOut extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async list(keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/transferout/_search?keys=" + keysString,
        this.model
    );
  }

  async answer(domain, type) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/transferout/" + domain + "/" + type
    );
  }

}

module.exports = TransferOut;
