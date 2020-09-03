---
title: Models
---

# Models

This SDK heavily relies on Models which are generated from our official [Swagger documentation](https://help.internetx.com/display/APIJSONEN/Technical+Documentation).

If you are in doubt about which properties are accepted by a specific model you can always refer to this [documentation](https://help.internetx.com/display/APIXMLEN/JSON+Technical+Documentation), the [typescript definition](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/index.d.ts) file or take a look at the [examples](https://github.com/InterNetX/js-domainrobot-sdk/tree/master/examples) we provide in the source code of the SDK.

To build a certain request, for example to create a domain, you will first have to create the general Domainrobot instance and then provide it with a Domain Model which itself is containing other Models as well.

Take a look at this [example](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/domain/DomainCreate.js):

```javascript
// create and configure the Domainrobot instance
let domainRobot = new DomainRobot({
    url: "http://dev-proxy-lab.intern.autodns-lab.com:10025",
    auth: {
        user: "user",
        password: "password",
        context: "4"
    }
});

// next create and fill the DomainRobot domain model
let domainModel = new DomainRobotModels.Domain({
    name: "js-sdk-test.de",
    nameServers: [
        new DomainRobotModels.NameServer({
            name: "ns1.example.com"
        }),
        new DomainRobotModels.NameServer({
            name: "ns2.example.com"
        })
    ]
});

// we need to set contacts; for this we inquire a contact we already know
// and pass it into the DomainModel
let contact = domainrobot.contact().info(23194139);
// contact is an intance of a Contact model
domainModel.adminc = contact;
domainModel.ownerc = contact;
domainModel.techc = contact;
domainModel.zonec = contact;
domainModel.ignoreWhois = true;

try {
    // if the request is successful the returned object
    // will be of the Type DomainRobotResult
    let domainRobotResult = await domainRobot.domain().create(domainModel);
    return domainRobotResult;
} catch (DomainRobotException) {
    // if the request produces an error the returned object
    // will be of the Type DomainRobotException
    Logger.transport("file").error("Request error", DomainRobotException);
}
```

Specific examples for certain models can be found in the section **Supported API calls** which you can find in the left hand side menu.