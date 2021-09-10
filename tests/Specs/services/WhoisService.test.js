/* global describe, it, beforeEach, expect, require */

const compareJson = require("../../compareJson");

const Domainrobot = require("../../../src/Domainrobot");
const domainrobot = require("../../../src/swagger/domainrobot.json");
const ApiFactory = require("../../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;
const ValidResponse = require("../../mock/ValidResponse.json");
const expect = require('expect.js');
const axiosMock = require('../../axios-mock');

describe("WhoisServiceTest", () => {
    let domainRobot;

    beforeEach(function () {
        domainRobot = new Domainrobot({
            auth: {
                user: "user",
                password: "password"
            }
        });
    });

    it("single", async () => {    
        let domainStudioSources = new DomainRobotModels.DomainStudioSources()

        domainStudioSources.custom = new DomainRobotModels.DomainStudioSourceCustom({
            'domains': ['example.com'],
            'services': ['WHOIS']
        })

        let domainEnvelopeSearchRequest = new DomainRobotModels.DomainEnvelopeSearchRequest()

        domainEnvelopeSearchRequest.sources = domainStudioSources

        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .whois()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domainstudio$/);
                    compareJson(requestOptions.data, domainEnvelopeSearchRequest)
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .single('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("multi", async () => {
        let domainStudioSources = new DomainRobotModels.DomainStudioSources()

        domainStudioSources.custom = new DomainRobotModels.DomainStudioSourceCustom({
            'domains': ['example.com', 'example2.com'],
            'services': ['WHOIS']
        })

        let domainEnvelopeSearchRequest = new DomainRobotModels.DomainEnvelopeSearchRequest()

        domainEnvelopeSearchRequest.sources = domainStudioSources

        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .whois()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domainstudio$/);
                    compareJson(requestOptions.data, domainEnvelopeSearchRequest)
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .multi(['example.com', 'example2.com']);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
