const axios = require("axios")

const fetchUnassignedComponents = async projectKey => {
  const { data: components } = await axios.get(
    `https://herocoders.atlassian.net/rest/api/3/project/${projectKey}/components`
  )

  return components.filter(c => !c.lead)
}

module.exports = fetchUnassignedComponents
