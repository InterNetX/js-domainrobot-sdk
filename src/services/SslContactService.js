let DomainRobotService = require("./DomainRobotService");

class SslContact extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async create(model) {
    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/sslcontact",
      model
    );
  }

  async update(model) {
    return await this.sendPutRequest(
      this.domainRobotConfig.url + "/sslcontact/" + model.id,
      model
    );
  }

  async delete(id) {
    return await this.sendDeleteRequest(
      this.domainRobotConfig.url + "/sslcontact/" + id
    );
  }

  async info(id) {
    return await this.sendGetRequest(
      this.domainRobotConfig.url + "/sslcontact/" + id
    );
  }

  async list(model, keys = []) {
    this.virtualPath = ['sslcontact', 'list']

    let keysString = '';
    if (keys.length > 0) {
      keysString = "?keys[]=" + keys.join('&keys[]=');
    }

    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/sslcontact/_search" + keysString,
      model
    );
  }



}

module.exports = SslContact;
