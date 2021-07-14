
exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.integer('foodrac')
        .defaultTo(0);
        table.integer('scraprac')
        .defaultTo(0);
        table.integer('pop')
        .defaultTo(0);
        table.integer('housing')
        .defaultTo(0);
        table.string('tech')
        .defaultTo("");
        table.integer('food')
        .defaultTo(0)
        .alter();
        table.integer('scrap')
        .defaultTo(0)
        .alter();
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('foodrac')
        table.dropColumn('scraprac')
        table.dropColumn('pop')
        table.dropColumn('housing')
        table.dropColumn('tech')
        table.integer('food')
        table.integer('scrap')
    })
};
