class DomainRobotException {
  constructor(error, status) {
    this.error = error;
    this.status = status;
  }
}

module.exports = DomainRobotException;
