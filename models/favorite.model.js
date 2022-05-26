const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;
