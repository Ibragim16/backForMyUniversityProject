const {Router} = require("express")
const { favoriteControllers } = require("../controllers/favorite.controller")
const authMiddlewere = require("../middlewere/auth.middlewere")

const router = Router()

router.get("/favorite", authMiddlewere, favoriteControllers.getFavoriteById)
router.post("/favorite", authMiddlewere, favoriteControllers.createFavorite)
router.patch("/favorite/add/:id", authMiddlewere, favoriteControllers.addToFavorite)
router.patch("/favorite/delete/:id", authMiddlewere, favoriteControllers.deleteToFavorite)

module.exports = router