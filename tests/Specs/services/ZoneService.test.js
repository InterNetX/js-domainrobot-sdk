/* global describe, it, beforeEach, expect, require */

const compareJson = require("../../compareJson");

const Domainrobot = require("../../../src/Domainrobot");
const domainrobot = require("../../../src/swagger/domainrobot.json");
const ApiFactory = require("../../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;
const ValidResponse = require("../../mock/ValidResponse.json");
const expect = require('chai').expect;
const axiosMock = require('../../axios-mock');
const compareJSON = require("../../compareJson");

describe("ZoneServiceTest", () => {
    let domainRobot;

    beforeEach(function () {
        domainRobot = new Domainrobot({
            auth: {
                user: "user",
                password: "password"
            }
        });
    });

    it("create", async () => {
        const zoneModel = new DomainRobotModels.Zone();

        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/zone$/);
                    compareJSON(requestOptions.data, zoneModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .create(zoneModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("update", async () => {
        const zoneModel = new DomainRobotModels.Zone({
            origin: 'example.com'
        });

        axiosMock().onPut().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    console.log(requestOptions.url)
                    expect(requestOptions.url).to.match(/.+\/zone\/example\.com\/ns1\.nameserver\.com$/);
                    compareJSON(requestOptions.data, zoneModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .update(zoneModel, 'ns1.nameserver.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("delete", async () => {
        axiosMock().onDelete().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.match(/.+\/zone\/example\.com\/ns1\.nameserver\.com$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .delete('example.com', 'ns1.nameserver.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("info", async () => {    
        axiosMock().onGet().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/zone\/example\.com\/ns1\.nameserver\.com$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .info('example.com', 'ns1.nameserver.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("list", async () => {
        const query = new DomainRobotModels.Query({
            'filters': [{
                "key": "name",
                "value": "%zone%",
                "operator": "LIKE"
            }],
            'view': new DomainRobotModels.QueryView({
                'children': true,
                'limit': '10'
            })
        });
        const keys = ['dnssec'];
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/zone\/_search\?keys.+=dnssec$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query, keys);

            // without keys
            domainRobotResult = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/zone\/_search$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("stream", async () => {
        const streamModel = DomainRobotModels.ZoneStream();
        const keys = ['dnssec'];
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/zone\/example\.com\/_stream\?keys.+=dnssec$/);
                    compareJson(requestOptions.data, streamModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .stream('example.com', streamModel, keys);

            // without keys
            domainRobotResult = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/zone\/example\.com\/_stream$/);
                    compareJson(requestOptions.data, streamModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .stream('example.com', streamModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("import", async () => {
        const zoneModel = new DomainRobotModels.Zone()
        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .zone()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/zone\/example\.com\/ns1\.nameserver\.com\/_import$/);
                    compareJson(requestOptions.data, zoneModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .import('example.com', zoneModel, 'ns1.nameserver.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
