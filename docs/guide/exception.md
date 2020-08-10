# Exception handling

::: tip DomainrobotException
If there is any error response from the API, the services will throw a DomainRobotException, which contains information about the error.
:::

Due to the nature of the tasks all being asynchronous you should call all SDK tasks inside a try/catch block anyway.

## Try/catch example

```php
const Logger = use("Logger");

try {
    // if the request is successful the returned object
    // will be of the Type DomainRobotResult
    let domainRobotResult = await domainRobot.domain().create(domainModel);

    Logger.transport("file").error("Request success", domainRobotResult);

    return domainRobotResult;
} catch (DomainRobotException) {
    // if the request produces an error the returned object
    // will be of the Type DomainRobotException
    Logger.transport("file").error("Request error", DomainRobotException);
}
```

DomainRobotException structure:

```typescript
export interface DomainRobotException {
    error: {
        stid: String;
        // messages can vary depending on the task, so this is the closest
        // defintion we can provide here
        messages: Array<{
            code: String;
            text: String;
            type: String;
        }>;
        status: {
            code: String;
            text: String;
            type: String;
        };
        ctid: String;
    };
    // http status code
    status: Number;
}
```

The specific **error message** is stored in DomainRobotException.error.

The specific **http status** code is stored in DomainRobotException.status.

## Error message example

```javascript
DomainRobotException {
  error: {
    stid: '20200807-app2-dev-16317',
    messages: [
    {
        text: 'Schluessel nicht erlaubt.',
        objects: [ { type: 'conditions[0]/key', value: 'sld2' } ],
        code: 'EF00022',
        status: 'ERROR'
    }
    ],
    status: { type: 'ERROR' }
  },
  status: 400
}
```
