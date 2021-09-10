/* global describe, it, beforeEach, expect, require */

const compareJson = require("../../compareJson");

const Domainrobot = require("../../../src/Domainrobot");
const DomainRobotHeaders = require("../../../src/lib/Headers");
const domainrobot = require("../../../src/swagger/domainrobot.json");
const ApiFactory = require("../../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;

// mock data
const PrepareOrderResponse = require("../../mock/Certificate/PrepareOrderResponse.json");
const prepareOrderCertificateModel = require("../../mock/Certificate/PrepareOrderCertificateModel.json");

const ValidResponse = require("../../mock/ValidResponse.json");

const expect = require('expect.js');
const axiosMock = require('../../axios-mock');

describe("DomainService", () => {
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
        const domain = new DomainRobotModels.Domain({
            name: "js-sdk-test.de",
            nameservers: [
                new DomainRobotModels.NameServer({
                    name: "ns1.example.com"
                }),
                new DomainRobotModels.NameServer({
                    name: "ns2.example.com"
                })
            ]
        });

        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.be.match(/.+\/domain$/);
                    compareJson(requestOptions.data, domain);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .create(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });


    it("renew", async () => {
        let domain = new DomainRobotModels.Domain({
            name: 'example.com'   
        });
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/_renew$/);
                    compareJson(requestOptions.data, domain);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .renew(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("info", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .info('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("list", async () => {
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
        const keys = ['comment'];
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/_search\?keys.+=comment$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query, keys);

            // without keys
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/_search$/);
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

    it("restoreList", async () => {
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
        const keys = ['comment'];
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/restore\/_search\?keys.+=comment$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .restoreList(query, keys);

            // without keys
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/restore\/_search$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .restoreList(query);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("cancelationList", async () => {
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
        const keys = ['comment'];
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/cancelation\/_search\?keys.+=comment$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .cancelationList(query, keys);

            // without keys
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/cancelation\/_search$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .cancelationList(query);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("update", async () => {
        const domain = new DomainRobotModels.Domain({
            name: 'example.com'
        });
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .update(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("transfer", async () => {
        const domain = new DomainRobotModels.Domain({
            name: 'example.com'
        });
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/_transfer$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .transfer(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("updateStatus", async () => {
        const domain = new DomainRobotModels.Domain({
            name: 'example.com'
        });
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/_statusUpdate$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .updateStatus(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("restore", async () => {
        const domain = new DomainRobotModels.Domain({
            name: 'example.com'
        });
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/_restore$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .restore(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("authInfo1Create", async () => {
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/_authinfo1$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .authInfo1Create('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });
    it("authInfo1Delete", async () => {
        axiosMock().onDelete().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/_authinfo1$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .authInfo1Delete('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });
    it("authInfo2Create", async () => {
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/_authinfo2$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .authInfo2Create('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("cancelationCreate", async () => {
        const domain = new DomainRobotModels.Domain({
            name: 'example.com'
        });
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/cancelation$/);
                    expect(requestOptions.data.name).to.be.equal('example.com');
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .cancelationCreate(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("cancelationUpdate", async () => {
        const domain = new DomainRobotModels.DomainCancelation({
            domain: 'example.com'
        });
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/cancelation$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .cancelationUpdate(domain);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("cancelationDelete", async () => {
        axiosMock().onDelete().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/cancelation$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .cancelationDelete('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("cancelationInfo", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .domain()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/domain\/example.com\/cancelation$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .cancelationInfo('example.com');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });
});
