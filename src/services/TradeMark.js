const DomainRobotServiceInternal = require('./DomainRobotService');

class TradeMark extends DomainRobotServiceInternal {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async get(reference) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + '/tmchMark/' + reference
        );
    }
}

module.exports = TradeMark;