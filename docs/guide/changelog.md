# Changelog

## [1.4.1] - 2020-09-02

* bugfixes for Certificate and Domainservices
* add UserService

## [1.4.0] - 2020-09-02

* add logging (callbacks) for request/response
  * https://internetx.github.io/js-domainrobot-sdk/guide/logging.html
* add new types to defintion file (index.d.ts)

## [1.3.2] - 2020-07-16

* syntax and error fixes

## [1.3.1] - 2020-07-16

* removed accounting service
* added yarn-error.log to gitignore

## [1.3.0] - 2020-07-16

* massively improved typescript definitions
* fixed several errors in several services

## [1.2.0] - 2020-06-22

* improved typescript types defintion file
* added DomainRobotConstants

## [1.1.0] - 2020-06-15

* added typescript types defintion file
* improved README

## [0.6.0] - 2020-06-23

* added possibility to gain direct access to response and request through callback methods
* added User info and list tasks
* added examples for some basic tasks
    ** more examples (hopefully for all tasks) will be added in future versions
* fixed some tasks that did not give correct access to the DomainrobotResult
* improved documentation and readme

## [0.5.2] - 2020-06-16

* Fixed printing null or empty values (#8)
* Fixed warnings found by code analysis (PR #8)
* Improve code documentation (PR #6)

## [0.3.7] - 2020-03-19

* Rename all DomainRobot string to Domainrobot

## [0.3.6] - 2020-03-19

* Rename namespace from IXDomainRobot to Domainrobot

## [0.3.5] - 2020-03-11

* Add automatic sdk version resolution

## [0.3.4] - 2020-03-02

* Fix DomainStudio->search() missing body

## [0.3.3] - 2020-03-02

* Fix imports

## [0.3.2] - 2020-03-02

* Fix imports

## [0.3.1] - 2020-03-02

* Add new services to DomainRobot class

## [0.3.0] - 2020-03-02

* Added all important routes from the domainrobot open api documentation
* Updated README.md
* Fix return value of the DomainStudio->search() method

## [0.2.0] - 2020-02-11

* Added DomainStudio calls
* Added possiblity to use asynchronous as well as synchronous tasks
* Improved documentation

## [0.1.0] - 2020-02-10

* Initial release
