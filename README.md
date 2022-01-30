# jira-unassigned-components

This code generates a report about unassigned components related to the "Issue Checklist" project. "Unassigned" components are components that have no leads. The final report is logged to the console. 

This is a sample report generated by this code:

```
---------------------------
-------FINAL REPORT--------
---------------------------

These are the components without a lead:

1. Component Data analysis (id=10105) has 8 issues.
2. Component Infrastructure (id=10104) has 9 issues.
3. Component Marketplace (id=10103) has 6 issues.
```

## How to run

To run the code:

1. Clone this repository by running the following command:

```
git clone git@github.com:faridkhaheshi/jira-unassigned-components.git
```

2. Go to the project directory:

```
cd jira-unassigned-components
```

3. Install dependencies:

```
npm install
```

4. Generate the report:

 ```
 npm run start
 ```
 
 * To see more details, run the code using `npm run test` instead of `npm run start`.
 
 
 ## How to use the code
 
 To see how the code works, have a look at the `index.js` file in the root of the directory.
 
 ```javascript
const fetchUnassignedComponents = require("./services/components/fetch-unassigned-components")
const findIssuesForComponents = require("./services/issues/find-issues-for-components")
const printReport = require("./utilities/print-report")

const PROJECT_KEY = "IC"

const main = async () => {
  try {
    const components = await fetchUnassignedComponents(PROJECT_KEY)
    const issues = await findIssuesForComponents({
      components,
      projectKey: PROJECT_KEY,
      // maxResultPerReq: 10,
    })
    printReport({ components, issues })
  } catch (err) {
    console.error(err)
  }
}

main()

```

Here we simply define the `main` function and run it. You can use the main services defined in the `/services` directory independently to get a list of unassigned components of a project (`fetchUnassignedComponents`), and to get the list of issues related to an array of components (`findIssuesForComponents`).

## The report

To generate the final report, we are using a utility function called `printReport`. Here, this function simply logs the report to the console. But this can be replaced by any other reporting function that might be needed.

## See how it works

To see more about the underlying mechanisms, run the code using `npm run test` instead of `npm run start`. This will show more logs about each step.

## Changing number of issues per request

By default, we ask for 100 issues when requesting issues from JIRA API. This can be changed by providing an input called `maxResultPerReq` to the findIssuesForComponents service.
 
