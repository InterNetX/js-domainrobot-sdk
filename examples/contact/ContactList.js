/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict";

const DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot
const DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels

const Logger = use("Logger")

class ContactList {
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

        // Create an Instance of the Query Object  
        // and define the Search Filters
        // All possible Query Operators are listed at the following Page:
        // https://help.internetx.com/pages/viewpage.action?pageId=14881040
        let query = new DomainRobotModels.Query({
            'filters': [
                {
                    "key": "lname",
                    "value": "%test%",
                    "operator": "LIKE"
                },
                {
                    "key": "pcode",
                    "value": "93055",
                    "operator": "EQUAL"
                }
            ],
            'view': new DomainRobotModels.QueryView({
                'children': true,
                'limit': '10'
            })
        });
        
        // Send an Request and react to Success or Error Results
        try {
            // If the Request is Successful the returned Object
            // will be of the Type DomainRobotResult

            // Query the Contact List
            const domainRobotResult = await domainRobot.contact().list(query)

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // If the Request produces an Error the returned Object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = ContactList