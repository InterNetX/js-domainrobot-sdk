let DomainRobotService = require("./DomainRobotService");

class SslContact extends DomainRobotService {
  constructor(sslContactModel, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = sslContactModel;
  }

  async create() {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/sslcontact",
        this.model
    );
  }

  async update(id) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/sslcontact/" + id,
        this.model
    );
  }

  async delete(id) {
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/sslcontact/"+ id
    );
  }

  async info(id) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/sslcontact/" + id
    );
  }

  async list(keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/sslcontact/_search?keys=" + keysString,
        this.model
    );
  }



}

module.exports = SslContact;
