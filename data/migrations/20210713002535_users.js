exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.string('username')
        .notNull()
        .unique();
        table.string('password')
        .notNull();
        table.integer('food');
        table.integer('scrap');
        table.integer('lastupdated')
        .notNull();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
