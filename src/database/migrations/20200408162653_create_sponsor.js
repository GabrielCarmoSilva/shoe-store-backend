exports.up = function(knex) {
    return knex.schema.createTable('sponsor', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.unique('name');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('sponsor');
};
