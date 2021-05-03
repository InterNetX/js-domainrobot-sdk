# Poll

General call of tasks:

```javascript
 let pollMessage = domainrobot.poll().info();
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* info(): DomainRobotResult<JsonResponseDataPollMessage, number>;
  * the result contains the number of pending messages under *DomainRobotResult.result.object.summary*
* confirm(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, number>;

Find a full example implementation for typescript here: [ts-domainrobot-sdk](https://github.com/adelholtz/ts-domainrobot-sdk) // [src/Polling.ts](https://github.com/adelholtz/ts-domainrobot-sdk/blob/master/src/Polling.ts)

Example of a DomainRobotResult for the info() command:

```json
{
  "result": {
    "stid": "20210503-app3-dev-8363",
    "status": {
      "code": "S0905",
      "text": "The notification was polled successfully.",
      "type": "SUCCESS"
    },
    "object": {
      "type": "Message",
      "value": "1005360985",
      "summary": 2
    },
    "data": [
      {
        "id": 1005360985,
        "job": {
          "created": "2021-05-03T13:39:31.000+0200",
          "updated": "2021-05-03T13:39:37.000+0200",
          "status": "SUCCESS",
          "execution": "2021-05-03T13:39:35.000+0200",
          "subType": "VGRS-TEST_com",
          "action": "update",
          "id": 4309872209
        },
        "stid": "20210503-app2-dev-17873",
        "object": {
          "type": "Domain",
          "value": "example.com",
          "data": {
            "created": "2019-09-19T15:57:39.000+0200",
            "updated": "2021-05-03T13:39:35.000+0200",
            "owner": {},
            "updater": {},
            "name": "example.com",
            "registryStatus": "HOLD_LOCK",
            "nameServers": [
              {
                "name": "ns1.dev-lab.intern.autodns-lab.com"
              },
              {
                "name": "ns2.dev-lab.intern.autodns-lab.com"
              }
            ],
            "period": {
              "unit": "YEAR",
              "period": 1
            },
            "trustee": false,
            "privacy": false,
            "authinfo": "41yOOqA49OhojU+R",
            "domainsafe": false,
            "registrarStatus": "HOLD",
            "registrarStatusReason": "ocval",
            "privacyPlus": false,
            "rddsOptIn": "NOT_SET",
            "adminc": {
              "id": 21365838
            },
            "techc": {
              "id": 21365838
            },
            "zonec": {
              "id": 21365838
            },
            "ownerc": {
              "id": 21365838
            },
            "expire": "2020-09-19T15:57:39.000+0200",
            "payable": "2021-09-19T15:57:39.000+0200",
            "action": "UPDATE",
            "autoRenewStatus": "TRUE"
          }
        }
      }
    ]
  },
  "status": 200,
  "headers": {
    "connection": "close",
    "date": "Mon, 03 May 2021 11:44:44 GMT",
    "server": "JSON",
    "content-length": "1240",
    "content-type": "application/json; charset=UTF-8",
    "content-language": "en",
    "x-domainrobot-stid": "20210503-app3-dev-8363"
  }
}
```

Example of a DomainRobotResult for the confirm() command:

```javascript
{
  "result": {
    "stid": "20210503-app2-dev-18934",
    "status": {
      "code": "S0906",
      "text": "The notification was confirmed successfully.",
      "type": "SUCCESS"
    },
    "object": {
      "type": "Message",
      "value": "1005360985",
      "summary": 1
    }
  },
  "status": 200,
  "headers": {
    "connection": "close",
    "date": "Mon, 03 May 2021 12:30:08 GMT",
    "server": "JSON",
    "content-length": "198",
    "content-type": "application/json; charset=UTF-8",
    "content-language": "en",
    "x-domainrobot-stid": "20210503-app2-dev-18934"
  }
}
```
