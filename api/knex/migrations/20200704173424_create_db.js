
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function(table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('password_digest').notNullable();
    table.boolean('is_seller').notNullable();
    table.string('seller_postcode');
  })
  .createTable('menu_items', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users').notNull().onDelete('cascade');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('image').notNullable();
    table.integer('quantity').notNullable();
    table.integer('price_cents').notNullable();
    table.boolean('is_active').notNullable().defaultTo(false);
  })
  .createTable('allergens', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('image').notNullable();
  })
  .createTable('item_allergens', function(table) {
    table.integer('menu_item_id').references('id').inTable('menu_items').notNull().onDelete('cascade');
    table.integer('allergen_id').references('id').inTable('allergens').notNull().onDelete('cascade');
  })
  .createTable('carts', function(table) {
    table.increments();
    table.integer('buyer_id').references('id').inTable('users').notNull().onDelete('cascade');
    table.integer('seller_id').references('id').inTable('users').notNull().onDelete('cascade');
    table.string('street_address').notNullable();
    table.string('apartment').notNullable();
    table.string('city').notNullable();
    table.string('postal_code').notNullable();
    table.string('country').notNullable();
  })
  .createTable('cart_items', function(table) {
    table.integer('cart_id').references('id').inTable('carts').notNull().onDelete('cascade');
    table.integer('menu_item_id').references('id').inTable('menu_items').notNull().onDelete('cascade');
  })
  .createTable('orders', function(table) {
    table.increments();
    table.integer('buyer_id').references('id').inTable('users').notNull().onDelete('cascade');
    table.integer('cart_id').references('id').inTable('carts').notNull().onDelete('cascade');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('completed_at').defaultTo(knex.fn.now());
  })
  .createTable('seller_orders', function(table) {
    table.integer('order_id').references('id').inTable('orders').notNull().onDelete('cascade');
    table.integer('seller_id').references('id').inTable('users').notNull().onDelete('cascade');
  })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('seller_orders')
    .dropTable('orders')
    .dropTable('cart_items')
    .dropTable('carts')
    .dropTable('item_allergens')
    .dropTable('allergens')
    .dropTable('menu_items')
    .dropTable('users')

};
