/* global require,module */
let AbstractService = require("./AbstractService");
const DomainRobotException = require("../lib/DomainRobotException");
const DomainRobotResult = require("../lib/DomainRobotResult");

class Contact extends AbstractService {
  constructor(certificateModel, domainRobotConfig) {
    super(domainRobotConfig);
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
    this.checkTypeSecurity(this.model);

    try {
      let result = await this.axios(
        Object.assign(
          {
            method: "POST",
            url: this.domainRobotConfig.url + "/certificate/_realtime",
            data: this.model
          },
          this.axiosconfig
        )
      );
      return new DomainRobotResult(result.data, result.status);
    } catch (error) {
      throw new DomainRobotException(
        error.response.data,
        error.response.status
      );
    }
  }

  async prepareOrder() {
    this.prepareCsr();
    this.checkTypeSecurity(this.model);

    this.model.plain = this.model.csr;
    this.model.csr = null;
    this.model.lifetime = null;
    this.model.name = null;
    this.model.authentication = null;

    try {
      let result = await this.axios(
        Object.assign(
          {
            method: "POST",
            url: this.domainRobotConfig.url + "/certificate/_prepareOrder",
            data: this.model
          },
          this.axiosconfig
        )
      );
      return new DomainRobotResult(result.data, result.status);
    } catch (error) {
      throw new DomainRobotException(
        error.response.data,
        error.response.status
      );
    }
  }
}

module.exports = Contact;
