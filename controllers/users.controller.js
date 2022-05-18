const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User.model")
module.exports.usersController = {
    registerUser: async (req, res)=>{
        const {firstName, lastName, email, phone, password} = req.body
        try{
            const hash = await bcrypt.hash(password, 10)
            const user = await User.create({
                firstName,
                lastName,
                email,
                phone,
                password: hash
            })
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err.toString())
        }
    },
    loginUser: async (req, res)=>{
        const {email, password} = req.body;
        try{
            const user = await User.findOne({email})
            if(!user){
                res.status(500).json("Неправильный логин или пароль")
            }
            const passwordValid = await bcrypt.compare(password, user.password)
            if(!passwordValid){
                res.status(500).json("Неправильный логин или пароль")
            }

            const payload = {
                id: user._id,
                email: user._email,
                firstname: user._firstname,
                lastname: user._lastname,
                phone: user._phone
            }
            const token = await jwt.sign(payload, "Fndnufdufnid", {
                expiresIn: "30d"
            } ) 
            console.log(token)
            res.status(200).json({token, payload})
        }
        catch(err){
            res.status(501).json(err.toString())
        }
    }
}