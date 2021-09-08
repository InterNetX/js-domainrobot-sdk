/* global require,module */
let DomainRobotService = require("./DomainRobotService");

class CertificateService extends DomainRobotService {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    prepareCsr(model) {

        let matches = model.csr
            .trim()
            .replace(/(\r\n|\n|\r)/gm, "")
            .match(
                /^(-----BEGIN CERTIFICATE REQUEST-----)(.*)(-----END CERTIFICATE REQUEST-----)$/
            );
        if (matches !== null) {
            model.csr = [matches[1], matches[2], matches[3]].join("\r\n");
        }

        return model;
    }

    async create(model) {
        model = this.prepareCsr(model);

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/certificate",
            model
        );
    }

    async createRealtime(model) {
        model = this.prepareCsr(model);

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/certificate/_realtime",
            model
        );
    }

    /**
     * @return CertificateData
     */
    async prepareOrder(model) {
        model = this.prepareCsr(model);
        model.plain = model.csr;
        model.csr = null;
        model.lifetime = null;
        model.name = null;
        model.authentication = null;

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/certificate/_prepareOrder",
            model
        );
    }

    async list(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/certificate/_search" + keysString,
            model
        );
    }

    async info(certificateId) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/certificate/" + certificateId
        );
    }

    async reissue(model) {
        model = this.prepareCsr(model);

        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/certificate/" + model.id,
            model
        );
    }

    async delete(certificateId) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/certificate/" + certificateId
        );
    }

    async renew(model) {
        model = this.prepareCsr(model);

        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/certificate/" + model.id + "/_renew",
            model
        );
    }

    async comment(model) {
        model = this.prepareCsr(model);

        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/certificate/" + model.id + "/_comment",
            model
        );
    }
}

module.exports = CertificateService;
