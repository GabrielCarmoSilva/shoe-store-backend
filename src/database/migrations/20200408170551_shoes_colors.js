exports.up = function(knex) {
  return knex.schema.createTable('shoe_color', function (table) {
        table.string('id').primary();
        table.string('color_name').notNullable();
        table.string('model_id').notNullable();

        table.foreign('model_id').references('id').inTable('model');
    
  })    
};

exports.down = function(knex) {
    return knex.schema.dropTable('shoe_color');
};
