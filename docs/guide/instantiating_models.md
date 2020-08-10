# Instantiating models

All Models can be found under DomainRobotModels.

See an example of how to create a new model instance below:

```php
let DomainRobotModels = require("@internetx/js-domainrobot-sdk").DomainRobotModels;

let domainModel = new DomainRobotModels.Domain();
```

You can find a list of all available Models in our official [Swagger documentation](https://help.internetx.com/display/APIJSONEN/Technical+Documentation) at the bottom of the page in the section **Models**.

Alternatively you can directly view the available models in the SDK source code in our [typescript definition file](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/index.d.ts).
