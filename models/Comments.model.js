const mongoose = require("mongoose")

const commentsSchema = mongoose.Schema({
    author: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    text: {
        type: String,
        required: true
    },
    question: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
},
{timestamps: true}
)

const Comment = mongoose.model("Comment", commentsSchema)

module.exports = Comment