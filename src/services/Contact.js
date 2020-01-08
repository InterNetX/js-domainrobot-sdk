let AbstractService = require("./AbstractService");

class Contact extends AbstractService {
  constructor(contactModel, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = contactModel;
  }

  create() {
    this.axios(
      Object.assign(
        {
          method: "POST",
          url: this.domainRobotConfig.url + "/contact",
          data: this.model
        },
        this.axiosconfig
      )
    )
      .then(function(response) {
        console.log("success", response);
      })
      .catch(function(error) {
        console.log("error", error.response);
      });
  }
}

module.exports = Contact;
