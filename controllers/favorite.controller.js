const Favorite = require("../models/favorite.model");
const { path } = require("../routes");

module.exports.favoriteControllers = {
  createFavorite: async (req, res) => {
    try {
      const favorite = await Favorite.create({
        owner: req.user.id,
      });
      res.json(favorite);
    } catch (err) {
      res.json(err.toString());
    }
  },
  getFavoriteById: async (req, res) => {
    try {
      const favorite = await Favorite.findOne({ owner: req.user.id })
        .populate("questions")
        .populate("owner")
        .populate({path: "questions", populate:{path:"author"}})
      res.json(favorite);
    } catch (err) {
      res.json(err.toString());
    }
  },
  addToFavorite: async (req, res) => {
    const { questionID } = req.params;
    try {
      const userFav = await Favorite.find({ owner: req.user.id });
      const favorite = await Favorite.findByIdAndUpdate(userFav._id, {
        $addToSet: {
          questions: questionID,
        },
      });
      res.json(favorite);
    } catch (err) {
      res.json(err.toString());
    }
  },
  deleteToFavorite: async (req, res) => {
    const { questionID } = req.params;
    try {
      const userFav = await Favorite.find({ owner: req.user.id });
      const favorite = await findByIdAndUpdate(userFav._id, {
        $pull: {
          questions: questionID,
        },
      });
      res.json(favorite);
    } catch (err) {
      res.json(err.toString());
    }
  },
};
