exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
  .then(function () {
    // Inserts seed entries
    return knex('menu_items').insert([
      {
        user_id: 2,
        name: "Poutine",
        description: "Lorem ipsum",
        image: "https://images.unsplash.com/photo-1586805608485-add336722759?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        quantity: 4,
        price_cents: 899,
        is_active: "Y"
      },
      {
        user_id: 3,
        name: "Spaghetti",
        description: "Lorem ipsum",
        image: "https://images.unsplash.com/photo-1548247661-3d7905940716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        quantity: 6,
        price_cents: 1499,
        is_active: "N"
      },
      {
        user_id: 2,
        name: "Petit Poulet",
        description: "Lorem ipsum",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        quantity: 0,
        price_cents: 1699,
        is_active: "N"
      },
      {
        user_id: 3,
        name: "Quiche",
        description: "Lorem ipsum",
        image: "https://images.unsplash.com/photo-1490556278693-b666672547a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        quantity: 2,
        price_cents: 1699,
        is_active: "N"
      },
      {
        user_id: 1,
        name: "Cassoulet",
        description: "Lorem ipsum",
        image: "https://images.unsplash.com/photo-1591386767153-987783380885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        quantity: 3,
        price_cents: 1099,
        is_active: "Y"
      },
      {
        user_id: 1,
        name: "Confit De Canard",
        description: "Lorem ipsum",
        image: "https://images.unsplash.com/photo-1513623954575-263b061498a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        quantity: 4,
        price_cents: 2199,
        is_active: "Y"
      }
    ]);
  });
};