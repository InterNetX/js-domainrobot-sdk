//const Domainrobot = require("./src/Domainrobot");
let DomainRobot = require("./src/DomainRobot");
const DomainRobotHeaders = require("./src/lib/Headers");

let specs = require("./src/lib/specs.json");
let ApiFactory = require("./src/lib/Factory");
const Backend = new ApiFactory(specs);
const DomainRobotModels = Backend.models;

//export default Domainrobot;
module.exports = {
  DomainRobot,
  DomainRobotHeaders,
  DomainRobotModels
};
