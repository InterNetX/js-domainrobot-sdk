/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict";

const DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot

const Logger = use("Logger")

class DomainUpdate {

    /**
     * Update the status of an Domain
     */
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

        // Query an existing Domain and get the Object
        let domainInfo = await domainRobot.domain().info("js-sdk-test.de")

        let domain = domainInfo.result.data[0]

        // Add an Comment
        domain.comment = "Some Comment"

        // Change the Nameservers of the Domain
        domain.nameservers = [
            new DomainRobotModels.NameServer({
                name: "ns3.example.de"
            }),
            new DomainRobotModels.NameServer({
                name: "ns4.example.de"
            })
        ]

        // Set the Domain General Request Email
        domain.generalRequestEmail = "requests@js-sdk-test.de"
        
        // Send an Request and react to Success or Error Results
        try {
            // If the Request is Successful the returned Object
            // will be of the Type DomainRobotResult

            // Update the Domain
            const domainRobotResult = await domainRobot.domain().update(domain)

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // If the Request produces an Error the returned Object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = DomainUpdate