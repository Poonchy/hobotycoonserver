const db = require('../../data/dbconfig.js');

const findAll = function () {
    return db('users')
}

const Login = function () {
    return db('users').where('username', 'ILIKE', user.username)
    .where({password:user.password})
}

const Signup = function(user){
    return db('users').insert(user)
}

module.exports = {findAll, Login, Signup}