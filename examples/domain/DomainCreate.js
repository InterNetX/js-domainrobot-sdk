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

class DomainCreate {
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
                context: "4"
            }
        });

        // next create and fill the DomainRobot domain model
        let domainModel = new DomainRobotModels.Domain({
            name: "js-sdk-test.de",
            nameServers: [
                new DomainRobotModels.NameServer({
                    name: "ns1.example.com"
                }),
                new DomainRobotModels.NameServer({
                    name: "ns2.example.com"
                })
            ]
        });

        // we need to set contacts; for this we inquire a contact we already know
        // and pass it into the DomainModel
        let contact = domainrobot.contact().info(23194139);
        // contact is an intance of a Contact model
        domainModel.adminc = contact;
        domainModel.ownerc = contact;
        domainModel.techc = contact;
        domainModel.zonec = contact;
        domainModel.ignoreWhois = true;
        
        // finally send the actual request and react to success and error results
        try {
            // if the request is successful the returned object
            // will be of the Type DomainRobotResult
            let domainRobotResult = await domainRobot.domain().create(domainModel);

            Logger.transport("file").error("Request success", domainRobotResult);

            return domainRobotResult;
        } catch (DomainRobotException) {
            // if the request produces an error the returned object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException);
        }
    }
}

module.exports = DomainCreate;
