var express = require('express');
var router = express.Router();

// static data
const menu_items = [
  {
    name: "Poutine",
    description: "Lorem ipsum",
    image: "https://images.unsplash.com/photo-1586805608485-add336722759?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    quantity: 4,
    price_cents: 899,
    is_active: "Y"
  },
  {
    name: "Spaghetti",
    description: "Lorem ipsum",
    image: "https://images.unsplash.com/photo-1548247661-3d7905940716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    quantity: 6,
    price_cents: 1499,
    is_active: "N"
  },
  {
    name: "Petit Poulet",
    description: "Lorem ipsum",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    quantity: 0,
    price_cents: 1699,
    is_active: "N"
  },
  {
    name: "Quiche",
    description: "Lorem ipsum",
    image: "https://images.unsplash.com/photo-1490556278693-b666672547a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    quantity: 2,
    price_cents: 1699,
    is_active: "N"
  },
  {
    name: "Cassoulet",
    description: "Lorem ipsum",
    image: "https://images.unsplash.com/photo-1591386767153-987783380885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    quantity: 3,
    price_cents: 1099,
    is_active: "Y"
  },
  {
    name: "Confit De Canard",
    description: "Lorem ipsum",
    image: "https://images.unsplash.com/photo-1513623954575-263b061498a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    quantity: 4,
    price_cents: 2199,
    is_active: "Y"
  }
]

/* GET menu_items listing. */
router.get('/', function(req, res, next) {
  
  res.json(menu_items);
  console.log("Menu items data sent");
});

module.exports = router;