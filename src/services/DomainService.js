let DomainRobotService = require("./DomainRobotService");

class Domain extends DomainRobotService {
  constructor(domainRobotConfig) {
    super(domainRobotConfig);
  }

  async create(model) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain",
        model
    );
  }

  async update(model) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain/"+model.name,
        model
    );
  }

  async transfer(model) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/_transfer",
        model
    );
  }

  async updateStatus(model){
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain/" + model.name + "/_statusUpdate",
        model
    );
  }

  async renew(model) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain/" + model.name + "/_renew",
        model
    );
  }

  async restore(model) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + model.name + "/_restore",
        model
    );
  }

   /** The following keys can be used for filtering, ordering or fetching additional
     * data via query parameter:<br>
     *
     * * parking
     * * certificate
     * * adminc
     * * cancelation
     * * action
     * * zonec
     * * nserver
     * * techc
     * * nsentry
     * * dnssec
     * * period
     * * created
     * * sld
     * * tld
     * * subtld
     * * deleted
     * * autorenew
     * * expire
     * * domainsafe
     * * comment
     * * ownerc
     * * updated
     * * remarks
     * * authinfo
     * * status
     */
  async restoreList(model, keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/restore/_search?keys=" + keysString,
        model
    );
  }

  async info(name) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/domain/" + name
    );
  }

   /** The following keys can be used for filtering, ordering or fetching additional
    * data via query parameter:
    *
    * * sld
    * * subtld
    * * tld
    * * status
    * * authinfo
    * * expire
    * * comment
    * * ownerc
    * * updated
    * * zonec
    * * nserver
    * * techc
    * * adminc
    * * certificate
    * * created
    * * autorenew
    */
    async list(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/domain/_search" + keysString,
            model
        );
    }

  async authInfo1Create(name){
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_authinfo1"
    );
  }

  async authInfo1Delete(name){
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_authinfo1"
    );
  }

  async authInfo2Create(name){
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_authinfo2"
    );
  }

  async cancelationCreate(model){
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + model.name + "/cancelation",
        model
    );
  }

  async cancelationUpdate(model){
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain/" + model.name + "/cancelation",
        model
    );
  }

  async cancelationDelete(name){
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/cancelation"
    );
  }

  async cancelationInfo(name){
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/cancelation"
    );
  }

  async cancelationList(model, keys = []){
      let keysString = '';
      if (keys.length > 0) {
          keysString = "?keys[]=" + keys.join('&keys[]=');
      }
      return await this.sendPostRequest(
          this.domainRobotConfig.url + "/domain/cancelation/_search" + keysString,
          model
      );
  }

}

module.exports = Domain;
