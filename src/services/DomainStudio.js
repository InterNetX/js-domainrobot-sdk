let AbstractService = require("./AbstractService");
const DomainRobotException = require("../lib/DomainRobotException");
const DomainRobotResult = require("../lib/DomainRobotResult");

class DomainStudio extends AbstractService {
  constructor(domainStudioEnvelopeSearchRequest, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = domainStudioEnvelopeSearchRequest;
  }

  async search() {
    try {
      let result = await this.axios(
        Object.assign(
          {
            method: "POST",
            url: this.domainRobotConfig.url + "/domainstudio",
            data: this.model
          },
          this.axiosconfig
        )
      );
      return new DomainRobotResult(result.data, result.status);
    } catch (error) {
      throw new DomainRobotException(
        error.response.data,
        error.response.status
      );
    }
  }
}

module.exports = DomainStudio;
