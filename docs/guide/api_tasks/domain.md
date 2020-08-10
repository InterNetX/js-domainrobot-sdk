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

* [create](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/example/domain/DomainCreate.js)(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* update(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* transfer(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* updateStatus(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* renew(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* restore(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* restoreList(model: DomainRobotModels.Domain, keys?: String[]): DomainRobotResult<JsonResponseDataDomainRestore, Number>;
* info(name: String): DomainRobotResult<JsonResponseDataDomain, Number>;
* list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataDomain, Number>;
* authInfo1Create(name: String): DomainRobotResult<JsonResponseDataDomain, Number>;
* authInfo1Delete(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* authInfo2Create(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* cancelationCreate(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
* cancelationUpdate(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
* cancelationDelete(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* cancelationInfo(name: String): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
* cancelationList(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;

<!-- * [update](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainUpdateForSubuser.php)(Domain $domain) 
* [info](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainInfo.php)(string $name)
* [list](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainList.php)(Query $query = null)
* [updateStatus](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainUpdateStatus.php)(Domain $domain)
* [renew](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainRenew.php)(Domain $domain)
* [transfer](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainTransfer.php)(Domain $domain)
* [createAuthinfo1](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainCreateAuthinfo1.php)(string $name)
* [deleteAuthinfo1](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainDeleteAuthinfo1.php)(string $name)
* [createAuthinfo2](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainCreateAuthinfo2.php)(string $name)
* [restoreList](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainRestoreList.php)(Query $query = null);
* [restore](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/domain/DomainRestore.php)(DomainRestore $domainRestore) -->
