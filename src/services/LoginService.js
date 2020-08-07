let DomainRobotService = require("./DomainRobotService");

class Login extends DomainRobotService {

    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async sessionID(model, queryParams = {}){
        let qPArr = [];
        for(let queryParam in queryParams){
            qPArr.push(queryParam.key + "=" + queryParam.valueOf);
        }
        let qP = qPArr.join("&");
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/login?"+qP,
            model
        );
    }
}

module.exports = Login;