const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function (req, res, next) {
  const nav = await utilities.getNav()
  res.render("index", {
    title: "Home",
    nav,
  })
}

baseController.triggerError = async function (req, res, next) {
  throw new Error(
    "Intentional Server Error - This was triggered from the footer link."
  )
}

module.exports = baseController
```
