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
let LoginService = require("./services/LoginService");
let UserService = require("./services/UserService");
let User2faService = require("./services/User2faService");
let AccountingService = require("./services/AccountingService");

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

    user() {
        return new UserService(this.domainRobotConfig);
    }

    user2fa() {
        return new User2faService(this.domainRobotConfig);
    }

    //   accounting(){
    //       return new AccountingService(this.domainRobotConfig);
    //   }
}

// Singleton Instance of DomainRobot Object
// Object.freeze(DomainRobot)

module.exports = DomainRobot;
