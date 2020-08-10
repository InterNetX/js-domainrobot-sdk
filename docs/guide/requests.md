# Asynchronous Requests

::: noheader
This library only provides you with **asynchronous** requests.

If you need or want to work with synchronous requests think about giving our [php-sdk](https://internetx.github.io/php-domainrobot-sdk/guide/preamble.html) a chance as it provides you with both possibilities.
:::

## Asynchronous response

All requests will return a DomainRobotResult on success or a DomainRobotException if an error occurs.

DomainRobotResult (Typescript) Definition:

```typescript
export interface DomainRobotResult<Result, Number> {
    result: Result;
    status: Number;
}

export interface Result {
    stid: String;
    status: ResponseStatus;
    object?: ResponseObject;
    ctid?: String;
    data: Array<object>;
}

// special extension for Domain tasks
export interface JsonResponseDataDomain extends Result {
    data: DomainRobotModels.Domain[];
}
```

The above code represents a typescript definition but is also valid for javascript implementations. The structure is always the same. The only that changes is the contents of *data*.
