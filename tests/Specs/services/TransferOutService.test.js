/* global describe, it, beforeEach, expect, require */

const compareJson = require("../../compareJson");

const Domainrobot = require("../../../src/Domainrobot");
const DomainRobotHeaders = require("../../../src/lib/Headers");
const domainrobot = require("../../../src/swagger/domainrobot.json");
const ApiFactory = require("../../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;
const ValidResponse = require("../../mock/ValidResponse.json");
const expect = require('expect.js');
const axiosMock = require('../../axios-mock');
const model = new DomainRobotModels.BulkDomainPatchRequest();

describe("TransferOutServiceTest", () => {
    let domainRobot;

    beforeEach(function () {
        domainRobot = new Domainrobot({
            auth: {
                user: "user",
                password: "password"
            }
        });
    });

    it("answer", async () => {    
        axiosMock().onPut().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .transferout()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/transferout\/example.com\/TRANSFER_OUT_ACK$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .answer('example.com', 'TRANSFER_OUT_ACK');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("list", async () => {
        axiosMock().onPost().reply(200, ValidResponse);
        const query = new DomainRobotModels.Query({
            'filters': [{
                "key": "name",
                "value": "%domain%",
                "operator": "LIKE"
            }],
            'view': new DomainRobotModels.QueryView({
                'children': true,
                'limit': '10'
            })
        });
        const keys = ['end']
        let result;

        try {
            result = await domainRobot
                .transferout()
                .logRequest(function (requestOptions, headers) {
                    console.log(requestOptions.url)
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/transferout\/_search\?keys.+=end$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query, keys);

            // test request without keys
            result = await domainRobot
                .transferout()
                .logRequest(function (requestOptions, headers) {
                    console.log(requestOptions.url)
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/transferout\/_search$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query);

        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
