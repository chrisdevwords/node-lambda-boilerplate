NodeJS Lambda Boilerplate
========================================
Simple boilerplate for a simple NodeJS lambda function. Includes package script and [CircleCI](https://circleci.com) config.

[![CircleCI](https://circleci.com/gh/chrisdevwords/node-lambda-boilerplate/tree/master.svg?style=shield)](https://circleci.com/gh/chrisdevwords/node-lambda-boilerplate/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/chrisdevwords/node-lambda-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/chrisdevwords/node-lambda-boilerplate?branch=master)
[![Dependency Status](https://david-dm.org/chrisdevwords/node-lambda-boilerplate.svg)](https://david-dm.org/chrisdevwords/node-lambda-boilerplate)
[![Dev Dependency Status](https://david-dm.org/chrisdevwords/node-lambda-boilerplate/dev-status.svg)](https://david-dm.org/chrisdevwords/node-lambda-boilerplate?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/chrisdevwords/node-lambda-boilerplate/badge.svg)](https://snyk.io/test/github/chrisdevwords/node-lambda-boilerplate)


Requirements
------------
* Requires Node v6.10
* Package engine is set to strict to match [AWS Lambda Environment](https://aws.amazon.com/blogs/compute/node-js-4-3-2-runtime-now-available-on-lambda/)
* I recommend using [NVM](https://github.com/creationix/nvm)

## Running Tests
This project includes [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/). If you add to this, write more tests. And run them:
````
$ npm test
````

### Contributing
The lint config is based on [AirBnB's eslint](https://www.npmjs.com/package/eslint-config-airbnb).
To lint the code run:
```
$ npm run lint
```

###Compiling For Upload
Make sure the bin directory has executable permissions:
````
$ chmod +x ./bin/build.sh
````
If this throws an error, trying using sudo:
```
$ sudo chmod +x .bin/build.sh
```

Zip up source code and runtime dependencies by running:
````
$ npm run build
````
This should output files.zip to the project root for upload to the AWS Lambda Console.


### Deploying w/ Circle CI
Included is a `circle.yml` file for deployment to AWS with [CircleCI](https://circleci.com).
This will:
1. run mocha tests 
2. publish a coverage report with [coveralls](http://coveralls.io)
3. publish a dependency status report with [david](https://david-dm.org/)
4. deploy your code to AWS when master or develop is updated on github.

In order to deploy :
1. [configure AWS Permissions for your Circle CI account](https://circleci.com/docs/1.0/continuous-deployment-with-amazon-s3/).
2. Set up [coveralls](https://coveralls.io/) and david with your github repo.
3. set the following [environment vars](https://circleci.com/docs/1.0/environment-variables/) in your Circle CI build:
    - COVERALLS_REPO_TOKEN - access token for [coveralls](http://coveralls.io), used to publish a coverage report.
    - PROD_FUNCTION_NAME - the name of the AWS Lambda you want to build  when `master` is pushed to github.
    - DEV_FUNCTION_NAME - (optional) the name of the AWS Lambda you want to build  when `develop` is pushed to github.
4. Be sure to replace references to `node-lambda-boilerplate` in the badges at the top of this file  with the name of your repo.