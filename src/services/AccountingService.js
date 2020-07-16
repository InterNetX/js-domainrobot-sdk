/* global require,module */
let DomainRobotService = require("./DomainRobotService");

class Accounting extends DomainRobotService {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
      }

    async calculate(model){
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/accounting/calculate",
            model
        );
    }
}

module.exports = Accounting;
