const expect = require('chai').expect;
/* global expect, module */
function compareJSON(json1, json2) {
  for (let item in json1) {
      if(item === "constructor"){
          continue;
      }
      if(Array.isArray(json1[item])){
          expect(json1[item].length).to.be.equal(json2[item].length);
          continue;
      }
    if (typeof json1[item] === "object") {
      compareJSON(json1[item], json2[item]);
      continue;
    }

    expect(json1[item]).to.be.equal(json2[item]);
  }
}

module.exports = compareJSON;
