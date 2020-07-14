
exports.up = function(knex) {
  return knex.schema
  .table('orders', function (table) {
    table.integer('total');
  })
};

exports.down = function(knex) {
  return knex.schema
  .table('orders', function (table) {
    table.dropColumn('total');
  })
};
