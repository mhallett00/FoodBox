exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item_allergens').del()
  .then(function () {
    // Inserts seed entries
    return knex('item_allergens').insert([
      {
        menu_item_id: 1,
        allergen_id: 2,
      },
      {
        menu_item_id: 2,
        allergen_id: 1,
      },
      {
        menu_item_id: 2,
        allergen_id: 2,
      },
      {
        menu_item_id: 4,
        allergen_id: 1,
      },
      {
        menu_item_id: 4,
        allergen_id: 2,
      }
    ]);
  });
};