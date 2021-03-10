const DomainRobot = require("./src/Domainrobot");
const DomainRobotHeaders = require("./src/lib/Headers");

const domainrobot = require("./src/swagger/domainrobot.json");
const pcdomains = require("./src/swagger/pcdomains.json");


const ApiFactory = require("./src/lib/Factory");
const PcDomains = new ApiFactory(pcdomains);
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Object.assign(Backend.models, PcDomains.models);

const DomainRobotService = require("./src/services/DomainRobotService")

//export default Domainrobot;
module.exports = {
	DomainRobot,
	DomainRobotHeaders,
    DomainRobotModels,
    DomainRobotService
};