let DomainRobotService = require("./DomainRobotService");
const DomainRobotException = require("../lib/DomainRobotException");
const DomainRobotResult = require("../lib/DomainRobotResult");

class DomainStudio extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async search(model) {
    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/domainstudio",
      model
    );
  }
}

module.exports = DomainStudio;
