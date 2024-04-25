let DomainRobotService = require("./DomainRobotService");

class Customer extends DomainRobotService {

  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  /**
   * Basic Customer Update (120002)
   * 
   * @param {*} model DomainRobotModels.BasicCustomer
   * @returns Promise<DomainRobotResult<JsonResponseDataBasicCustomer, number>>
   */
  async update(model) {
    return await this.sendPutRequest(
      this.domainRobotConfig.url + "/customer/" + model.client + "/" + model.number,
      model
    );
  }
}

module.exports = Customer;
