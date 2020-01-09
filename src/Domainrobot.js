/* global require,module */
// services
let Contact = require("./services/Contact");
let Certificate = require("./services/Certificate");

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
}

module.exports = Domainrobot;
