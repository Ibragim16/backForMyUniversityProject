const {Router} = require("express")
const { questionControllers } = require("../controllers/question.controller")
const authMiddlewere = require("../middlewere/auth.middlewere")

const router = Router()

router.post("/question", authMiddlewere, questionControllers.addQuestion )
router.delete("/question/:id", authMiddlewere, questionControllers.deleteQuestion)
router.patch("/question/addTag/:id", authMiddlewere, questionControllers.addTags)
router.patch("/question/deleteTag/:id", authMiddlewere, questionControllers.deleteTag)
router.patch("/question/uppRaiting/:id", authMiddlewere, questionControllers.uppRaiting)
router.patch("/question/downRaiting/:id", authMiddlewere, questionControllers.downRaiting)


module.exports = router