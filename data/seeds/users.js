var crypto = require('crypto');
var hash = crypto.createHash('sha256');
const secondsSinceEpoch = Math.round(Date.now() / 1000)
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: 'Temi', password: crypto.createHash('sha256').update("1234").digest('base64'), lastupdated:secondsSinceEpoch},
      ]);
    });
};
