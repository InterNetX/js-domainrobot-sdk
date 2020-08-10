# Zone

General call of tasks:

```javascript
let zone = domainrobot.zone()create(zone);
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* create(model: DomainRobotModels.Zone): DomainRobotResult<JsonResponseDataZone, Number>;
* update(model: DomainRobotModels.Zone, systemNameServer: String): DomainRobotResult<JsonResponseDataZone, Number>;
* delete(name: String, systemNameServer: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* info(name: String, systemNameServer: String): DomainRobotResult<JsonResponseDataZone, Number>;
* list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataZone, Number>;
* stream(name: String, model: DomainRobotModels.ZoneStream, keys?: String[]): DomainRobotResult<JsonResponseDataZone, Number>;
* import(name: String, model: DomainRobotModels.Zone, keys?: String[]): DomainRobotResult<JsonResponseDataZone, Number>;
