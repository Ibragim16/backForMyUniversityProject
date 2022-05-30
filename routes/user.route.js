const Router = require("express")
const { usersController } = require("../controllers/users.controller")
const authMiddlewere = require("../middlewere/auth.middlewere")

const router = Router()

router.get("/user", authMiddlewere, usersController.getUser)
router.post("/user/signup", usersController.registerUser)
router.post("/user/signin", usersController.loginUser)

module.exports = router