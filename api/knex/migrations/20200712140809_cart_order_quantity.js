
exports.up = function(knex) {
  return knex.schema
  .table('cart_items', function (table) {
    table.integer('order_quantity');
  })
};

exports.down = function(knex) {
  return knex.schema
  .table('carts', function (table) {
    table.dropColumn('order_quantity');
  })
};
