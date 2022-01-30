const axios = require("axios")

const fetchPaginatedApi = async ({
  uri,
  fixedParams = {},
  maxResults = 10,
  startAt = 0,
  resultsKey,
}) => {
  console.log(`
Retrieving ${resultsKey} ${startAt}-${
    maxResults + startAt - 1
  } from the API.  `)
  const { data } = await axios.get(uri, {
    params: { ...fixedParams, startAt, maxResults },
  })
  const {
    startAt: returnedStartAt,
    total,
    maxResults: returnedMaxResults,
  } = data
  let results = data[resultsKey]
  console.log(
    `-> Retrieved ${results.length} ${resultsKey} (${returnedStartAt}-${
      returnedStartAt + results.length - 1
    })/${total} from the API. Max results: ${returnedMaxResults}.`
  )

  if (returnedStartAt + returnedMaxResults < total) {
    const tempResults = await fetchPaginatedApi({
      uri,
      fixedParams,
      maxResults: Math.min(
        total - (returnedStartAt + returnedMaxResults),
        returnedMaxResults
      ),
      startAt: returnedStartAt + returnedMaxResults,
      resultsKey,
    })
    results = results.concat(tempResults)
  } else {
    console.log("")
  }

  return results
}

module.exports = fetchPaginatedApi
