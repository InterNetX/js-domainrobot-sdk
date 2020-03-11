let DomainRobotService = require("./DomainRobotService");
const DomainRobotException = require("../lib/DomainRobotException");
const DomainRobotResult = require("../lib/DomainRobotResult");

class DomainStudio extends DomainRobotService {
  constructor(domainStudioEnvelopeSearchRequest, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = domainStudioEnvelopeSearchRequest;
  }

  async search() {
    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/domainstudio",
      this.model
    );
  }
}

module.exports = DomainStudio;
