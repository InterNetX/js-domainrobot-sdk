let DomainRobotService = require("./DomainRobotService");

class User extends DomainRobotService {

    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async create(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/user",
            model
        );
    }

    async info(user, context, queries = []) {

        let queryString = "";
        if (queries.length > 0) {
            queryString = "?" + queries.join("&")
        }

        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + queryString
        );
    }

    async update(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context,
            model
        );
    }

    async delete(user, context) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context
        );
    }

    async list(model, keys = []) {
        let keysString = "";
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join("&keys[]=");
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/user/_search" + keysString,
            model
        );
    }

    async newPassword(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/_newPassword?token=" + model.token,
            model
        );
    }

    async newPasswordVerifiy(token) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/_newPasswordVerify?token=" + token
        );
    }

    async ssoActionVerifiy(token) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/_sso/" + token
        );
    }

    async userActionVerifiy(token) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/_verify/" + token
        );
    }

    async billingObjectLimitInfo(keys = [], articleTypes = []) {

        let queryString = "";
        if (keys.length > 0) {
            queryString = "?keys[]=" + keys.join("&keys[]=");
        }
        if (articleTypes.length > 0) {
            if ( queryString.length === 0 ) {
                queryString += "?"
            } else {
                queryString += "&"
            }
            queryString += "articleTypes[]=" + articleTypes.join("&articleTypes[]=");
        }

        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/billinglimit" + queryString
        );
    }

    async billingObjectTermsInfo() {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/billingterm"
        );
    }

    async updateLock(user, context, keys = []) {
        let keysString = "";
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join("&keys[]=");
        }

        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/_lock" + keysString
        );
    }

    async updateUnlock(user, context, keys = []) {
        let keysString = "";
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join("&keys[]=");
        }

        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/_unlock" + keysString
        );
    }

    async aclInfo(user, context) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/acl"
        );
    }

    async aclUpdate(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context + "/acl",
            model
        );
    }

    async copy(user, context, model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/copy",
            model
        );
    }

    async profileInfo(user, context, prefix = "") {
        if (prefix != "") {
            prefix = "/" + prefix
        }
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/profile" + prefix 
        );
    }

    async profileUpdate(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context + "/profile",
            model
        );
    }

    async serviceProfileInfo(user, context, prefix = "") {
        if (prefix != "") {
            prefix = "/" + prefix
        }
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/serviceProfile" + prefix 
        );
    }

    async serviceProfileUpdate(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context + "/serviceProfile",
            model
        );
    }
}

module.exports = User;
