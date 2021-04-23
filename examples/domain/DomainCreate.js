/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict"

const DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot
const DomainRobotHeaders = require("@internetx/js-domainrobot-sdk").DomainRobotHeaders
const DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels

const Logger = use("Logger")

class DomainCreate {
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

        // Next create and fill the DomainRobot Domain Model
        let domain = new DomainRobotModels.Domain({
            name: "js-sdk-test.de",
            nameservers: [
                new DomainRobotModels.NameServer({
                    name: "ns1.example.com"
                }),
                new DomainRobotModels.NameServer({
                    name: "ns2.example.com"
                })
            ]
        });

        // We need to set Contacts; For this we inquire a Contact
        // we already know and pass it into the DomainModel

        let contactInfo = domainrobot.contact().info(23194139)

        let contact = contactInfo.result.data[0]

        // contact is an intance of a Contact model
        domain.adminc = contact
        domain.ownerc = contact
        domain.techc = contact
        domain.zonec = contact
        
        // Send an Request and react to Success or Error Results
        try {
            // If the Request is Successful the returned Object
            // will be of the Type DomainRobotResult

            // Create the Domain
            const domainRobotResult = await domainRobot.domain().create(domain)

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // If the Request produces an Error the returned Object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = DomainCreate
