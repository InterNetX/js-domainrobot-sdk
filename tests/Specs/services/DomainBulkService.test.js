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

describe("DomainBulkServiceTest", () => {
    let domainRobot;

    beforeEach(function () {
        domainRobot = new Domainrobot({
            auth: {
                user: "user",
                password: "password"
            },
            logRequestCallback: function (requestOptions, headers) {
                expect(requestOptions.method).to.be.equal('PATCH');
                expect(requestOptions.url).to.match(/.+\/bulk\/domain$/);
                compareJson(requestOptions.data, model);
            },
            logResponseCallback: function (response, executionTime) {
                expect(executionTime).to.be.a('number');
                expect(response).to.be.a('object')
            }
        });
    });

    it("update", async () => {    
        axiosMock().onPatch().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .domainBulk()
                .update(model);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
