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
let AccountingService = require("./services/AccountingService");
let LoginService = require("./services/LoginService");

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
    contact() {
        return new ContactService(this.domainRobotConfig);
    }

    // certificate stuff
    certificate() {
        return new CertificateService(this.domainRobotConfig);
    }

    domain() {
        return new DomainService(this.domainRobotConfig);
    }

    sslcontact() {
        return new SslContactService(this.domainRobotConfig);
    }

    zone() {
        return new ZoneService(this.domainRobotConfig);
    }

    trustedapp() {
        return new TrustedAppService(this.domainRobotConfig);
    }

    domainStudio() {
        return new DomainStudio(this.domainRobotConfig);
    }

    poll() {
        return new PollService(this.domainRobotConfig);
    }

    transferout() {
        return new TransferOutService(this.domainRobotConfig);
    }

    login() {
        return new LoginService(this.domainRobotConfig);
    }

    //   accounting(){
    //       return new AccountingService(this.domainRobotConfig);
    //   }
}

module.exports = DomainRobot;