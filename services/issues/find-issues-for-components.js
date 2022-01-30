const fetchPaginatedApi = require("../../utilities/fetch-paginated-api")

const MAX_RESULTS_PER_REQ = 100
const BASE_URI = "https://herocoders.atlassian.net/rest/api/3/search"

const findIssuesForComponents = async ({
  components,
  projectKey,
  maxResultPerReq = MAX_RESULTS_PER_REQ,
}) => {
  const jql = `project = ${projectKey} AND component in (${components.map(
    comp => comp.id
  )}) order by created DESC`

  console.log(``)
  console.log(`created the JQL:`)
  console.log(jql)
  console.log(``)

  const issues = await fetchPaginatedApi({
    uri: BASE_URI,
    maxResults: maxResultPerReq,
    fixedParams: { jql, fields: "components" },
    resultsKey: "issues",
  })
  console.log(`fetched ${issues.length} issues from the API`)

  return issues
}

module.exports = findIssuesForComponents
