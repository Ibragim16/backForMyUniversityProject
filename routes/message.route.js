const {Router} = require("express")
const { messageControllers } = require("../controllers/message.controller")
const authMiddlewere = require("../middlewere/auth.middlewere")

const router = Router()

router.post('/message', authMiddlewere, messageControllers.postMessage)
router.get('/message/:id', authMiddlewere, messageControllers.getMessages)

module.exports = router