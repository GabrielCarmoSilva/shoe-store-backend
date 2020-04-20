exports.up = function(knex) {
  return knex.schema.createTable('shoe_number', function (table) {
      table.string('id').primary();
      table.integer('number').notNullable();
      table.integer('quant').notNullable();

      table.string('color_id').notNullable();

      table.foreign('color_id').references('id').inTable('shoe_color');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('shoe_number');
};
