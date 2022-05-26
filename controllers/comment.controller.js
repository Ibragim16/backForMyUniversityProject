const Comment = require("../models/Comments.model")

module.exports.commentControllers = {
    addComment: async (req,res)=>{
        const {text} = req.body
        try{
            const result = await Comment.create({
                author: req.user.id,
                text,
                question: req.params.id
            })
            const comment = await Comment.find().populate("author")
            res.json(comment)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    deleteComment: async (req, res)=>{
        try{
            await Comment.findByIdAndDelete(req.params.id)
            res.json("Успешно")
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getComments: async (req, res)=>{
        try{
            const commets = await Comment.find()
            res.json(commets)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getCommentsByQuestionId: async (req, res)=>{
        try{
            const comments = await Comment.find({question: req.params.id}).populate("author").populate("question")
            res.json(comments)
        }
        catch(err){
            res.json(err.toString())
        }
    }
}