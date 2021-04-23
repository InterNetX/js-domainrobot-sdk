/**
 * This is an example implementation of the sdk for AdonisJS (https://adonisjs.com/)
 */

"use strict"

const DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot
const DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels

const Logger = use("Logger")

class ContactCreate {
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

        // Create an Instance of the Contact Object
        let contact = new DomainRobotModels.Contact()

        // Set the Person Type
        // Possible Values are PERSON, ORG, ROLE
        contact.type = "PERSON"

        // Set an Alias for the Contact 
        contact.alias = "contact_alias"

        // Set the City the Contact resides in
        contact.city = "city"

        // Set the State the Contact resides in
        contact.state = "state"

        // Set the Adress of the Contact
        // Note: The Field is an Array with multiple Values
        contact.address = [
            "address line 1",
            "address line 2"
        ]

        // Set the Postal Code of the Contact
        contact.pcode = "12345"

        // Set the Firstname of the Contact
        contact.fname = "firstname"

        // Set the Lastname of the Contact
        contact.lname = "lastname"

        // Set the Email of the Contact
        contact.email = "firstname.lastname@example.com"

        // Set the Phone of the Contact
        contact.phone = "+49 123 4567"

        // Set the Fax of the Contact
        contact.fax = "+49 123 4568"

        // Set an Comment 
        contact.comment = "some comment"

        // Set an NIC handle for a specific TLD
        contact.nicRef = [
            new DomainRobotModels.ContactReference({
                nic: new DomainRobotModels.NicMember({
                    'label': 'tld'
                })
            })
        ]

        // Set an Contact Extension for an specific TLD
        // In this Example we set an General Extension an 
        // define the Gender of the Contact and we set an
        // Extension for the IT TLD and set the Entity Type
        // of the Contact
        contact.extensions = {
            general: new DomainRobotModels.ContactGeneralExtensions({
                gender: 'MALE'
            }),
            it: new DomainRobotModels.ContactItExtensions({
                'entityType': 1 
            })
        }

        // Send an Request and react to Success or Error Results
        try {
            // If the Request is Successful the returned Object
            // will be of the Type DomainRobotResult

            // Create an Contact
            const domainRobotResult = await domainRobot.contact().create(contact)

            Logger.transport("file").info("Request success", domainRobotResult)

            return domainRobotResult

        } catch (DomainRobotException) {
            // If the Request produces an Error the returned Object
            // will be of the Type DomainRobotException
            Logger.transport("file").error("Request error", DomainRobotException)
        }
    }
}

module.exports = ContactCreate
