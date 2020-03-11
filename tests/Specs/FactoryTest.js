/* global describe, it, expect, require */
// ./node_modules/karma/bin/karma start tests/conf.js --single-run

let specs = require("../../src/lib/specs.json");
let ApiFactory = require("../../src/lib/Factory");
const Backend = new ApiFactory(specs);
const DomainRobotModels = Backend.models;

let MockModels = require("../mock/models.js");

/**
 * Test if all expected models are present and have the correct type
 */
describe("Factory", () => {
  it("modelsExist", () => {
    for (let model in DomainRobotModels) {
      expect(MockModels[model]).toBeDefined();
      expect(typeof MockModels[model]).toBe("function");
    }
  });
});
