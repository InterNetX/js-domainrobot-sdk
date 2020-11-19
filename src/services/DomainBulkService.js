let DomainRobotService = require("./DomainRobotService");

class DomainBulkService extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async update(model) {
    return await this.sendPatchRequest(
      this.domainRobotConfig.url + "/bulk/domain",
      model
    );
  }
}

module.exports = DomainBulkService;
