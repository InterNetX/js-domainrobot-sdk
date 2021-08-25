/* global describe, it, expect, require */
// ./node_modules/karma/bin/karma start tests/conf.js --single-run

const domainrobot = require("../../src/swagger/domainrobot.json");
const pcdomains = require("../../src/swagger/pcdomains.json");

const ApiFactory = require("../../src/lib/Factory");
const PcDomains = new ApiFactory(pcdomains);
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Object.assign(Backend.models, PcDomains.models);

const MockModels = require("../mock/models.js");
const PcDomainsMockModels = require("../mock/pcdomains_models.js");
const expect = require('expect.js');

/**
 * Test if all expected models are present and have the correct type
 */
describe("Factory", () => {
    it("modelsExist", () => {
        for (let model in DomainRobotModels) {
            if (MockModels[model] === undefined) { 
                expect(PcDomainsMockModels[model]).to.be.a("function");
                continue;
            }

            expect(MockModels[model]).to.be.a("function");
        }
    });
});
