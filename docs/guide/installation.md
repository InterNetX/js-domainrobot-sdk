# Installation and Usage

::: noheader
internetx/js-domainrobot-sdk is a node package.
:::

Official sources:

* [npm](https://www.npmjs.com/package/js-domainrobot-sdk)
* [github repository](https://github.com/InterNetX/js-domainrobot-sdk)

If you have no prior experience with npm please refer to their official documentation at: [npm Documentation](https://docs.npmjs.com/)

## Installation

```javascript
yarn add js-domainrobot-sdk

npm install js-domainrobot-sdk
```

### Javascript/Node Requires

```javascript
let DomainRobot = require("js-domainrobot-sdk").DomainRobot;
let DomainRobotHeaders = require("js-domainrobot-sdk").DomainRobotHeaders;
let DomainRobotModels = require("js-domainrobot-sdk").DomainRobotModels;
```

### Typescript import and configuration

```typescript
import { DomainRobot, DomainRobotModels, DomainRobotHeaders } from "js-domainrobot-sdk";
```

In tsconfig.json add this to *compilerOptions*

```typescript
"compilerOptions": {
    "allowSyntheticDefaultImports": true
},
```

## Usage - Basic Auth

Detailed examples can be found under [https://github.com/InterNetX/js-domainrobot-sdk/tree/master/examples](https://github.com/InterNetX/js-domainrobot-sdk/tree/master/examples)

Before you can interact with the API you need to specify your authentication credentials and if you have a "Personal AutoDNS" account your url and context.

```javascript
let DomainRobot = require("js-domainrobot-sdk").DomainRobot;

let domainRobot = new DomainRobot({
    url: "http://dev-proxy-lab.intern.autodns-lab.com:10025",
    auth: {
        user: "user",
        password: "password",
        context: 9
    }
});
```

## Usage - Session ID

Additionally to the authentication through basic auth, the API also offers the possibility
to use a so called session id. This ID has to be created once and should then be stored (in a session or something similar) by your application for further usage.
The underlying idea behind this is comparable to a JWT authentciation approach.

You can find more information on this topic here: [Authentication via SessionID](https://help.internetx.com/display/APIXMLEN/Authentication#Authentication-AuthenticationviaSessionID)

Below you can find a simple example of how to setup a session id authentication process.

```javascript
let DomainRobot = require("js-domainrobot-sdk").DomainRobot;

// when working with a session id you don't need to declare the auth block here
let domainRobot = new DomainRobot({
    url: "http://dev-proxy-lab.intern.autodns-lab.com:10025"
});

// set your authentication data in a separate model
//this will is only needed for the initial call to get our session id
let loginData = new DomainRobotModels.LoginData({
    context: 4,
    password: 'password',
    user: 'username'
});

 try {
     // login and create the session id

    // there are certain query parameters that you can define
    // all those parameters are entirely optional
    // the default config looks like this
    let queryParams = {
        acl: true, //boolean
        profile: true, //boolean
        customer: true, //boolean
        timeout: 10 //how long the session id should last in minutes
    };
    result = await domainRobot.login().sessionID(loginData, queryParams);
} catch (DomainRobotException) {
    result = DomainRobotException;
}

// session id is located in the headers so we have to get those
// headers['x-domainrobot-sessionid'] should be stored in a session or something similar
let headers = result.getHeaders();

// from this point onward we can use the session id to authenticate with the API
domainRobot = new DomainRobot({
    url: 'http://dev-proxy-lab.intern.autodns-lab.com:10025',
    session_id: headers['x-domainrobot-sessionid']
})
```

::: warning Attention
You need an account in at last one of these two systems to be able to use this SDK.
:::

* Production System: <https://api.autodns.com/v1>
* Demo System: <https://api.demo.autodns.com/v1>

## Domainrobot configuration parameters

* url: can be left blank! (mandatory for "Personal AutoDNS" accounts)
* auth: DomainrobotModels.LoginData
  * user
  * password
  * context
