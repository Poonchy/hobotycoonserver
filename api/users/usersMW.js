const Model = require('./usersModel.js')

const verifyLogin = (req, res, next) => {
    if (!req.body.username || !req.body.password){
        return res.status(400).json("Username missing.")
    }
    else if (!req.body.password) {
        return res.status(400).json("Password missing.")
    }
    else {
        next()
    }
};

const verifySignup = async (req, res, next) =>{
    if (!req.body.username || !req.body.password){
        return res.status(400).json("Username missing.")
    }
    else if (!req.body.password) {
        return res.status(400).json("Password missing.")
    }
    user = await Model.signUpCheck(req.body)
    if (user.length > 0){
        return res.status(403).json("Username taken.")
    }
    else {
        next()
    }
}

const verifyUpdate = async (req, res, next) => {
    if (!req.body.id){
        return res.status(400).json("Missing id.")
    }
    if (req.body.id == 0){
        return res.status(304).json("Uneventful")
    }
    user = await Model.findByID(req.body)
    if (!user.length > 0){
        return res.status(403).json("Account does not exist.")
    }
    if (req.body.tech){
        if (! Array.isArray(req.body.tech)){
            return res.status(403).json("Tech must be a list.")
        }
        req.body.tech = req.body.tech.join("-")
    }
    next()
}

module.exports = {verifyLogin, verifySignup, verifyUpdate}