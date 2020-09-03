/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict";

let DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot

const Logger = use("Logger")

class DomainInfo {
    async sdk({ request, response, params }) {
        
        // Create a new Instance of the Domainrobot SDK
        // and provide your (AutoDNS) Authentication Data
        // The Option auth.context is optional for non personal 
        // AutoDNS Users but mandatory for personal ones
        let domainRobot = new DomainRobot({
            url: "http://dev-proxy-lab.intern.autodns-lab.com:10025",
            auth: {
                user: "user",
                password: "password",
                context: "4"
            }
        });
        
        // Send an Request and react to Success or Error Results
        try {
            // If the Request is Successful the returned Object
            // will be of the Type DomainRobotResult

            // Query an existing Domain
            let domainRobotResult = await domainRobot.domain().info("js-sdk-test.de")

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // If the Request produces an Error the returned Object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = DomainInfo