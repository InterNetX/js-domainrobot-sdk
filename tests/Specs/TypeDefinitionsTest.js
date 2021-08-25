const fs = require('fs');
const util = require('util');

const domainrobot = require("../../src/swagger/domainrobot.json");
const pcdomains = require("../../src/swagger/pcdomains.json");

const ApiFactory = require("../../src/lib/Factory");
const PcDomains = new ApiFactory(pcdomains);
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Object.assign(Backend.models, PcDomains.models);

var assert = require('assert');
const expect = require('expect.js');

describe("Type Definitions", () => {
    it("Definitions are correct", async () => {
        let readFile = util.promisify(require("fs").readFile);

        let data = await readFile('index.d.ts', 'utf8');       

        for(model in DomainRobotModels){
            let regex = new RegExp("interface "+model+" {([^}]*)}")
            let matches = data.match(regex);
            if (matches !== null){
                let specificModel = new DomainRobotModels[model]();
                for(property in specificModel){
                    if(property !== "constructor"){                 
                        expect(matches[1]).to.match(new RegExp(property));
                    }
                }                
            }
        }
    });
});