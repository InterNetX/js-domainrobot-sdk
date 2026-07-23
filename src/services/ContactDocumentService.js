let DomainRobotService = require("./DomainRobotService");

class ContactDocumentService extends DomainRobotService {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    async upload(contactId, type, formData, keys = []) {
        let keysString = "";
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join("&keys[]=");
        }
        // The base service sets a global default Content-Type of
        // "application/json" (axios.defaults.headers.common). For a FormData
        // upload that default would win and break the multipart request, so we
        // clear it per-request. axios 1.x then auto-detects the FormData
        // payload and sets "multipart/form-data" incl. the boundary itself.
        this.axiosconfig.headers = {
            ...(this.axiosconfig.headers || {}),
            "Content-Type": null,
        };

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/contact/" + contactId + "/document/" + type + keysString,
            formData
        );
    }

    async update(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/contact/" + model.id,
            model
        );
    }

    async delete(id) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/contact/" + id
        );
    }

    async info(id) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/contact/" + id
        );
    }

    async list(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/contact/_search" + keysString,
            model
        );
    }

    /**
     * the data for the specified verification.
     * 
     * @param reference string
     * @returns Promise<DomainRobotResult<JsonResponseDataContactVerification,number>>
     */
    async verificationInfo(reference) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/contact/verification?reference=" + reference
        );
    }

    /**
      * the data for the specified verification.
      * 
      * mandatory fields in  DomainRobotResult.ContactVerification: reference, confirmIp, comment
      * 
      * @param model DomainRobotResult.ContactVerification
      * @returns Promise<DomainRobotResult<JsonResponseDataContactVerification,number>>
      */
    async verificationConfirm(model) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/contact/verification/_confirm",
            model
        );
    }
}

module.exports = ContactDocumentService;
