import prepareOrder from './Certificate/PrepareOrderResponse.json'

const mocks = {
    "certificate": {
        "prepareOrder": prepareOrder
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