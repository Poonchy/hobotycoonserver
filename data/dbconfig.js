require('dotenv').config({path:"../.env"})
const knex = require('knex');
const env = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile.js');
module.exports = knex(knexConfig[env]);