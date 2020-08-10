# Contact 

General call of tasks:

```javascript
 let objectJob = domainrobot.contact().create(contact);
```

List of all available tasks (with typescript defintions) with linked examples (if available):

* create(model: DomainRobotModels.Contact): DomainRobotResult<JsonResponseDataContact, Number>;
* update(model: DomainRobotModels.Contact): DomainRobotResult<JsonResponseDataContact, Number>;
* list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataContact, Number>;
* info(id: Number): DomainRobotResult<JsonResponseDataContact, Number>;
* delete(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;

<!-- * [create](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/contact/ContactCreate.php)(Contact $contact)
* [update](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/contact/ContactCreate.php)(Contact $contact)
* [delete](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/contact/ContactCreate.php)(int $contactID)
* [info](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/contact/ContactCreate.php)(int $contactID)
* [list](https://github.com/InterNetX/php-domainrobot-sdk/blob/master/example/contact/ContactCreate.php)(Query $query = null) -->
