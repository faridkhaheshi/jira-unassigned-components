// Logs only in non-production environments
const log = (...args) => {
  if (process.env.NODE_ENV === "production") return
  console.log(...args)
}

module.exports = log
