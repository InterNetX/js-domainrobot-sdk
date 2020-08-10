# Poll

General call of tasks:

```javascript
 let pollMessage = domainrobot.poll().info();
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* info(): DomainRobotResult<JsonResponseDataPollMessage, Number>;
* confirm(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
