const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

/* GET order by user id */
router.get('/users/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  knex('orders')
    .join('cart_items', 'cart_items.cart_id', 'orders.cart_id')
    .join('menu_items', 'menu_items.id', 'cart_items.menu_item_id')
    .where('buyer_id', id)
    .select([
      'orders.*',
      knex.raw('JSON_AGG(menu_items.*) as menu_items')
    ])
    .groupBy('orders.id')
    .then((order) => {
      res.json(order);
    })
    .catch((err) =>{
      console.log(err);
    });
});

/* POST create an order */
router.post('/', (req, res) => {
  console.log("req.body", req.body);
  knex('orders')
  .insert(req.body)
  .returning('*')
  .then((order) => {
    console.log("order placed!")
    res.json(order)
  })
  .catch((err) =>{
    console.log(err);
  });
  

});

module.exports = router;