# Working with/as subuser

Subuser information is sent via the headers option.

For a general information on how to work with headers and available headers go to [Setting Headers](/guide/headers.md).

## Example of setting/working as a subuser

::: unobtrusive-info ATTENTION:
Allthough this is a specific example for a domain inquire, the general principle holds true for __ALL TASKS__!
:::

```javascript
const DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels;
const DomainRobotHeaders = require("@internetx/js-domainrobot-sdk").DomainRobotHeaders;

const domainData = domainrobot.domain()
        .headers({
                //mandatory
                [DomainRobotHeaders.DOMAINROBOT_HEADER_OWNER]: "subusername",
                // mandatory if context is not 4  (default)
                [DomainRobotHeaders.DOMAINROBOT_HEADER_CONTEXT]: 4
            })
        .info("example.com");
```

The value for *DOMAINROBOT_HEADER_OWNER* must always be set if you want to execute any action as a subuser. The value for *DOMAINROBOT_HEADER_CONTEXT* only needs to be set if you have a Personal AutoDNS Account.

If you do have a Personal AutoDNS account and do not know or lost your context number please contact our support!

## Full example/s for Javascript and Typescript

* Javascript
  * [work-as-subuser.js](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/specials/work-as-subuser.js)
* Typescript
  * [work-as-subuser.ts](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/specials/work-as-subuser.ts)

You can also find additional examples of how to use the API in the examples folder in our github repository: [https://github.com/InterNetX/js-domainrobot-sdk/tree/master/examples](https://github.com/InterNetX/js-domainrobot-sdk/tree/master/examples)
