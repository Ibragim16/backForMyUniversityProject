const Router = require("express")
const router = Router()
const importUser = require("./user.route")
const importQuestion = require("./question.route")
const importComment = require("./comment.route")


router.use(importUser)
router.use(importQuestion)
router.use(importComment)

module.exports = router