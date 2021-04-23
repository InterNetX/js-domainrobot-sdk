import { 
    DomainRobot, 
    DomainRobotHeaders, 
    DomainRobotModels, 
    DomainRobotResult, 
    JsonResponseDataDomain } from "js-domainrobot-sdk";

// Create a new Instance of the Domainrobot SDK
// and provide your (AutoDNS) Authentication Data
// The Option auth.context is optional for non personal 
// AutoDNS Users but mandatory for personal ones
const domainRobot: DomainRobot = new DomainRobot({
    url: "https://api.demo.autodns.com/v1",
    auth: {
        user: "user",
        password: "password",
        context: "4"
    }
});

let domainRobotResult: DomainRobotResult<JsonResponseDataDomain, number>;

// Send an Request and react to Success or Error Results
try {
    // If the Request is Successful the returned Object
    // will be of the Type DomainRobotResult
    domainRobotResult = domainRobot.domain()
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
    console.log("Request error", DomainRobotException)
}

// domainRobotResult.result.data will always be an array even for single inquires 
// like in this example
const domainDataArray: DomainRobotModels.Domain[] = domainRobotResult.result.data;

// if its just a single inquire like in this example you can do this to extract the
// domain data
const domainData: DomainRobotModels.Domain = domainRobotResult.result.data[0];

// an alternative approach with ramda (ramdajs.com)
import * as R from 'ramda';

const domain: DomainRobotModels.Domain | undefined = R.path(['result', 'data', '0'], domainRobotResult) || undefined;