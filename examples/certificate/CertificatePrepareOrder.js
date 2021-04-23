/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict";

const DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot
const DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels

const Logger = use("Logger")

class CertificatePrepareOrder {
    async sdk({ request, response, params }) {
        
        // Create a new Instance of the Domainrobot SDK
        // and provide your (AutoDNS) Authentication Data
        // The Option auth.context is optional for non personal 
        // AutoDNS Users but mandatory for personal ones
        let domainRobot = new DomainRobot({
            url: "https://api.demo.autodns.com/v1",
            auth: {
                user: "user",
                password: "password",
                context: "4"
            }
        });

        // Create an Instance of the Certificate Data Object
        let certifcateData = new DomainRobotModels.CertificateData()

        // Set the Domain Name for the Certificate
        certifcateData.name = "js-sdk-test.de"

        // Select the SSL Product we want
        certifcateData.product = "SSL123"

        // An Example Certificate Signing Request
        let csr  = "-----BEGIN CERTIFICATE REQUEST-----\r\n"
            csr += "MIICXjCCAUYCAQAwGTEXMBUGA1UEAxMOanMtc2RrLXRlc3QuZGUwggEiMA0GCSqG"
            csr += "SIb3DQEBAQUAA4IBDwAwggEKAoIBAQDFWG7Gg4S0ku0jb+v+eG4WE9aTlAJ1JTOu"
            csr += "H5P5cqjiqA0/+H8npIUx1zTDGAniragBAwGI/7pzjJfxMsZnh3G5qyyPKjyHQxN3"
            csr += "h0OVnHc1THOWfg2g4y2bXdll0p8sB1o7C4ABArH/x0+4UODorUR7zD2xJhdSdljR"
            csr += "CeUYcUYFhuPW6RjBw+/S06R6/w9NrwIBrwZ9f6hxf/weMXj5TCYdF3cjaBiwtDYw"
            csr += "JdjrhIjoj+TSZC7X0na/UvYCZkZD6a74TY16XJO3Q7rYEqt6G2yOae/pPzaaT7vV"
            csr += "T4cGJ56dgzdjgT56+Grgk5YZToKcaWlgc5pDcyUMSSIw8ZtD5x6HAgMBAAGgADAN"
            csr += "BgkqhkiG9w0BAQUFAAOCAQEAbVf5C9tj5WcPJTZwnE5sSZI9fAwxCXeO3LCZngPl"
            csr += "2JVUVPhf6ca3nw8iZlCflpzNNwJSJj/Q5gco8aJ54zqGDL8/W4TbEwZhspehxYkO"
            csr += "QaK5EyXOPbk6s/sp+Ff7eHqmMAZmDb3xMppnqvt5lXyyOyOAtlc1HOmn2qdxgpGn"
            csr += "lyAT3walwkDewz55XUypNp4Dut96MGWhOLmWpgZZQ+vcpbPesCNjHJliFRrKPJoD"
            csr += "X1Mxyn+t3H/ILFZoae6hKNUzXq6udPPHYk7ZYRbdT2l0YO440qEe2PHcMLeuxhJe"
            csr += "H/IH2b7GBIOhlqZsnQ6OtukhxIwtYlnoijZeWpNor5BTqQ==\r\n"
            csr += "-----END CERTIFICATE REQUEST-----"

        // An Example Certificate Signing Request
        certifcateData.csr = csr

        // Send an Request and react to Success or Error Results
        try {
            // If the Request is Successful the returned Object
            // will be of the Type DomainRobotResult
            const domainRobotResult = await domainRobot.certificate().prepareOrder(certifcate)

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // If the Request produces an Error the returned Object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = CertificatePrepareOrder