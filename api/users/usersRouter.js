const express = require('express');
const router = express.Router();
const Users = require('./usersModel.js')
const MW = require('./usersMW.js')

router.get('/', MW.verifyLogin, function (req, res) {
    user = req.body
    Users.Login(user)
        .then((profiles) => {
            if (profiles.length < 1) {
                return res.status(403).json({message:"Username or password incorrect"})
            }
            profile = profiles[0]
            x = profile.tech.split("-")
            tech = []
            for (i of x){
                tech.push(parseInt(i))
            }
            profile.tech = tech
            res.status(200).json(profile);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err.message);
        });
});

router.post('/', MW.verifyLogin, function (req, res) {
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    user = req.body
    user.lastupdated = secondsSinceEpoch
    Users.Signup(user)
        .then((profiles) => {
            res.status(201).json("Success!")
        })
        .catch((err) => {
            console.log(err);
            if (err.message.includes("unique")){
                return res.status(400).json("Username taken");
            }
            res.status(500).json(err.message);
        });
});

router.put("/", function(req, res) {
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    user = req.body
    user.lastupdated = secondsSinceEpoch
    Users.Update(user)
    .then((data)=>{
        res.status(200).json("Updated succesfully")
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

module.exports = router