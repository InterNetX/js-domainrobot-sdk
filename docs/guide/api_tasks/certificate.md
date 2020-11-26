# Certificate

::: unobtrusive-info
Create, delete and manage certificates.

Find additional help here: [https://help.internetx.com/display/SSLEN](https://help.internetx.com/display/SSLEN)
:::

General call of tasks:

```javascript
 let objectJob = domainrobot.certificate().create(certificate);
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* [create](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/certificate/CertificateCreate.js)(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [createRealtime](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/certificate/CertificateCreateRealtime.js)(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataCertificate, Number>;
* [prepareOrder](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/certificate/CertificatePrepareOrder.js)(model: DomainRobotModels.CertificateData): DomainRobotResult<JsonResponseDataCertificateData, Number>;
* [list](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/certificate/CertificateList.js)(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataCertificate, Number>;
* [info](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/certificate/CertificateInfo.js)(id: Number): DomainRobotResult<JsonResponseDataCertificate, Number>;
* reissue(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* [delete](https://github.com/InterNetX/js-domainrobot-sdk/blob/master/examples/certificate/CertificateDelete.js)(id: Number): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* renew(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* comment(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataVoid, Number>;
