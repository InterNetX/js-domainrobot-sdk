const MockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const axiosMock = new MockAdapter(axios);

module.exports = function (){
    return axiosMock;
}