exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.string('username')
        .notNull()
        .unique();
        table.string('password')
        .notNull();
        table.integer('food')
        .defaultTo(0);
        table.integer('scrap')
        .defaultTo(0);
        table.integer('lastupdated')
        .notNull();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
