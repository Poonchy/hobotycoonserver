const db = require('../../data/dbconfig.js');

const findByID = function (user) {
    return db('users').where({id:user.id})
}

const signUpCheck = function(user){
    return db('users').where('username', 'ILIKE', user.username)
}

const Login = function (user) {
    return db('users').where('username', 'ILIKE', user.username)
    .where({password:user.password})
}

const Signup = function(user){
    return db('users').insert(user)
}

const Update = function(user){
    return db('users').update(user).where({id:user.id})
}

module.exports = {findByID, Login, Signup, Update, signUpCheck}