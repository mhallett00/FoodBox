
exports.up = function(knex) {
  return knex.schema.table('carts', function (table) {
    table.dropColumn('seller_id');
  })
};

exports.down = function(knex) {
  return knex.schema.table('carts', function (table) {
    table.integer('seller_id').references('id').inTable('users').notNull().onDelete('cascade');
  })
};
