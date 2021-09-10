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

describe("CertificateService", () => {
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

    it("prepareOrder", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );

        axiosMock().onPost().reply(200, PrepareOrderResponse);

        let prepareOrderResult;

        try {
            prepareOrderResult = await domainRobot
                .certificate()
                .headers({
                    [DomainRobotHeaders.DOMAINROBOT_HEADER_CTID]: "ctid-test-12323"
                })
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.headers[DomainRobotHeaders.DOMAINROBOT_HEADER_CTID]).to.be.equal('ctid-test-12323');
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/certificate\/_prepareOrder$/);
                    compareJson(requestOptions.data, certficateModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .prepareOrder(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(prepareOrderResult).to.be.a("object");
        expect(prepareOrderResult.status).to.be.equal(200);
    });

    it("create", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );

        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.be.match(/.+\/certificate$/);
                    compareJson(requestOptions.data, certficateModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .create(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("create exception", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );

        axiosMock().onPost().reply(400, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.be.match(/.+\/certificate$/);
                    compareJson(requestOptions.data, certficateModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .create(certficateModel);
        } catch (DomainRobotException) {
            expect(DomainRobotException).to.be.a("object")
            expect(DomainRobotException.status).to.be.equal(400)
        }
    });

    it("createRealtime", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );

        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/certificate\/_realtime$/);
                    compareJson(requestOptions.data, certficateModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .createRealtime(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("reissue", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );
        certficateModel.id = "1";
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()                
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/certificate\/1$/);
                    compareJson(requestOptions.data, certficateModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .reissue(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("renew", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );
        certficateModel.id = "1";
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/certificate\/1\/_renew$/);
                    compareJson(requestOptions.data, certficateModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .renew(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("comment", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );
        certficateModel.id = "1";
        ValidResponse.headers = {}
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/certificate\/1\/_comment$/);
                    compareJson(requestOptions.data, certficateModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .comment(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("delete", async () => {
        axiosMock().onDelete().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.match(/.+\/certificate\/1$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .delete(1);
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
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/certificate\/1$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .info(1);
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
        const keys = ['product'];
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/certificate\/_search\?keys.+=product$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query, keys);

            // without keys
            domainRobotResult = await domainRobot
                .certificate()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/certificate\/_search$/);
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
});
