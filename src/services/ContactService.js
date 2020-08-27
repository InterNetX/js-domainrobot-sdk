let DomainRobotService = require("./DomainRobotService");

class Contact extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async create(model) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/contact",
        model
    );
  }

  async update(model) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/contact/" + model.id,
        model
    );
  }

  async delete(id) {
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/contact/" + id
    );
  }

  async info(id) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/contact/" + id
    );
  }

  async list(model, keys = []) {
    let keysString = keys.join('&keys=');

    return await this.sendPostRequest(
         this.domainRobotConfig.url + "/contact/_search?keys=" + keysString,
         model
    );
  }

  

}

module.exports = Contact;
