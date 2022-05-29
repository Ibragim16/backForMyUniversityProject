const {Router} = require("express")
const { commentControllers } = require("../controllers/comment.controller")
const authMiddlewere = require("../middlewere/auth.middlewere")

const router = Router()

router.get("/comments", commentControllers.getComments)
router.get("/comments/:id", commentControllers.getCommentsByQuestionId)

router.post("/comments/:id", authMiddlewere, commentControllers.addComment)
router.delete("/comments/:id", authMiddlewere, commentControllers.deleteComment)

module.exports = router