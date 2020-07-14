
exports.up = function(knex) {
  return knex.schema
  .table('orders', function (table) {
    table.integer('seller_id').references('id').inTable('users').notNull().onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema
  .table('orders', function (table) {
    table.dropColumn('seller_id');
  })
};
