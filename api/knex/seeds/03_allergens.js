exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('allergens').del()
  .then(function () {
    // Inserts seed entries
    return knex('allergens').insert([
      {
        name: "Gluten",
        description: "May contain wheat",
        image: "fas fa-bread-slice"
      },
      {
        name: "Dairy",
        description: "May contain milk, cheese",
        image: "fas fa-cheese"
      },
      {
        name: "Seafood",
        description: " May contain fish or shellfish.",
        image: "fas fa-fish"
      }
    ]);
  });
};