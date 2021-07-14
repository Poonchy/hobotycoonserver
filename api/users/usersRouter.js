const express = require('express');
const router = express.Router();
const Users = require('./usersModel.js')
const MW = require('./usersMW.js')

router.get('/', MW.verifyLogin, function (req, res) {
    user = req.body
    Users.Login(user)
        .then((profiles) => {
            if (profiles.length < 1) {
                res.status(400).json({message:"Username or password incorrect"})
            }
            else{
                res.status(200).json(profiles);
            }
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
            res.status(201).json(profiles)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err.message);
        });
});

router.put("/", function(req, res) {
    Users.Update(req.body)
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).json(data)
    })
})

module.exports = router