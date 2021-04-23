/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict";

const DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot
const DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels

const Logger = use("Logger")

class DomainStudioSearch {
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

        // Create an Instance of the DomainEnvelopeSearchRequest Object
        let domainEnvelopeSearchRequest = new DomainRobotModels.DomainEnvelopeSearchRequest()

        // Create an Instance of the DomainStudioSources Object
        let domainStudioSources = new DomainRobotModels.DomainStudioSources()

        // Define parameters for the DomainStudioSources Suggestion
        domainStudioSources.suggestion = new DomainRobotModels.DomainStudioSourceSuggestion({
            "max": 5,
            "udeIdn": true
        })

        // Assign the DomainStudioSources to the DomainEnvelopeSearchRequest Object
        domainEnvelopeSearchRequest.sources = domainStudioSources

        // Set the Currency
        domainEnvelopeSearchRequest.currency = "USD"

        // Set the Search Term we want to get
        // Domain Name Suggestions for 
        domainEnvelopeSearchRequest.searchToken = "example"

        // Send an Request and react to Success or Error Results
        try {
            // If the Request is Successful the returned Object
            // will be of the Type DomainRobotResult

            // Search the DomainStudio
            const domainRobotResult = await domainRobot.domainStudio().search(domainEnvelopeSearchRequest)

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // If the Request produces an Error the returned Object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = DomainStudioSearch