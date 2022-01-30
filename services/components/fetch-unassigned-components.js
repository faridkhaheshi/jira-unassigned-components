const axios = require("axios")
const log = require("../../utilities/log")

const fetchUnassignedComponents = async projectKey => {
  log(`Retrieving lists of components without a lead for project ${projectKey}`)
  const { data: components } = await axios.get(
    `https://herocoders.atlassian.net/rest/api/3/project/${projectKey}/components`
  )

  const targetComponents = components.filter(c => !c.lead)

  log(
    `retrieved ${targetComponents.length} components: ${targetComponents
      .map(comp => comp.name)
      .join(", ")}`
  )

  return targetComponents
}

module.exports = fetchUnassignedComponents
