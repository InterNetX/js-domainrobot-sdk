# Contact 

General call of tasks:

```javascript
 let objectJob = domainrobot.contact().create(contact);
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* [create](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/contact/ContactCreate.js)(model: DomainRobotModels.Contact): DomainRobotResult<JsonResponseDataContact, Number>;
* [update](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/contact/ContactUpdate.js)(model: DomainRobotModels.Contact): DomainRobotResult<JsonResponseDataContact, Number>;
* [list](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/contact/ContactList.js)(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataContact, Number>;
* [info](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/contact/ContactInfo.js)(id: Number): DomainRobotResult<JsonResponseDataContact, Number>;
* [delete](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/contact/ContactDelete.js)(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;