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

<!-- * [create](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/certificate/CertificateCreate.php)(Certificate $certificate)
* [realtime](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/certificate/CertificateCreateRealtime.php)(Certificate $certificate)
* [prepareOrder](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/certificate/CertificatePrepareOrder.php)(CertificateData $certificateData)
* [list](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/certificate/CertificateList.php)(Query $query = null)
* [info](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/certificate/CertificateInfo.php)(int $id)
* [delete](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/certificate/CertificateDelete.php)(int $id) -->

* create(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* createRealtime(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataCertificate, Number>;
* prepareOrder(model: DomainRobotModels.CertificateData): DomainRobotResult<JsonResponseDataCertificateData, Number>;
* list(odel: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataCertificate, Number>;
* info(id: Number): DomainRobotResult<JsonResponseDataCertificate, Number>;
* reissue(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* delete(id: Number): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* renew(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
* comment(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataVoid, Number>;
