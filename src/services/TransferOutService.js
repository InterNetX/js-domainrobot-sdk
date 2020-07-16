let DomainRobotService = require("./DomainRobotService");

class TransferOut extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async list(model, keys = []) {
      let keysString = '';
      if (keys.length > 0) {
          keysString = "?keys[]=" + keys.join('&keys[]=');
      }

    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/transferout/_search" + keysString,
        model
    );
  }

  async answer(domain, type) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/transferout/" + domain + "/" + type
    );
  }

}

module.exports = TransferOut;
