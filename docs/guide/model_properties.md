# Model configuration

Model properties can be set while creating a new model or after a model has been created.

The following examples are valid:

```javascript
let DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels;

let timePeriod = new DomainRobotModels.TimePeriod({
    unit: 'MONTH',
    period: 12
});

let certificateModel = new Certificate({
    lifetime: timePeriod,
    product: "BASIC_SSL"
});
```

```javascript
let DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels;

let certificateModel = new DomainRobotModels.Certificate();
let timePeriod = new DomainRobotModels.TimePeriod({
   unit: 'MONTH',
   period: 12
});

certificateModel->setLifetime(timePeriod);
certificateModel->setProduct("BASIC_SSL");
```
