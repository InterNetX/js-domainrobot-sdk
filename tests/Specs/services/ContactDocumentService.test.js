/* global describe, it, beforeEach, expect, require */

const Domainrobot = require("../../../src/Domainrobot");
const ValidResponse = require("../../mock/ValidResponse.json");
const expect = require('chai').expect;
const axiosMock = require('../../axios-mock');

describe("ContactDocumentServiceTest", () => {
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

    it("upload", async () => {
        const formData = new FormData();
        formData.append("file", new Blob(["dummy"]), "idcard.pdf");

        axiosMock().onPost().reply(200, ValidResponse);

        let capturedHeaders;
        let result;

        try {
            result = await domainRobot
                .contactDocument()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/contact\/1\/document\/idcard$/);
                    expect(requestOptions.data).to.be.equal(formData);
                    capturedHeaders = headers;
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object');
                })
                .upload(1, "idcard", formData);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        // The manual "multipart/form-data" default header must no longer be
        // forced: axios 1.x sets Content-Type (incl. boundary) automatically
        // for FormData payloads.
        expect(capturedHeaders.common['Content-Type']).to.not.equal('multipart/form-data');

        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("upload with keys", async () => {
        const formData = new FormData();
        formData.append("file", new Blob(["dummy"]), "idcard.pdf");
        const keys = ['force'];

        axiosMock().onPost().reply(200, ValidResponse);

        let result;

        try {
            result = await domainRobot
                .contactDocument()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/contact\/1\/document\/idcard\?keys.+=force$/);
                })
                .upload(1, "idcard", formData, keys);
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
                .contactDocument()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/contact\/1$/);
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
                .contactDocument()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.match(/.+\/contact\/1$/);
                })
                .delete(1);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });
});
