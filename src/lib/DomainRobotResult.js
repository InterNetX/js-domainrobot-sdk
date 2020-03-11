class DomainRobotResult {
  constructor(result, status) {
    this.result = result;
    this.status = status;
  }

  isValid() {
    if (this.result === undefined || this.result === null) {
      return false;
    }

    if (this.result.data === undefined || this.result.data[0] === undefined) {
      return false;
    }

    return true;
  }

  isValidResponse() {
    if (this.result === undefined || this.result === null) {
      return false;
    }

    return true;
  }
}

module.exports = DomainRobotResult;
