# How to draft a new release

* Default branch: master
* Release branch: stable

Releaes / NPM Packages are created from the 'stable' branch on every pull request as long as the
version number in package.json is incremented/udpated.

Release flow:

* push changes to master
  * update version in package.json
  * add a file with release notes for this version
* create pull request from master -> stable
* after the pull request has been merged an action to create the NPM Package will be triggered

Release notes are located in: release-notes/v{{version from package.json}}.txt
