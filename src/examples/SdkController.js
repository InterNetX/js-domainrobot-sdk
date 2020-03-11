/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict";
let DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot;
let DomainRobotHeaders = require("@internetx/js-domainrobot-sdk")
  .DomainRobotHeaders;
let DomainRobotModels = require("@internetx/js-domainrobot-sdk")
  .DomainRobotModels;

const Logger = use("Logger");

class SdkController {
  async sdk({ request, response, params }) {
    //  create a new instance of the Domainrobot SDK
    // and provide your (AutoDNS) authentication data
    // url and auth.context is optional for non personal AutoDNS users
    // but mandatory for personal AutoDNS users
    let domainRobot = new DomainRobot({
      url: "http://dev-proxy-lab.intern.autodns-lab.com:10025",
      auth: {
        user: "user",
        password: "password",
        context: "9"
      }
    });

    // next create and fill the DomainRobot certificate model
    let certficateModel = new DomainRobotModels.Certificate({
      product: "BASIC_SSL",
      lifetime: {
        unit: "MONTH",
        period: 12
      }
    });

    certficateModel.csr =
      "-----BEGIN CERTIFICATE REQUEST-----" +
      "MIICozCCAYsCAQAwXjELMAkGA1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUx" +
      "ITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDEXMBUGA1UEAwwOanVu" +
      "a2RyYWdvbnMuZGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCg0iCq" +
      "dclIXkKqtt/XW0t4D8bWIqWm9BnQtlfjDi4OkTT7VbBlP3CMmBE7ex+XwD9YAcnt" +
      "YLTBZsmFSTvVtucgbgDytbz02Y8KYCGhW5CbiZf+zJsSlB/UA4YG1ObfFIdMSqdj" +
      "GAzagaClRIpvcjRNdnBVJ3Ul6P9cu++YPe46j04zz4TWaoZi61tKPAzKw94lHkvt" +
      "DdP5mkaz3MVFkIBRZgO79ArGTD7oa5m1aAVqOxam2BqNY+DQ59BdmKes9rPObqiT" +
      "p5DY28y1uMQc/0pN8QwIIoVX8lzjLA7Sz2SvkxhAFzY2dkhc4+1VfYkIO8jeV4jt" +
      "VTD4ZrJoEIky6xGHAgMBAAGgADANBgkqhkiG9w0BAQsFAAOCAQEAamGkZwnvIlIW" +
      "y5AXNTM6as/+dWGJ1rCmAhh4npGkWOZHKsK9kFFhMwhwn4IJY0r5y7c9M+6/K8pY" +
      "HQayInWtVjZcVI3NUNCt6dQ5QzNAexNkgjiOl/JNlaced7kKxQe+P3o0vHRO4Vef" +
      "w7LkyMrM4K8iZgB2DX++Iyj6Cn5v95DTX01ndabW+ycKPFznrZcVnqwL0HznaAnH" +
      "F9Q6XMyEEcr70G3QofekvdjmRc1WhzYEKi8yk3FBQyYrA54s9dcIj2jbTgZFW4vx" +
      "yS/BLSVfAShHP9IOYi5zb2zUYugtQX13KXLe5eCwa6S99FpFlkStgaczjdoacebY" +
      "adX6zVC8Uw==" +
      "-----END CERTIFICATE REQUEST-----";
    certficateModel.name = "junkdragons.de";
    certficateModel.lifetime = {
      unit: "MONTH",
      period: 12
    };
    certficateModel.product = "BASIC_SSL";

    certficateModel.authentication = {
      method: "FILE"
    };

    // finally send the actual request and react to success and error results
    try {
      // if the request is successful the returned object
      // will be of the Type DomainRobotResult
      let domainRobotResult = await domainRobot
        .certificate(certficateModel)
        .createRealtime();

      Logger.transport("file").error("Request success", domainRobotResult);

      let domainRobotResult2 = await domainRobot
        .certificate(certficateModel)
        .renew(certficateModel.id);

      Logger.transport("file").error("Request success", domainRobotResult2);
    } catch (DomainRobotException) {
      // if the request produces an error the returned object
      // will be of the Type DomainRobotException
      Logger.transport("file").error("Request error", DomainRobotException);
    }
  }
}

module.exports = SdkController;
