/* global require,module */
// services

const ContactService = require("./services/ContactService")
const CertificateService = require("./services/CertificateService")
const DomainStudio = require("./services/DomainStudio")
const DomainService = require("./services/DomainService")
const SslContactService = require("./services/SslContactService")
const ZoneService = require("./services/ZoneService")
const TrustedAppService = require("./services/TrustedAppService")
const PollService = require("./services/PollService")
const TransferOutService = require("./services/TransferOutService")
const LoginService = require("./services/LoginService")
const UserService = require("./services/UserService")
const User2faService = require("./services/User2faService")
const WhoisService = require("./services/WhoisService")
const DomainBulkService = require("./services/DomainBulkService")
const PcDomainsService = require("./services/PcDomainsService") 
const TradeMark = require("./services/TradeMark")

class DomainRobot {
    /**
     *
     * @param {string} user
     * @param {string} password
     */
    constructor(domainRobotConfig) {
        this.domainRobotConfig = domainRobotConfig
    }

    // contact stuff
    contact() {
        return new ContactService(this.domainRobotConfig)
    }

    // certificate stuff
    certificate() {
        return new CertificateService(this.domainRobotConfig)
    }

    domain() {
        return new DomainService(this.domainRobotConfig)
    }

    sslcontact() {
        return new SslContactService(this.domainRobotConfig)
    }

    zone() {
        return new ZoneService(this.domainRobotConfig)
    }

    trustedapp() {
        return new TrustedAppService(this.domainRobotConfig)
    }

    domainStudio() {
        return new DomainStudio(this.domainRobotConfig)
    }

    poll() {
        return new PollService(this.domainRobotConfig)
    }

    transferout() {
        return new TransferOutService(this.domainRobotConfig)
    }

    login() {
        return new LoginService(this.domainRobotConfig)
    }

    user() {
        return new UserService(this.domainRobotConfig)
    }

    user2fa() {
        return new User2faService(this.domainRobotConfig)
    }

    whois() {
        return new WhoisService(this.domainRobotConfig)
    }

    domainBulk() {
        return new DomainBulkService(this.domainRobotConfig)
    }

    pcDomains() {
        return new PcDomainsService(this.domainRobotConfig)
    }

    tmch() {
        return new TradeMark(this.domainRobotConfig)
    }
}

// Singleton Instance of DomainRobot Object
// Object.freeze(DomainRobot)

module.exports = DomainRobot;
