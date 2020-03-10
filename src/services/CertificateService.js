/* global require,module */
let DomainRobotService = require("./DomainRobotService");

class certificateService extends DomainRobotService {
  constructor(certificateModel, domainRobotConfig) {
    super(domainRobotConfig);

    let CertificateData = this.models().Certificate;
    if (certificateModel === null || certificateModel === undefined) {
      certificateModel = new CertificateData();
    }

    this.model = certificateModel;
  }

  prepareCsr() {
    let matches = this.model.csr
      .trim()
      .match(
        /^(-----BEGIN CERTIFICATE REQUEST-----)(.*)(-----END CERTIFICATE REQUEST-----)$/
      );
    if (matches !== null) {
      this.model.csr = [matches[1], matches[2], matches[3]].join("\n");
    }
  }
  
  async create() {
      this.prepareCsr();

      return await this.sendPostRequest(
          this.domainRobotConfig.url + "/certificate",
          this.model
      );
  }

  async createRealtime() {
    this.prepareCsr();

    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/certificate/_realtime",
      this.model
    );
  }

  /**
   * @return CertificateData
   */
  async prepareOrder() {
    this.prepareCsr();
    this.model.plain = this.model.csr;
    this.model.csr = null;
    this.model.lifetime = null;
    this.model.name = null;
    this.model.authentication = null;

    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/certificate/_prepareOrder",
      this.model
    );
  }

  async list(keys = []) {
     let keysString = keys.join('&keys=');

     return await this.sendPostRequest(
         this.domainRobotConfig.url + "/certificate/_search/?keys=" + keysString,
         this.model
     );
  }

  async info(certificateId) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/certificate" + certificateId
    );
  }

  async reissue(certificateId) {
      this.prepareCsr();

      return await this.sendPutRequest(
          this.domainRobotConfig.url + "/certificate" + certificateId,
          this.model
      );
  }

  async delete(certificateId) {
      this.prepareCsr();

      return await this.sendDeleteRequest(
          this.domainRobotConfig.url + "/certificate" + certificateId,
          this.model
      );
  }

  async renew(certificateId) {
      this.prepareCsr();

      return await this.sendPutRequest(
        this.domainRobotConfig.url + "/certificate/" + certificateId + "/_renew",
        this.model
      );
  }
  
  async comment(certificateId) {
      this.prepareCsr();

      return await this.sendPutRequest(
          this.domainRobotConfig.url + "/certificate" + certificateId + "/_comment",
          this.model
      )
  }
}

module.exports = certificateService;
