/* global require,module */
// services
let ContactService = require("./services/ContactService");
let CertificateService = require("./services/CertificateService");
let DomainStudio = require("./services/DomainStudio");
let DomainService = require("./services/DomainService");
let SslContactService = require("./services/SslContactService");
let ZoneService = require("./services/ZoneService");
let TrustedAppService = require("./services/TrustedAppService");
let PollService = require("./services/PollService");
let TransferOutService = require("./services/TransferOutService");
let AccountingService = require ("./services/AccountingService");

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
  contact(contactModel = null) {
    return new ContactService(contactModel, this.domainRobotConfig);
  }

  // certificate stuff
  certificate(certificateModel = null) {
    return new CertificateService(certificateModel, this.domainRobotConfig);
  }

  domain(domainModel = null) {
    return new DomainService(domainModel, this.domainRobotConfig);
  }

  sslcontact(sslcontactModel = null) {
    return new SslContactService(sslcontactModel, this.domainRobotConfig);
  }

  zone(zoneModel = null) {
    return new ZoneService(zoneModel, this.domainRobotConfig);
  }

  trustedapp(trustedAppModel = null) {
    return new TrustedAppService(trustedAppModel, this.domainRobotConfig);
  }

  domainStudio(domainStudioEnvelopeSearchRequest) {
    return new DomainStudio(
      domainStudioEnvelopeSearchRequest,
      this.domainRobotConfig
    );
  }

  poll() {
      return new PollService(this.domainRobotConfig);
  }

  transferout(){
      return new TransferOutService(this.domainRobotConfig);
  }

  accounting(subjectProductModel){
      return new AccountingService(subjectProductModel, this.domainRobotConfig);
  }
}

module.exports = DomainRobot;
