const Router = require("express")
const router = Router()
const importUser = require("./user.route")
const importQuestion = require("./question.route")


router.use(importUser)
router.use(importQuestion)

module.exports = router