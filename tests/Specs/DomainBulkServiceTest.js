/* global describe, it, beforeEach, expect, require */

const compareJson = require("../compareJson");

const Domainrobot = require("../../src/Domainrobot");
const DomainRobotHeaders = require("../../src/lib/Headers");
const domainrobot = require("../../src/swagger/domainrobot.json");
const ApiFactory = require("../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;
const ValidResponse = require("../mock/ValidResponse.json");
const expect = require('expect.js');
const axiosMock = require('../axios-mock');

describe("DomainBulkServiceTest", () => {
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

    it("update", async () => {
        const model = new DomainRobotModels.BulkDomainPatchRequest();

        axiosMock().onPatch().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .domainBulk()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PATCH');
                    expect(requestOptions.url).to.match(/.+\/bulk\/domain$/);
                    compareJson(requestOptions.data, model);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .update(model);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
