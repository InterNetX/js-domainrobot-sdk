let DomainRobotService = require("./DomainRobotService");

class Zone extends DomainRobotService {
  constructor(zoneModel, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = zoneModel;
  }

  async create() {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/zone",
        this.model
    );
  }

  async update(name, systemNameServer) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/zone/" + name + '/' + systemNameServer,
        this.model
    );
  }

  async delete(name, systemNameServer) {
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/zone/" + name + '/' + systemNameServer
    );
  }

  async info(name, systemNameServer) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/zone/" + name + '/' + systemNameServer
    );
  }

  async list(keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/zone/_search?keys=" + keysString,
        this.model
    );
  }
  
  async stream(name, keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/zone/" + name + "/_stream?keys=" + keysString,
        this.model
    )
  }

  async import(name, systemNameServer) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/zone" + name + "/" + systemNameServer + "/_import",
        this.model
    );
  }
}

module.exports = Zone;
