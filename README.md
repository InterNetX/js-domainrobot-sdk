# JS Domainrobot API

A node/js package for easy integration of the **Domainrobot API** powered by [InterNetX GmbH](https://internetx.com).

## Table of Contents

- [JS Domainrobot API](#js-domainrobot-api)
  - [Table of Contents](#table-of-contents)
  - [Install and Import](#install-and-import)
    - [Installation](#installation)
    - [Requires](#requires)
  - [Usage](#usage)
    - [Available Models](#available-models)
    - [Supported API calls](#supported-api-calls)
      - [DomainRobotException](#domainrobotexception)
      - [DomainRobotResult](#domainrobotresult)
      - [Certificate tasks](#certificate-tasks)
      - [DomainStudio](#domainstudio)
  - [(Custom) Headers](#custom-headers)
    - [Require](#require)
    - [Available Headers](#available-headers)
    - [Setting Headers](#setting-headers)
  - [Changelog](#changelog)
  - [Copyright and license](#copyright-and-license)

## Install and Import

### Installation

```javascript
yarn add @internetx/js-domainrobot-sdk

npm install @internetx/js-domainrobot-sdk
```

### Requires

```javascript
let DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot;
let DomainRobotHeaders = require("@internetx/js-domainrobot-sdk").DomainRobotHeaders;
let DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels;
```

## Usage

Detailed examples can be found under src/examples!

Before you can interact with the API you need to specify your authenticatio credentials and if you have a "Personal AutoDNS" account your url and context.

```javascript
let DomainRobot = require("@internetx/js-domainrobot-sdk").DomainRobot;

let domainRobot = new DomainRobot({
    url: "http://dev-proxy-lab.intern.autodns-lab.com:10025",
    auth: {
        user: "user",
        password: "password",
        context: 9
    }
});
```

- url
    ** can be left blank! (mandatory for "Personal AutoDNS" accounts)
- auth (mandatory)
    ** user (mandatory)
    ** password (mandatory)
    ** context (mandatory for "Personal AutoDNS" accounts)

### Available Models

Modles are instantiated by using the DomainRobotModels module.
See an example below:

```javascript
let certficateModel = new DomainRobotModels.Certificate();
```

All available Models and properties can be seen under the Section 'Models' in detail here: [https://help.internetx.com/display/APIJSONEN/Technical+Documentation](https://help.internetx.com/display/APIJSONEN/Technical+Documentation)

### Supported API calls

Some API calls are asynchronous. Asynchronous calls should always be wrapped in a try-catch block to catch
possible exceptions.
All API calls return a **DomainRobotException** if an error occurs.
All API calls return a **DomainRobotResult** if the task was successful.

#### DomainRobotException

```javascript
DomainRobotException {
    error, // full error reporting and error message including STID/CTID
    status // http error code
}
```

#### DomainRobotResult

```javascript
DomainRobotResult {
    result, // full response including STID/CTID
    status // http status code
}
```

#### Certificate tasks

```javascript
let certficateModel = new DomainRobotModels.Certificate();

try{
  let result = await domainRobot
    .certificate(certficateModel)
    .createRealtime();
} catch (DomainRobotException) {

}
```

#### DomainStudio

```javascript
let domainEnvelopeSearchRequest = new DomainRobotModels.DomainEnvelopeSearchRequest();
let domainStudioSources = new DomainRobotModels.DomainStudioSources();

domainStudioSources.suggestion = new DomainRobotModels.DomainStudioSourceSuggestion(
    { max: 5 }
);
domainEnvelopeSearchRequest.sources = domainStudioSources;
domainEnvelopeSearchRequest.searchToken = "google";
domainEnvelopeSearchRequest.currency = "USD";

try{
    let result = await domainRobot
        .domainStudio(domainEnvelopeSearchRequest)
        .search();
} catch (DomainRobotException) {

}
```

## (Custom) Headers

### Require

```javascript
let DomainRobotHeaders = require("@internetx/js-domainrobot-sdk").DomainRobotHeaders;
```

### Available Headers

```javascript
{
    DOMAINROBOT_HEADER_DOMAINROBOT_STID,
    DOMAINROBOT_HEADER_SESSION_ID,
    DOMAINROBOT_HEADER_PRECEDENCE,
    DOMAINROBOT_HEADER_CONTEXT,
    DOMAINROBOT_HEADER_BULK_LIMIT,
    DOMAINROBOT_HEADER_PIN,
    DOMAINROBOT_HEADER_2FA_TOKEN,
    DOMAINROBOT_HEADER_OWNER_NAME,
    DOMAINROBOT_HEADER_OWNER_CONTEXT,
    DOMAINROBOT_HEADER_DEMO_MODE,
    DOMAINROBOT_HEADER_WEBSOCKET,
    DOMAINROBOT_HEADER_WEBSOCKET_TARGET,
    DOMAINROBOT_HEADER_CTID,
    DOMAINROBOT_HEADER_SESSION_USER,
    DOMAINROBOT_HEADER_OWNER,
    DOMAINROBOT_HEADER_CUSTOMER,
    DOMAINROBOT_HEADER_PROFILE
}
```

### Setting Headers

Custom Headers (see available headers in [Available Headers](#available-headers)) can be set by calling **.headers** before calling a specific API task.
**.headers** expects a JSON object. Default headers can also be overwritten like this.
See example below.

```javascript
let DomainRobotHeaders = require("js-domainrobot-sdk").DomainRobotHeaders;

let result = await domainRobot
    .certificate(certficateModel)
    .headers({
        [DomainrobotHeaders.DOMAINROBOT_HEADER_CTID]:
            "ctid-test-12323"
    })
    .prepareOrder();
```

## Changelog

For a detailed changelog, see the [CHANGELOG.md](CHANGELOG.md) file

## Copyright and license

MIT License

Copyright (c) 2019 InterNetX GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
