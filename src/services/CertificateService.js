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

    async createDocumentSigning(model) {
      return await this.sendPostRequest(
        this.domainRobotConfig.url + "/certificate",
        model
      );
    }

  async createCodeSigning(model) {
    if(model.csr !== undefined){
      model = this.prepareCsr(model);
    }
    return await this.sendPostRequest(
      this.domainRobotConfig.url + "/certificate",
      model
    );
  }

    async createVMC(model) {
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
        model.csr = model.plain
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

    convertCertificateToCertificateData(model){
      return new DomainRobotModels.CertificateData({
        plain: model.csr,
        name: model.name,
        san: model.subjectAlternativeNames,
        histories: model.histories,
        product: model.product,
      })
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
        this.virtualPath = ['certificate', 'info']
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

    async reissueDocumentSigning(model) {
      return await this.sendPutRequest(
        this.domainRobotConfig.url + "/certificate/" + model.id,
        model
      );
    }

    async reissueCodeSigning(model) {
      if (model.csr !== undefined) {
        model = this.prepareCsr(model);
      }
      return await this.sendPutRequest(
        this.domainRobotConfig.url + "/certificate/" + model.id,
        model
      );
    }

    async reissueVMC(model) {

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

    async renewDocumentSigning(model) {

      return await this.sendPutRequest(
        this.domainRobotConfig.url + "/certificate/" + model.id + "/_renew",
        model
      );
    }

    async renewCodeSigning(model) {
      if (model.csr !== undefined) {
        model = this.prepareCsr(model);
      }
      return await this.sendPutRequest(
        this.domainRobotConfig.url + "/certificate/" + model.id + "/_renew",
        model
      );
    }

    async renewVMC(model) {

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
