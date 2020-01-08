/* global require,module */
let AbstractModel = require("./AbstractModel");

class ContactModel extends AbstractModel {
  modelDefinition() {
    return {
      id: {
        type: String
      },
      alias: {
        type: String
      },
      type: {
        type: String
      },
      organization: {
        type: String
      },
      title: {
        type: String
      },
      city: {
        type: String
      },
      country: {
        type: String
      },
      state: {
        type: String
      },
      email: {
        type: String
      },
      fname: {
        type: String
      },
      lname: {
        type: String
      },
      address: {
        type: String
      },
      pcode: {
        type: String
      },
      phone: {
        type: String
      },
      fax: {
        type: String
      }
    };
  }
}

module.exports = ContactModel;
