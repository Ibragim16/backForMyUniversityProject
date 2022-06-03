const Router = require("express")
const router = Router()
const importUser = require("./user.route")
const importQuestion = require("./question.route")
const importComment = require("./comment.route")
const importFavorite = require("./favorite.route")
const importConversation = require("./conversation.route")
const importMessage = require("./message.route")


router.use(importUser)
router.use(importQuestion)
router.use(importComment)
router.use(importFavorite)
router.use(importConversation)
router.use(importMessage)

module.exports = router