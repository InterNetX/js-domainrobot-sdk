const DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot
const DomainRobotHeaders = require("@internetx/js-domainrobot-sdk").DomainRobotHeaders


// Create a new Instance of the Domainrobot SDK
// and provide your (AutoDNS) Authentication Data
// The Option auth.context is optional for non personal 
// AutoDNS Users but mandatory for personal ones
const domainRobot = new DomainRobot({
    url: "https://api.demo.autodns.com/v1",
    auth: {
        user: "user",
        password: "password",
        context: "4"
    }
});

let domainData;

// Send an Request and react to Success or Error Results
try {
    // If the Request is Successful the returned Object
    // will be of the Type DomainRobotResult
    domainData = domainRobot.domain()
        .headers({
            //mandatory
            [DomainRobotHeaders.DOMAINROBOT_HEADER_OWNER]: "subusername",
            // mandatory if context is not 4  (default)
            [DomainRobotHeaders.DOMAINROBOT_HEADER_CONTEXT]: 4
        })
        .info("example.com");

} catch (DomainRobotException) {
    // If the Request produces an Error the returned Object
    // will be of the Type DomainRobotException
    Logger.transport("file").error("Request error", DomainRobotException)
}
