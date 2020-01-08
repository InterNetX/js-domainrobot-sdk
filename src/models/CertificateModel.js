/* global require, module */
let AbstractModel = require("./AbstractModel");

class CertificateModel extends AbstractModel {
  modelDefinition() {
    return {
      name: {
        type: String
      },
      lifetime: {
        type: JSON,
        unit: {
          type: String
        },
        period: {
          type: Number
        }
      },
      product: {
        type: String
      },
      csr: {
        type: String
      },
      authentication: {
        type: JSON,
        method: {
          type: String
        }
      }
    };
  }
}

module.exports = CertificateModel;
