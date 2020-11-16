
// let DomainRobotService = require("./DomainRobotService");
// const DomainRobotModels = require('js-domainrobot-sdk').DomainRobotModels

let specs = require("../lib/specs.json");
let ApiFactory = require("../lib/Factory");
const Backend = new ApiFactory(specs);
const DomainRobotModels = Backend.models;

const DomainStudio = require("./DomainStudio");

class WhoisService extends DomainStudio {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }
  async single(domain) {

    let domains = []
    
    domains.push(domain)

    return await this.sendWhoisRequest(domains)
  }

  async multi(domains) {
    return await this.sendWhoisRequest(domains)
  }

  async sendWhoisRequest(domains) {

    let domainStudioSources = new DomainRobotModels.DomainStudioSources()

    domainStudioSources.custom = new DomainRobotModels.DomainStudioSourceCustom({
      'domains': domains,
      'services': [ 'WHOIS' ]
    })

    let domainEnvelopeSearchRequest = new DomainRobotModels.DomainEnvelopeSearchRequest()

    domainEnvelopeSearchRequest.sources = domainStudioSources

    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/domainstudio",
      domainEnvelopeSearchRequest
    );
  }
}

module.exports = WhoisService;
