const Router = require("express")
const { usersController } = require("../controllers/users.controller")

const router = Router()

router.post("/user/signup", usersController.registerUser)
router.post("/user/signin", usersController.loginUser)

module.exports = router