/* global require,module */
// services
let ContactService = require("./services/ContactService");
let certificateService = require("./services/CertificateService");
let DomainStudio = require("./services/DomainStudio");

class DomainRobot {
  /**
   *
   * @param {string} user
   * @param {string} password
   */
  constructor(domainRobotConfig) {
    this.domainRobotConfig = domainRobotConfig;
  }

  // contact stuff
  contact(contactModel) {
    return new ContactService(contactModel, this.domainRobotConfig);
  }

  // certificate stuff
  certificate(certificateModel = null) {
    return new certificateService(certificateModel, this.domainRobotConfig);
  }

  domainStudio(domainStudioEnvelopeSearchRequest) {
    return new DomainStudio(
      domainStudioEnvelopeSearchRequest,
      this.domainRobotConfig
    );
  }
}

module.exports = DomainRobot;
