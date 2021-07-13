require('dotenv').config()
const knex = require('knex');
const env = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig[env]);

function findAll(){
    return db('users')
}

function findBy(user){
    return db('users').where('username', 'ILIKE', user.username)
    .where({password:user.password})
}

module.exports = {findAll, findBy}