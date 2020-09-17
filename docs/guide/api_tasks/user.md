# User

::: unobtrusive-info
Contact tasks used for all certificate tasks.
:::

General call of tasks:

```javascript
let objectJob = domainrobot.user().info(user, context);
```

List of all available tasks with linked examples:

* create(model: DomainRobotModels.User): DomainRobotResult<JsonResponseDataUser, Number>
* [info](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/user/UserInfo.js)(user: String, context: Number): DomainRobotResult<JsonResponseDataUser, Number>;
* update(model: DomainRobotModels.User): DomainRobotResult<JsonResponseDataUser, Number>; 
* delete(user: String, context: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>; 
* [list](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/user/UserList.js)(model: DomainRobotModels.Query):  DomainRobotResult<JsonResponseDataUser: Array, Number>;
* billingObjectLimitInfo(keys?: Array, articleTypes?: Array): DomainRobotResult<JsonResponseDataBillingLimit, Number>; 
* billingObjectTermsInfo(): DomainRobotResult<JsonResponseDataBillingObjectTerms, Number>; 
* updateLock(user: String, context: Number, keys?: Array): DomainRobotResult<JsonResponseDataUser, Number>; 
* updateUnlock(user: String, context: Number, keys?: Array): DomainRobotResult<JsonResponseDataUser, Number>; 
* copy(user: String, context: Number, model: DomainRobotModels.User): DomainRobotResult<JsonResponseDataUser, Number>; 
* profileInfo(user: String, context: Number, prefix?: Array): DomainRobotResult<JsonResponseDataUserProfileViews, Number>; 
* profileUpdate(user: String, context: Number, model: DomainRobotModels.UserProfileViews): DomainRobotResult<JsonResponseDataUserProfileViews, Number>; 
* serviceProfileInfo(user: String, context: Number, prefix?: Array): DomainRobotResult<JsonResponseDataServiceUsersProfile, Number>; 
* serviceProfileUpdate(user: String, context: Number, model: DomainRobotModels.ServiceProfiles): DomainRobotResult<JsonResponseDataServiceUsersProfile, Number>; 

