/* global describe, it, beforeEach, expect, require */

const compareJson = require("../../compareJson");

const Domainrobot = require("../../../src/Domainrobot");
const DomainRobotHeaders = require("../../../src/lib/Headers");
const domainrobot = require("../../../src/swagger/domainrobot.json");
const ApiFactory = require("../../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;
const ValidResponse = require("../../mock/ValidResponse.json");
const expect = require('chai').expect;
const axiosMock = require('../../axios-mock');

describe("DomainstudioServiceTest", () => {
    let domainRobot;

    beforeEach(function () {
        domainRobot = new Domainrobot({
            url: "http://dev-proxy-lab.intern.autodns-lab.com:10025",
            auth: {
                user: "user",
                password: "password",
                context: "9"
            }
        });
    });

    it("search", async () => {
        // Create an Instance of the DomainEnvelopeSearchRequest Object
        const domainEnvelopeSearchRequest = new DomainRobotModels.DomainEnvelopeSearchRequest()

        // Create an Instance of the DomainStudioSources Object
        let domainStudioSources = new DomainRobotModels.DomainStudioSources()

        // Define parameters for the DomainStudioSources Suggestion
        domainStudioSources.suggestion = new DomainRobotModels.DomainStudioSourceSuggestion({
            "max": 5,
            "udeIdn": true
        })

        // Assign the DomainStudioSources to the DomainEnvelopeSearchRequest Object
        domainEnvelopeSearchRequest.sources = domainStudioSources

        // Set the Currency
        domainEnvelopeSearchRequest.currency = "USD"

        // Set the Search Term we want to get
        // Domain Name Suggestions for 
        domainEnvelopeSearchRequest.searchToken = "example"

        axiosMock().onPost().reply(200, ValidResponse);

        let result;
        try {
            result = await domainRobot
                .domainStudio()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domainstudio$/);
                    compareJson(requestOptions.data, domainEnvelopeSearchRequest);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .search(domainEnvelopeSearchRequest);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
