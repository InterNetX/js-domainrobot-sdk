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

describe("User2faServiceTest", () => {
    let domainRobot;

    beforeEach(function () {
        domainRobot = new Domainrobot({
            auth: {
                user: "user",
                password: "password"
            }
        });
    });

    it("tokenConfigInfo", async () => {    
        axiosMock().onGet().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .user2fa()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/OTPAuth$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .tokenConfigInfo();
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("tokenConfigCreate", async () => {
        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .user2fa()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/OTPAuth$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .tokenConfigCreate();
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("tokenConfigActivate", async () => {
        axiosMock().onPut().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .user2fa()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/user\/_2fa$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .tokenConfigActivate();
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("tokenConfigDelete", async () => {
        axiosMock().onDelete().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .user2fa()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.match(/.+\/user\/_2fa$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .tokenConfigDelete();
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
