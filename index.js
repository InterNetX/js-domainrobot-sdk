const DomainRobot = require("./src/Domainrobot");
const DomainRobotHeaders = require("./src/lib/Headers");

const specs = require("./src/lib/specs.json");
const ApiFactory = require("./src/lib/Factory");
const Backend = new ApiFactory(specs);
const DomainRobotModels = Backend.models;
const DomainRobotService = require("./src/services/DomainRobotService")

//export default Domainrobot;
module.exports = {
	DomainRobot,
	DomainRobotHeaders,
    DomainRobotModels,
    DomainRobotService
};
