let DomainRobotService = require("./DomainRobotService");

class Poll extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async info() {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/poll",
    );
  }

  async confirm(id) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/poll/" + id
    );
  }

}

module.exports = Poll;
