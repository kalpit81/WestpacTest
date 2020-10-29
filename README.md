# 1. WestpacTest
Westpac Kiwisaver Retirement Calculator Test

# 2. About the Repository
This repository contains a Cypress.io project to perform automation testing on Westpac kiwisaver calculator.
Test scenarios are written in Javascript using Mocha framework with Page Object Model design. 

# 3. Following tools and softwares are used to build the project:
  # 3a. Pre-requisties
    Visual Studio Code IDE (download from:- https://code.visualstudio.com/download)

    Node.js (download from:- https://nodejs.org/en/download/)

# 3b. Install below dependecies as via npm (using Visual Studio Code IDE terminal) which will be visible under package.json file
    cypress (npm install cypress --save-dev)

    cypress-xpath (npm install -D cypress-xpath)

    cypress-iframe (npm install -D cypress-iframe)

    mochawesome Reports (npm install --save-dev mochawesome)

    mochawesome-report-generator (npm install -g mochawesome-report-generator)

# 4. In the IDE terminal, go to the project root directory and run:
npm init (This is required to Generate package.json) then install all dependencies mentioned at step 3b.

More installation information guide is provided on the https://www.toolsqa.com/cypress/install-cypress/

# 5. Test Execution commands for the the project as below,
   # To run via IDE terminal use below commands
         npm run CypressUIRun (To open the testcase in Cypress Test Runner window , check the package.json)
         npm run CypressHeadlessRun (To run the testcases within the terminal without opening the UI and also generates reports , videoes and screenshots)
            
   # To run via IDE terminal with Cypress Dashboard intergration use below commands (To view the Cypress dashboard requires signing and registering the orgination and include the key)
         npm run DashboardChrome (To open the testcase in Cypress Test Runner window , check the package.json Open Chrome Browser headed)
         npm run DashboardFirefoxHeadless (This is headless excution requires Cypress dashboard sigin , videos are generated during headless executions)

# Test Results
  # Screenshots
    cypress/screenshots
  # Video
    cypress/videos
  # Reports
    cypress/mochawesome-report

# Who do I talk to?
For more information Contact: Kalpit Karapurkar at kalpit.karapurkar@gmail.com
