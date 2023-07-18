const fs = require('fs');
const util = require('util');

const domainrobot = require("../../src/swagger/domainrobot.json");
const pcdomains = require("../../src/swagger/pcdomains.json");

const ApiFactory = require("../../src/lib/Factory");
const PcDomains = new ApiFactory(pcdomains);
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Object.assign(Backend.models, PcDomains.models);

const expect = require('chai').expect;

function getValueForType(type, isArrayOrSubType){
    if (isArrayOrSubType !== undefined) {
        if (type === 'string') {
            return [new String('')];
        } else if (type === 'number') {
            return [new Number()];
        } else if (type === 'boolean') {
            return [true];
        } else if (DomainRobotModels[type] !== undefined) {
            return [new DomainRobotModels[type]()]
        } else if (type === 'any') {
            // do nothing
        } else {
            try {
                return [eval("new " + type + "()")];
            } catch (Exception) {
                return [''];
            }
        }
    } else {
        if (type === 'string') {
            return new String('');
        } else if (type === 'number') {
            return new Number();
        } else if (type === 'boolean') {
            return true;
        } else if (DomainRobotModels[type] !== undefined) {
            return new DomainRobotModels[type]()
        } else if (type === 'any') {
            // do nothing
        } else {
            try{
                return eval("new " + type + "()");
            }catch(Exception){
                return '';
            }
        }
    }

    return '';
}

describe("Type Definitions", () => {
    it("Definitions are correct", async () => {
        let readFile = util.promisify(require("fs").readFile);

        let data = await readFile('index.d.ts', 'utf8');       

        for(model in DomainRobotModels){
            let regex = new RegExp("interface "+model+" {([^}]*)}")
            let matches = data.match(regex);
            if (matches !== null){
                let specificModel = new DomainRobotModels[model]();
                let modelData = {};

                for(property in specificModel){                    
                    if(property !== "constructor"){      
                        try{ 
                        let propertyTypeMatches = matches[1].match(new RegExp(property + "\\??:\\s(.\\w+)(\\[\\]|<.+>)?;"));
                        modelData[property] = getValueForType(propertyTypeMatches[1], propertyTypeMatches[2]);

                        expect(matches[1]).to.match(new RegExp(property));                      
                        }catch(Ex){
                          throw new Error(`Type mismatch in ${model} for ${property} ${matches}`)
                        }
                    }
                }  
                expect(new DomainRobotModels[model](modelData)).to.be.an("object");
            }
        }
    });
});