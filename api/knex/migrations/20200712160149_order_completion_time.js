
exports.up = function(knex) {
  return knex.schema
  .table('orders', function (table) {
    table.dropColumn('completed_at');
    table.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex) {
  
};
