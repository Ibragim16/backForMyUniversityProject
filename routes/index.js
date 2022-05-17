const Router = require("express")
const router = Router()
const importUser = require("./user.route")

router.use(importUser)

module.exports = router