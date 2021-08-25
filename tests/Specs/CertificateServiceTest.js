/* global describe, it, beforeEach, expect, require */

const compareJson = require("../compareJson");

const Domainrobot = require("../../src/Domainrobot");
const DomainRobotHeaders = require("../../src/lib/Headers");
const domainrobot = require("../../src/swagger/domainrobot.json");
const ApiFactory = require("../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;
const MockAdapter = require("axios-mock-adapter");

// mock data
const PrepareOrderResponse = require("../mock/Certificate/PrepareOrderResponse.json");
const prepareOrderCertificateModel = require("../mock/Certificate/PrepareOrderCertificateModel.json");

const CreateResponse = require("../mock/Certificate/CreateResponse.json");

const axios = require("axios");
const mock = new MockAdapter(axios);
const expect = require('expect.js');

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

        mock.onPost().reply(200, PrepareOrderResponse);

        let prepareOrderResult;

        try {
            prepareOrderResult = await domainRobot
                .certificate()
                .headers({
                    [DomainRobotHeaders.DOMAINROBOT_HEADER_CTID]: "ctid-test-12323"
                })
                .prepareOrder(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(prepareOrderResult).to.be.a("object");
     //   compareJson(prepareOrderResult.result, PrepareOrderResponse);
        expect(prepareOrderResult.status).to.be.equal(200);
    });

    it("create", async () => {
        let certficateModel = new DomainRobotModels.Certificate(
            prepareOrderCertificateModel
        );

        mock.onPost().reply(200, CreateResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .certificate()
                .create(certficateModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }

        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, CreateResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });
});
