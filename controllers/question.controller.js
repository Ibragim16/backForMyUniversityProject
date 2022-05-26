const Question = require("../models/Question.model")

module.exports.questionControllers = {
    addQuestion: async (req, res) => {
        const { text, tags,title } = req.body
        try{
            const question = await Question.create({
                author: req.user.id,
                text,
                title,
                tags
            })

            res.status(200).json(question)
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    },
    getQuestion: async (req, res)=>{
        try{
            const questions = await Question.find().populate("author")
            res.json(questions)
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    },
    getOneQuestion: async (req, res)=>{
        try{
            const question = await Question.findById(req.params.id).populate("author")
            res.json(question)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    deleteQuestion: async (req,res) => {
        try{
            await Question.findByIdAndDelete(req.params.id)
            res.status(200).json("excelent")
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    },
    addTags: async (req, res)=>{
        const {tag} = req.body
        try{
            const question = await Question.findByIdAndUpdate(req.params.id,{
                $addToSet:{
                    tags: tag
                }
            })
            res.status(200).json("успешно")
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    },
    deleteTag: async (req, res) =>{
        const {tag} = req.body
        try{
            const question = await Question.findByIdAndUpdate(req.params.id, {
                $pull: {
                    tags: tag
                }
            })
            res.status(200).json(err.toString())
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    },
    uppRaiting: async (req, res) => {
        try{
            await Question.findByIdAndUpdate(req.params.id, {
                $addToSet: {
                    raiting: req.user.id
                }
            })
            res.status(200).json("Успешно")
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    },
    downRaiting: async (req, res)=>{
        try{
            await Question.findByIdAndUpdate(req.params.id, {
                $pull: {raiting: req.user.id}
            })
            res.status(200).json("успешно")
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    }
}