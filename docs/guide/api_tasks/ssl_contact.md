# SslContact

::: unobtrusive-info
Contact tasks used for all certificate tasks.
:::

General call of tasks:

```javascript
 let sslContact = domainrobot.sslContact().create($sslContact);
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* create(model: DomainRobotModels.SslContact): DomainRobotResult<JsonResponseDataSslContact, Number>;
* update(model: DomainRobotModels.SslContact): DomainRobotResult<JsonResponseDataSslContact, Number>;
* delete(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
* info(id: Number): DomainRobotResult<JsonResponseDataSslContact, Number>;
* list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataSslContact, Number>;
