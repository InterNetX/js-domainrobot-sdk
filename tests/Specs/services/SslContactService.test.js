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

describe("ContactServiceTest", () => {
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

    it("create", async () => {
        const contactModel = new DomainRobotModels.Contact();

        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .sslcontact()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/sslcontact$/);
                    compareJson(requestOptions.data, contactModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .create(contactModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
    
    it("list", async () => {
        const query = new DomainRobotModels.Query({
            'filters': [
                {
                    "key": "lname",
                    "value": "%test%",
                    "operator": "LIKE"
                },
                {
                    "key": "pcode",
                    "value": "93055",
                    "operator": "EQUAL"
                }
            ],
            'view': new DomainRobotModels.QueryView({
                'children': true,
                'limit': '10'
            })
        });
        const keys = ['country','pcode']
        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .sslcontact()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/sslcontact\/_search\?keys.+=country&keys.+=pcode$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query, keys);

            // test without keys
            result = await domainRobot
                .sslcontact()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/sslcontact\/_search$/);
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
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("info", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .sslcontact()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/sslcontact\/1$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .info(1);
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
                .sslcontact()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.match(/.+\/sslcontact\/1$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .delete(1);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("update", async () => {
        const contactModel = new DomainRobotModels.Contact({id: 1});
        axiosMock().onPut().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .sslcontact()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/sslcontact\/1$/);
                    compareJson(requestOptions.data, contactModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .update(contactModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
