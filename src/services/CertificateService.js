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
}

module.exports = certificateService;
