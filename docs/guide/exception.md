# Exception handling

::: tip DomainrobotException
If there is any error response from the API, the services will throw a DomainRobotException, which contains information about the error.
:::

::: tip Connection Errors
If there are any connection errors and/or timeouts the SDK will throw corresponding error that does NOT MATCh the standard DomainRobotException.

See "Connection error handling" below for an example and more information.
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

## Connection error handling

In case of timeouts or other connection errors (wrong address etc.) the SDK won't return a DomainRobotException error. Instead it will
return a 'standard' JS Error.

```json
{
  errno: -3001,
  code: 'EAI_AGAIN',
  syscall: 'getaddrinfo',
  hostname: 'invalid.autodns.com',
  config: {
    url: 'http://invalid.autodns.com/domain/_search',
    method: 'post',
    data: '{"filters":[],"view":{"limit":10000,"offset":0},"orders":[{"key":"name","type":"ASC"}]}',
    headers: {
      'X-Domainrobot-Context': 1,
      'Content-Type': 'application/json',
      'User-Agent': 'JSDomainrobotSdk/2.1.12',
      'X-Domainrobot-Ctid': '2023-08-23-lnbi210llnf441s-dev',
      'Content-Length': 135
    },
    auth: { username: 'user', password: '****' },
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    adapter: [Function: httpAdapter],
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: [Function: validateStatus],
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    }
  },
  request: <ref *1> Writable {},
  ...
  response: undefined,
  isAxiosError: true,
  toJSON: [Function: toJSON]
}
```

In these cases the __error.response__ is UNDEFINED, therefore the SDK can not verify the response and also can't return a valid DomainRobotException.

```