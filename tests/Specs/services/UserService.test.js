/* global describe, it, beforeEach, expect, require */

const compareJson = require("../../compareJson");

const Domainrobot = require("../../../src/Domainrobot");
const DomainRobotHeaders = require("../../../src/lib/Headers");
const domainrobot = require("../../../src/swagger/domainrobot.json");
const ApiFactory = require("../../../src/lib/Factory");
const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;
const ValidResponse = require("../../mock/ValidResponse.json");
const expect = require('chai').expect;
const axiosMock = require('../../axios-mock');

describe("UserServiceTest", () => {
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
        const keys = ['key']

        axiosMock().onPost().reply(200, ValidResponse);

        let result;
        try {
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/user\/_search\?keys.+=key$/);
                    compareJson(requestOptions.data, query);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .list(query, keys);

            // without keys
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.match(/.+\/user\/_search$/);
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
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("create", async () => {
        let userModel = new DomainRobotModels.User( );

        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.be.match(/.+\/user$/);
                    compareJson(requestOptions.data, userModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .create(userModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("info", async () => {
        const userModel = new DomainRobotModels.User();
        const keys = ['customer', 'acl']
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\?customer&acl$/);
                    compareJson(requestOptions.data, userModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .info('username','4', keys);

            // without keys
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4$/);
                    compareJson(requestOptions.data, userModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .info('username', '4');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("update", async () => {
        let userModel = new DomainRobotModels.User({
            user: 'username',
            context: '4'
        });

        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4$/);
                    compareJson(requestOptions.data, userModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .update(userModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("delete", async () => {

        axiosMock().onDelete().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('DELETE');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .delete('username', '4');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("newPassword", async () => {
        const model = new DomainRobotModels.NewPassword({
            token: 'sometoken'
        })
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.be.match(/.+\/user\/_newPassword\?token=sometoken$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .newPassword(model);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("newPasswordVerify", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/_newPasswordVerify\?token=sometoken$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .newPasswordVerify('sometoken');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("ssoActionVerify", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/_sso\/sometoken$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .ssoActionVerify('sometoken');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("userActionVerify", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/_verify\/sometoken$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .userActionVerify('sometoken');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("billingObjectLimitInfo", async () => {
        const keys = ['count']
        const articleTypes = ['package', 'domain']

        axiosMock().onGet().reply(200, ValidResponse);

        let result;
        try {
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/user\/billinglimit\?keys.+=count&articleTypes.+package&articleTypes.+domain$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .billingObjectLimitInfo(keys, articleTypes);

            // without articleTypes and keys
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/user\/billinglimit$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .billingObjectLimitInfo();
            // without keys
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/user\/billinglimit\?articleTypes.+package&articleTypes.+domain$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .billingObjectLimitInfo([], articleTypes);
            // without articleTypes
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.match(/.+\/user\/billinglimit\?keys.+count$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .billingObjectLimitInfo(keys, []);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("billingObjectTermsInfo", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/billingterm$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .billingObjectTermsInfo();
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("updateLock", async () => {
        const keys = ['count']

        axiosMock().onPut().reply(200, ValidResponse);

        let result;
        try {
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/user\/username\/4\/_lock\?keys.+=count$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .updateLock('username', '4', keys);

            // without keys
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/user\/username\/4\/_lock$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .updateLock('username', '4');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("updateUnlock", async () => {
        const keys = ['count']

        axiosMock().onPut().reply(200, ValidResponse);

        let result;
        try {
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/user\/username\/4\/_unlock\?keys.+=count$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .updateUnlock('username', '4', keys);

            // without keys
            result = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.match(/.+\/user\/username\/4\/_unlock$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .updateUnlock('username', '4');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(result).to.be.a("object");
        expect(result.status).to.be.equal(200);
    });

    it("aclInfo", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/acl$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .aclInfo('username', '4');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("aclUpdate", async () => {
        const userModel = new DomainRobotModels.User({
            user: 'username',
            context: '4'
        })
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/acl$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .aclUpdate(userModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("copy", async () => {
        const userModel = new DomainRobotModels.User();
        axiosMock().onPost().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('POST');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/copy$/);
                    compareJson(requestOptions.data, userModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .copy('username', 4, userModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("profileInfo", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/profile$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .profileInfo('username', 4);

            // with prefix
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/profile\/prefix$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .profileInfo('username', 4, 'prefix');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("profileUpdate", async () => {
        const userModel = new DomainRobotModels.User({
            user: 'username',
            context: 4
        });
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/profile$/);
                    compareJson(requestOptions.data, userModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .profileUpdate(userModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("profileInfo", async () => {
        axiosMock().onGet().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/serviceProfile$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .serviceProfileInfo('username', 4);

            // with prefix
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('GET');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/serviceProfile\/prefix$/);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .serviceProfileInfo('username', 4, 'prefix');
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });

    it("profileUpdate", async () => {
        const userModel = new DomainRobotModels.User({
            user: 'username',
            context: 4
        });
        axiosMock().onPut().reply(200, ValidResponse);

        let domainRobotResult;

        try {
            domainRobotResult = await domainRobot
                .user()
                .logRequest(function (requestOptions, headers) {
                    expect(requestOptions.method).to.be.equal('PUT');
                    expect(requestOptions.url).to.be.match(/.+\/user\/username\/4\/serviceProfile$/);
                    compareJson(requestOptions.data, userModel);
                })
                .logResponse(function (response, executionTime) {
                    expect(executionTime).to.be.a('number');
                    expect(response).to.be.a('object')
                })
                .serviceProfileUpdate(userModel);
        } catch (DomainRobotException) {
            console.log(DomainRobotException);
        }
        expect(domainRobotResult.isValidResponse()).to.be.equal(true);
        expect(domainRobotResult).to.be.a("object");
        compareJson(domainRobotResult.result, ValidResponse);
        expect(domainRobotResult.status).to.be.equal(200);
    });
    
});
