let DomainRobotService = require("./DomainRobotService");

class TrustedApp extends DomainRobotService {
  constructor(trustedAppModel, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = trustedAppModel;
  }

  async create() {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/trustedapp",
        this.model
    );
  }

  async update(id) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/trustedapp/" + id,
        this.model
    );
  }

  async delete(id) {
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/trustedapp/" + id
    );
  }

  async info(id) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/trustedapp/" + id
    );
  }

  async list(keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/trustedapp/_search?keys=" + keysString,
        this.model
    );
  }



}

module.exports = TrustedApp;
