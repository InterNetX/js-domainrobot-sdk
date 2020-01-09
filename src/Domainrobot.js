/* global require,module */
// services
let Contact = require("./services/Contact");
let Certificate = require("./services/Certificate");
let DomainStudio = require("./services/DomainStudio");

class Domainrobot {
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
    return new Contact(contactModel, this.domainRobotConfig);
  }

  // certificate stuff
  certificate(certificateModel) {
    return new Certificate(certificateModel, this.domainRobotConfig);
  }

  domainStudio(domainStudioEnvelopeSearchRequest) {
    return new DomainStudio(
      domainStudioEnvelopeSearchRequest,
      this.domainRobotConfig
    );
  }
}

module.exports = Domainrobot;
