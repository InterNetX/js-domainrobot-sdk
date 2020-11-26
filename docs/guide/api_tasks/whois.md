# Whois

::: unobtrusive-info
Get the Whois Information of given Domains.
:::

General call of tasks:

```javascript
 let objectJob = domainRobot.whois().multi(domains)
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* [single](domain: String): DomainRobotResult<JsonResponseDataDomainEnvelope, Number>;
* [multi](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainCreate.js)(domains: Array): DomainRobotResult<JsonResponseDataDomainEnvelope, Number>;
