const jwt = require("jsonwebtoken")
module.exports = async (req,res,next)=>{
    try{
        const {authorization} = req.headers
        if(!authorization){
            return res.status(201).json("Вы не авторизованы")
        }
        const [type, token] = authorization.split(" ")
        if(type !== "Bearer"){
            return res.status(201).json("Неправильный тип токена")
        }
        req.user = jwt.verify(token, "Fndnufdufnid");
        next()
    }
    catch(err){
        res.status(500).json(err.toString())
    }
}