const prepareOrder = require('./Certificate/PrepareOrderResponse.json')
const sslContactList = require('./SSLContact/SSLContactList.json')
const documentSigningInfo = require('./Certificate/DocumentSingningInfo.json')

const mocks = {
  "certificate": {
    "prepareOrder": prepareOrder,
    "info": documentSigningInfo
  },
  "sslcontact": {
    "list": sslContactList
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