# WebdriverIO assignments with typescript https://confluence.affiniongroup.com/pages/viewpage.action?spaceKey=ORXE3&title=Training+for+ORXe3+Test+Automation

-After cloning the repo from 'https://github.com/tavisca-psingh/WebdriverIO'
Run `npm install` - Make sure you have NodeJs installed - preferrable 12X version

-To compile all the typescript files and move to lib directory.
Run `npm run build `
# Ensure you have ran above command before running all the scripts to execute test cases

-To execute all the test cases 
Run `npm run test`

-To execute the test case as defined in wdio.conf.js using runner file
Run `npm run test:e2e-runner`

-To exeucte the test cases based on the suites defined in the wdio.conf.js
Run `npm run test_suite -- --suite=wdio1` -- 'wdio1' is the name of suite in the wdio.conf.js [Valid suite names are : wdio1,wdio2,wdio3,wdio4,wdio5]

-To execute the test cases based on the tags defined in the it block of every spec files.
Either Run `npm run test_smoke` || `npm run test_regression`
Or Run `npm run test --grep=Smoke` -- 'Smoke' is the the tag name in the it block of spec files [Valid tags are: Smoke, Regression]

-To generate the allure report -- make sure you have java installed and set in path for running allure command
Run `npm run allure_report`




