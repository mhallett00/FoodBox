
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: "Francis",
          last_name: "Bourgouin",
          email: "fbourgouin@fakemail.com",
          password_digest: "example",
          is_seller: false,
          seller_postcode: ""
        },
        {
          first_name: "Dana",
          last_name: "Lafleur",
          email: "dlafleur@fakemail.com",
          password_digest: "example",
          is_seller: true,
          seller_postcode: "H2T 2L1"
        },
        {
          first_name: "Albert",
          last_name: "Jacques",
          email: "ajacques@fakemail.com",
          password_digest: "example",
          is_seller: true,
          seller_postcode: "H2J 1E5"
        },
        {
          first_name: "Avril",
          last_name: "Devereux",
          email: "adevereux@fakemail.com",
          password_digest: "example",
          is_seller: true,
          seller_postcode: "H2A 3M4"
        }
      ]);
    });
};
