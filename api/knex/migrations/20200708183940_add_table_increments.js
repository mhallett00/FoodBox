
exports.up = function(knex) {
  return knex.schema
  .table('cart_items', function (table) {
    table.increments();
  })
  .table('item_allergens', function (table) {
    table.increments();
  })
  .table('seller_orders', function (table) {
    table.increments();
  })

};

exports.down = function(knex) {
  return knex.schema.table('cart_items', function (table) {
    table.dropColumn.increments();
  })
};
