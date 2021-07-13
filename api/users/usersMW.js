const verifyLogin = (req, res, next) => {
    if (!req.body.username || !req.body.password){
        res.status(400).json({message:"Username or password missing"})
    }
    else{
        next()
    }
};

module.exports = {verifyLogin}