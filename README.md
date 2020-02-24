# JS Domainrobot API

A node/js package for easy integration of the **Domainrobot API** powered by [InterNetX GmbH](https://internetx.com).

## Table of Contents

- [JS Domainrobot API](#js-domainrobot-api)
  - [Table of Contents](#table-of-contents)
  - [Install and Import](#install-and-import)
    - [Installation](#installation)
    - [Requires](#requires)
  - [Usage](#usage)
    - [Models](#models)
      - [Instantiating](#instantiating)
      - [How to set properties](#how-to-set-properties)
      - [Stacking Models](#stacking-models)
      - [Available Models](#available-models)
    - [DomainRobotException](#domainrobotexception)
    - [DomainRobotResult](#domainrobotresult)
    - [Supported API calls](#supported-api-calls)
      - [Certificate tasks](#certificate-tasks)
        - [Prepare Order](#prepare-order)
        - [Create Realtime](#create-realtime)
      - [DomainStudio](#domainstudio)
        - [Search](#search)
  - [(Custom) Headers](#custom-headers)
    - [Require](#require)
    - [Available Headers](#available-headers)
    - [Setting Headers](#setting-headers)
  - [Changelog](#changelog)
  - [Copyright and license](#copyright-and-license)

## Install and Import

### Installation

```javascript
yarn add js-domainrobot-sdk

npm install js-domainrobot-sdk
```

### Requires

```javascript
let DomainRobot = require("js-domainrobot-sdk").DomainRobot;
let DomainRobotHeaders = require("js-domainrobot-sdk").DomainRobotHeaders;
let DomainRobotModels = require("js-domainrobot-sdk").DomainRobotModels;
```

## Usage

Detailed examples can be found under src/examples!

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

- url
    ** can be left blank! (mandatory for "Personal AutoDNS" accounts)
- auth (mandatory)
    ** user (mandatory)
    ** password (mandatory)
    ** context (mandatory for "Personal AutoDNS" accounts)

### Models

Specific examples for certain models can be found in the section [Supported API calls](#supported-api-calls)

#### Instantiating

Modles are instantiated by using the DomainRobotModels module.
See an example below:

```javascript
let certficateModel = new DomainRobotModels.Certificate();
```

#### How to set properties

Properties can be set while creating a new model or a after a model has been created. 

All of the following examples are valid:

```javascript
let certficateModel = new DomainRobotModels.Certificate({
    product: "BASIC_SSL",
    lifetime: {
        unit: "MONTH",
        period: 12
    }
});
```

```javascript
let certficateModel = new DomainRobotModels.Certificate();
certficateModel.product = "BASIC_SSL";
certficateModel.lifetime = {
    unit: "MONTH",
    period: 12
};
```

```javascript
let timePeriod = new DomainRobotModels.TimePeriod({
    unit: "MONTH",
    period: 12
});
let certficateModel = new DomainRobotModels.Certificate({
    product: "BASIC_SSL",
    lifetime: timePeriod
});
```

#### Stacking Models

Every property that is an object itself can either be set directly via JSON or through the corresponding model provided by this package. See also the examples in [How to set properties](#how-to-set-properties)

```javascript
let timePeriod = new DomainRobotModels.TimePeriod({
    unit: "MONTH",
    period: 12
});

timePeriod ===  {
    unit: "MONTH",
    period: 12
}
```

#### Available Models

All available Models and properties can be seen under the Section 'Models' in detail here: [https://help.internetx.com/display/APIJSONEN/Technical+Documentation](https://help.internetx.com/display/APIJSONEN/Technical+Documentation)

### DomainRobotException

```javascript
DomainRobotException {
    error, // full error reporting and error message including STID/CTID
    status // http error code
}
```

Example of an exception

```javascript
DomainRobotException {
  error: {
    stid: '20200109-app2-dev-24718',
    messages: [ [Object] ],
    status: {
      code: 'E400110',
      text: 'CSR key could not be checked successfully.',
      type: 'ERROR'
    },
    ctid: 'ctid-test-12323'
  },
  status: 400
}
```

### DomainRobotResult

```javascript
DomainRobotResult {
    result, // full response including STID/CTID
    status // http status code
}
```

Example of a success result

```javascript
DomainRobotResult {
  result: {
    stid: '20200109-app2-dev-24759',
    status: {
      code: 'S400110',
      text: 'CSR key was checked successfully.',
      type: 'SUCCESS'
    },
    data: [ [Object] ],
    ctid: 'ctid-test-12323'
  },
  status: 200
}
```

### Supported API calls

Some API calls are asynchronous. Asynchronous calls should always be wrapped in a try-catch block to catch
possible exceptions.
All API calls return a [DomainRobotException](#domainrobotexception) if an error occurs.
All API calls return a [DomainRobotResult](#domainrobotresult) if the task was successful.

#### Certificate tasks

##### Prepare Order

```javascript
let certficateModel = new DomainRobotModels.Certificate();

certficateModel.csr =
    "-----BEGIN CERTIFICATE REQUEST-----" +
    "MIICozCCAYsCAQAwXjELMAkGA1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUx" +
    ...
    "adX6zVC8Uw==" +
    "-----END CERTIFICATE REQUEST-----";

try{
  let result = await domainRobot
    .certificate(certficateModel)
    .prepareOrder();
} catch (DomainRobotException) {

}
```

##### Create Realtime

```javascript
let certficateModel = new DomainRobotModels.Certificate({
    product: "BASIC_SSL",
    lifetime: {
        unit: "MONTH",
        period: 12
    }
});

certficateModel.name = "example.com";
certficateModel.authentication = {
    method: "FILE"
};
certficateModel.csr =
    "-----BEGIN CERTIFICATE REQUEST-----" +
    "MIICozCCAYsCAQAwXjELMAkGA1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUx" +
    ...
    "adX6zVC8Uw==" +
    "-----END CERTIFICATE REQUEST-----";

try{
  let result = await domainRobot
    .certificate(certficateModel)
    .createRealtime();
} catch (DomainRobotException) {

}
```

#### DomainStudio

##### Search

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
let DomainRobotHeaders = require("js-domainrobot-sdk").DomainRobotHeaders;
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

For a detailed changelog, see the [CHANGELOG.md](CHANGELOG.md) file.

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
