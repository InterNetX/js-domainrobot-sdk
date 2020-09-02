# Logging Requests and Responses

There may be certain circumstances where you may want to log your requests and responses.
For these cases we provide you with two integrated callback methods you can use for this purpose.

## Implementation and Usage

There are two possible ways to use these methods.

1. Define them globally through the domainrobotConfig

    ```javascript
    new Domainrobot({
        url: 'https://api.demo.autodns.com/v1',
        auth: {
            user: 'username',
            password: 'password',
            context: 4
        },
        logRequestCallback: function (requestOptions, headers) {
            console.log(requestOptions, headers)
        },
        logResponseCallback: function (response, executionTime) {
            console.log(response, executionTime)
        }
    });

    ```

2. Define them locally for a single request

    ```javascript
    result = await domainRobot
        .login()
        .logRequest(function (requestOptions, headers) {
            console.log(requestOptions, headers)
        })
        .logResponse(function (response, executionTime) {
            console.log(requestOptions, headers)
        })
        .sessionID(loginData);
    ```

&nbsp;  
&nbsp;  

::: warning ATTENTION:
Local defintions for log callbacks will always overwrite global definitions.
:::

## Request parameters

* **requestOptions**: the request options that are sent with the call; contains query parameters and other settings
* **headers**: the headers sent with the call

## Response parameters

* **response**: the raw response we received from the backend
* **executionTime**: the execution time of the full request from start to finish
