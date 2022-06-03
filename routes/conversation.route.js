const {Router} = require("express")
const { conversationControllers } = require("../controllers/conversation.controller")
const authMiddlewere = require("../middlewere/auth.middlewere")

const router = Router()

router.post("/conversation/:id",authMiddlewere , conversationControllers.postConversation)
router.get("/conversation/:id", conversationControllers.getConversation)

module.exports = router