# Domain

::: unobtrusive-info
Create, delete and manage certificates.

Find additional help here: [https://help.internetx.com/display/DOMAINEN](https://help.internetx.com/display/DOMAINEN)
:::

General call of tasks:

```javascript
let objectJob = domainrobot.domain().create($domain);
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* [create](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainCreate.js)(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [update](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainUpdate.js)(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [transfer](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainTransfer.js)(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [updateStatus](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainUpdateStatus.js)(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [renew](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainRenew.js)(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [restore](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainRestore.js)(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [restoreList](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainRestoreList.js)(model: DomainRobotModels.Domain, keys?: String[]): DomainRobotResult<JsonResponseDataDomainRestore, Number>;
* [info](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainInfo.js)(name: String): DomainRobotResult<JsonResponseDataDomain, Number>;
* [list](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainList.js)(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataDomain, Number>;
* [authInfo1Create](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainAuthInfo1Create.js)(name: String): DomainRobotResult<JsonResponseDataDomain, Number>;
* [authInfo1Delete](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainAuthInfo1Delete.js)(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* [authInfo2Create](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainAuthInfo2Create.js)(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* cancelationCreate(model: DomainRobotModels.DomainCancelation): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
* cancelationUpdate(model: DomainRobotModels.DomainCancelation): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
* cancelationDelete(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* cancelationInfo(name: String): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
* cancelationList(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;

