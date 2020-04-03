/* global require,module */
let DomainRobotService = require("./DomainRobotService");

class Accounting extends DomainRobotService {
    constructor(productModel, domainRobotConfig) {
        super(domainRobotConfig);
        this.model = productModel;
      }

    async calculate(){
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/accounting/calculate",
            this.model
        );
    }
}

module.exports = Accounting;
