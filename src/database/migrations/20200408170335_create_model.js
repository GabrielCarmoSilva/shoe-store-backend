exports.up = function(knex) {
    return knex.schema.createTable('model', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('sponsor_id').notNullable();

        table.foreign('sponsor_id').references('id').inTable('sponsor');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('model');
};
