/* global describe, it, expect, require */

const domainrobot = require("../../../src/swagger/domainrobot.json");
const pcdomains = require("../../../src/swagger/pcdomains.json");

const ApiFactory = require("../../../src/lib/Factory");
const PcDomains = new ApiFactory(pcdomains);
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Object.assign(Backend.models, PcDomains.models);

const MockModels = require("../../mock/models.js");
const PcDomainsMockModels = require("../../mock/pcdomains_models.js");
const expect = require('expect.js');
const DomainRobotResult = require("../../../src/lib/DomainRobotResult");
const { DomainSafeObject } = require("../../mock/models.js");

/**
 * Test if all expected models are present and have the correct type
 */
describe("DomainRobotResult", () => {
    it("isValid", () => {
        const domainRobotResult = new DomainRobotResult({
            stid: "stid",
            status: "SUCCESS",
            data: [{}]
        }, 'SUCCESS');

        domainRobotResult.setHeaders({"header1": "test"});
        expect(domainRobotResult.getHeaders()).to.be.a("object");
        expect(domainRobotResult.getHeaders().header1).to.be.equal('test');
        expect(domainRobotResult.isValid()).to.be.equal(true);
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
    });

    it("isInValid", () => {
        const domainRobotResult = new DomainRobotResult(undefined, 'SUCCESS');

        expect(domainRobotResult.isValid()).to.be.equal(false);
        expect(domainRobotResult.isValidResponse()).to.be.equal(false);
    });
});