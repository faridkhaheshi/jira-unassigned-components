const fetchUnassignedComponents = require("./services/components/fetch-unassigned-components")

const PROJECT_KEY = "IC"

const main = async () => {
  try {
    const components = await fetchUnassignedComponents(PROJECT_KEY)
    console.log(components)
  } catch (err) {
    console.error(err)
  }
}

main()
