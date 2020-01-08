/* global require,module */
// services
let Contact = require("./services/Contact");
let Certificate = require("./services/Certificate");
// models
let ContactModel = require("./models/ContactModel");
let CertificateModel = require("./models/CertificateModel");

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
  contactModel() {
    return new ContactModel();
  }

  // certificate stuff
  certificate(certificateModel) {
    return new Certificate(certificateModel, this.domainRobotConfig);
  }
  certificateModel() {
    return new CertificateModel();
  }
}

module.exports = Domainrobot;
