const printReport = ({ components, issues }) => {
  const issueCounts = {}
  components.forEach(comp => (issueCounts[comp.id] = 0))

  issues.forEach(iss => {
    iss?.fields?.components.forEach(issComp => {
      if (issComp.id in issueCounts) {
        issueCounts[issComp.id]++
      }
    })
  })

  console.log("---------------------------")
  console.log(`-------FINAL REPORT--------`)
  console.log("---------------------------")
  console.log("")
  console.log(`These are the components without a lead:`)
  console.log("")

  components.forEach((comp, index) =>
    console.log(
      `${index + 1}. Component ${comp.name} (id=${comp.id}) has ${
        issueCounts[comp.id]
      } issues.`
    )
  )

  console.log("")
  console.log("")
}

module.exports = printReport
