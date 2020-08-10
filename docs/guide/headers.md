# Setting Headers

Custom Headers (see available headers in [Available Headers](#available-headers)) can be set by calling the **headers** method before calling a specific API task.
**headers** expects an object. Default headers can also be overwritten like this.

See example below.

```javascript
let DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels;
let DomainRobotHeaders = require("@internetx/js-domainrobot-sdk").DomainRobotHeaders;

let certificateData = domainrobot.certificate()
        .headers({
                [DomainRobotHeaders.DOMAINROBOT_HEADER_CTID]:
                    "ctid-test-12323"
            })
        .prepareOrder($body);
```

## Available Headers

```typescript
export const DomainRobotHeaders: {
    DOMAINROBOT_CONTENT_TYPE: String;
    // for two factor authentication
    DOMAINROBOT_HEADER_2FA_TOKEN: String;
    DOMAINROBOT_HEADER_BULK_LIMIT: String;
    DOMAINROBOT_HEADER_CONTEXT: String;
    DOMAINROBOT_HEADER_CTID: String;
    DOMAINROBOT_HEADER_CUSTOMER: String;
    // enable or disable demo mode for certain tasks
    DOMAINROBOT_HEADER_DEMO_MODE: String;
    DOMAINROBOT_HEADER_DOMAINROBOT_STID: String;
    // needed for subuser tasks
    DOMAINROBOT_HEADER_OWNER: String;
    // needed for subuser tasks
    DOMAINROBOT_HEADER_OWNER_CONTEXT: String;
    DOMAINROBOT_HEADER_OWNER_NAME: String;
    // needed for domainsafe tasks
    DOMAINROBOT_HEADER_PIN: String;
    DOMAINROBOT_HEADER_PRECEDENCE: String;
    DOMAINROBOT_HEADER_PROFILE: String;
    DOMAINROBOT_HEADER_SESSION_ID: String;
    DOMAINROBOT_HEADER_SESSION_USER: String;
    DOMAINROBOT_HEADER_WEBSOCKET: String;
    DOMAINROBOT_HEADER_WEBSOCKET_TARGET: String;
    DOMAINROBOT_USER_AGENT: String;
};
```

## Logging sent headers

*WORK IN PROGRESS*

<!-- If you want to see which headers the SDK sends to the API you can do so by using the provided logging methods explained in [Logging Requests and Responses](http://localhost:8080/guide/logging.html)

A very simple example:

```php
"logRequestCallback" => function ($method, $url, $requestOptions, $headers){
    Log::debug($headers);
}
```  -->
