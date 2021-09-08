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

describe("LoginServiceTest", () => {
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
        const loginData = new DomainRobotModels.LoginData({
            context: 4,
            password: 'password',
            user: 'username'
        });
        const queryParams = {
            acl: true, //boolean
            profile: true, //boolean
            customer: true, //boolean
            timeout: 10 //how long the session id should last in minutes
        };

        axiosMock().onPost().reply(200, ValidResponse);

        let result;
        try {
            result = await domainRobot
                .login()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/login\?acl=true&profile=true&customer=true&timeout=10$/);
                    compareJson(requestOptions.data, loginData);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .sessionID(loginData, queryParams);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
