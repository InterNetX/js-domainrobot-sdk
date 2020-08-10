# TrustedApplication

General call of tasks:

```javascript
let trustedApplication = domainrobot.trustedApp().create(trustedApplication);
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* create(model: DomainRobotModels.TrustedApplication): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
* update(model: DomainRobotModels.TrustedApplication): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
* delete(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* info(id: Number): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
* list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
