const CustomerList = require("./customer/CustomerList")

const mocks = {
    "customer": {
        "list": CustomerList
    }
}

/**
 * Returns a DomainRobot.Result object
 * 
 * @param virtualPath Array
 * @returns MockResponse
 */
module.exports = (virtualPath) => {
    const mockResponse = mocks[virtualPath[0]][virtualPath[1]];
    if (mockResponse === undefined){
        throw "Mock mode active, but no MockResponse found.";
    }

    return mockResponse;
}