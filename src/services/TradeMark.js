const DomainRobotServiceInternal = require('./DomainRobotService');

class TradeMarkService extends DomainRobotServiceInternal {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async info(reference) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + '/tmchMark/' + reference
        );
    }
}

module.exports = TradeMark;