class DomainRobotException {
  constructor(error, status) {
    this.error = error;
    this.status = status;
    this.type = "DomainRobotException"
  }
}

module.exports = DomainRobotException;
