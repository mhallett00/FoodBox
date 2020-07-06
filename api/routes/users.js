var express = require('express');
var router = express.Router();

// static data
const users = [
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
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.json(users);
  console.log("User data sent");
});

module.exports = router;
