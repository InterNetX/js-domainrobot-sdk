/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict";

let DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot
let DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels

const Logger = use("Logger")

class DomainList {
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

        // Create an Instance of the Query Object  
        // and define the Search Filters
        // All possible Query Operators are listed at the following Page:
        // https://help.internetx.com/pages/viewpage.action?pageId=14881040
        let query = new DomainRobotModels.Query({
            'filters': [
                {
                    "key": "name",
                    "value": "%.de",
                    "operator": "LIKE"
                },
                {
                    "key": "created",
                    "value": "2020-08-10T00:00:00.000+0200",
                    "operator": "GREATER"
                }
            ],
            'view': new DomainRobotModels.QueryView({
                'children': true,
                'limit': '10'
            })
        });
        
        // send the actual request and react to success and error results
        try {
            // if the request is successful the returned object
            // will be of the Type DomainRobotResult

            // Query the Domain List
            let domainRobotResult = await domainRobot.domain().list(query)

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // if the request produces an error the returned object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = DomainList