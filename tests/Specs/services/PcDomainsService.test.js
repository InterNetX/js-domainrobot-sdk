/* global describe, it, beforeEach, expect, require */

const compareJson = require("../../compareJson");

const Domainrobot = require("../../../src/Domainrobot");
const pcdomains = require("../../../src/swagger/pcdomains.json");
const ApiFactory = require("../../../src/lib/Factory");
const PcDomains = new ApiFactory(pcdomains);
const PcDomainsModels = PcDomains.models;
const ValidResponse = require("../../mock/ValidResponse.json");
const expect = require('chai').expect;
const axiosMock = require('../../axios-mock');

describe("PcDomainsServiceTest", () => {
    let domainRobot;

    beforeEach(function () {
        domainRobot = new Domainrobot({
            auth: {
                user: "user",
                password: "password"
            }
        });
    });

    it("estimation", async () => {   
        const estimationModel = new PcDomainsModels.Estimation()
        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .pcDomains()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/v1\/estimate$/);
                    compareJson(requestOptions.data, estimationModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .estimation(estimationModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("alexa", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .pcDomains()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/alexasiteinfo\/example\.com$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .alexa('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("keyword", async () => {
        const keywordModel = new PcDomainsModels.Keyword();
        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .pcDomains()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/kwe$/);
              //      comporeJson(requestOptions.data, keywordModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .keyword(keywordModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
   
    it("meta", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .pcDomains()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/meta\/example\.com$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .meta('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("majestic", async () => {
        const majesticModel = new PcDomainsModels.ApiMajesticResponse();
        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .pcDomains()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/majestic$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .majestic(majesticModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("smuCheck", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .pcDomains()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/v1\/smu_check\/username$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .smuCheck('username');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("wayback", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .pcDomains()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/wayback\/example\.com$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .wayback('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
