let DomainRobotService = require("./DomainRobotService");

class User extends DomainRobotService {

    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    /**
     * Create a new user.
     * 
     * @param model DomainRobotModels.User
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>
     */
    async create(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/user",
            model
        );
    }

    /**
     * Inquire user.
     * 
     * @param user string
     * @param context number 
     * @param queries string[] {Available values: acl, profiles, customer, subscription, nameServerGroup}
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>
     */
    async info(user, context, queries = ['subscription']) {

        let queryString = "";
        if (queries.length > 0) {
            queryString = "?" + queries.join("&")
        }

        const blub = await this.sendGetRequest(
          this.domainRobotConfig.url + "/user/" + user + "/" + context + queryString
        )

        return blub
    }

    /**
     * Update user.
     * 
     * @param model DomainRobotModels.User
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>
     */
    async update(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context,
            model
        );
    }

    /**
    * Delete user.
    *
    * @param user string
    * @param context number
    * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>
    */
    async delete(user, context) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context
        );
    }

    /**
     * Inquire a list of users with certain details. The data to be displayed can be extended per url paremeter.
     * 
     * @param model DomainRobotModels.Query
     * @param keys string[]
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>
     */
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

    /**
     * Set a new password for current user.
     * 
     * @param model DomainRobotModels.NewPassword
     * @returns Promise<DomainRobotResult<JsonResponseDataVoid, number>>
     */
    async newPassword(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/_newPassword?token=" + model.token,
            model
        );
    }

    /**
     * Verifiy password.
     * 
     * @param token string
     * @returns Promise<DomainRobotResult<JsonResponseDataVoid, number>>
     */
    async newPasswordVerify(token) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/_newPasswordVerify?token=" + token
        );
    }

    /**
     * Applying a verification code for a signle sign on.
     * 
     * @param token string
     * @returns Promise<DomainRobotResult<JsonResponseDataUser, number>>
     */
    async ssoActionVerify(token) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/_sso/" + token
        );
    }

    /**
     * Applying a verification code for an user action.
     *
     * @param token string
     * @returns Promise<DomainRobotResult<JsonResponseDataUser, number>>
     */
    async userActionVerify(token) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/_verify/" + token
        );
    }

    /**
     * Inquiring the billing limit data for the logged in user.
     * 
     * @param keys string[] {Available values : excludeUnlimited, count}
     * @param articleTypes string[] {E.g: domain, package}
     * @returns Promise<DomainRobotResult<JsonResponseDataBillingLimit, number>>
     */
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
    
    /**
     * Inquire the terms of the contact for the logged in user.
     * 
     * @returns Promise<DomainRobotResult<JsonResponseDataBillingObjectTerms, number>>>
     */
    async billingObjectTermsInfo() {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/billingterm"
        );
    }

    /**
     * Lock an existing user.
     * 
     * @param user string 
     * @param context number
     * @param keys string[] {Available values : children}
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>>
     */
    async updateLock(user, context, keys = []) {
        let keysString = "";
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join("&keys[]=");
        }

        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/_lock" + keysString
        );
    }

    /**
     * Unlock an existing user.
     * 
     * @param user string
     * @param context number
     * @param keys string[] {Available values : children}
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>>
     */
    async updateUnlock(user, context, keys = []) {
        let keysString = "";
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join("&keys[]=");
        }

        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/_unlock" + keysString
        );
    }

    /**
     * Inquire the Action Control List (ACL) data for the specified user.
     * 
     * @param user string
     * @param context number
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>>
     */
    async aclInfo(user, context) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/acl"
        );
    }

    /**
     * Update the Action Control List (ACL) for the specified user.
     * 
     * @param model DomainRobotModels.User
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>>
     */
    async aclUpdate(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context + "/acl",
            model
        );
    }

    /**
     * Copy an existing user.
     * 
     * @param user string
     * @param context number
     * @param model DomainRobotModels.User
     * @returns Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>
     */
    async copy(user, context, model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/copy",
            model
        );
    }

    /**
     * Inquire the user profile of the specified user.
     * 
     * @param user string
     * @param context number
     * @param prefix string | undefined
     * @returns Promise<DomainRobotResult<JsonResponseDataUserProfileViews, number>>
     */
    async profileInfo(user, context, prefix = "") {
        if (prefix != "") {
            prefix = "/" + prefix
        }
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/profile" + prefix 
        );
    }

    /**
     * Update the profile of the specified user.
     * 
     * @param model DomainRobotModels.User
     * @returns Promise<DomainRobotResult<JsonResponseDataUserProfileViews, number>>
     */
    async profileUpdate(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context + "/profile",
            model
        );
    }

    /**
     * Inquire the service user profile for the specified user.
     * 
     * @param user string
     * @param context number
     * @param prefix string
     * @returns Promise<DomainRobotResult<JsonResponseDataServiceUsersProfile, number>>
     */
    async serviceProfileInfo(user, context, prefix = "") {
        if (prefix != "") {
            prefix = "/" + prefix
        }
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/user/" + user + "/" + context + "/serviceProfile" + prefix 
        );
    }

    /**
     * Update the service user profile for the specified user.
     * 
     * @param model DomainRobotModels.User
     * @returns Promise<DomainRobotResult<JsonResponseDataServiceUsersProfile, number>>
     */
    async serviceProfileUpdate(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/user/" + model.user + "/" + model.context + "/serviceProfile",
            model
        );
    }
}

module.exports = User;
