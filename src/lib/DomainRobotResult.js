class DomainRobotResult {
    constructor(result, status) {
        this.result = result;
        this.status = status;
    }

    setHeaders(headers) {
        this.headers = headers;
    }

    getHeaders() {
        return this.headers;
    }

    isValid() {
        if (this.result === undefined || this.result === null) {
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
