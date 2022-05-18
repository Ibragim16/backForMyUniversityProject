const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
    author: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    raiting: [ {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }],
    tags:[
        {
            type: String,
            
        }
    ]
},
{timestamps: true}
)

const Question = mongoose.model("Question", questionSchema)

module.exports = Question