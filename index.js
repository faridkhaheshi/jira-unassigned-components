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
      maxResultPerReq: 10,
    })
    printReport({ components, issues })
  } catch (err) {
    console.error(err)
  }
}

main()
