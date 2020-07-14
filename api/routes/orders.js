const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

/* GET order by user id */
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  knex('orders')
    .join('cart_items', 'cart_items.cart_id', 'orders.cart_id')
    .join('menu_items', 'menu_items.id', 'cart_items.menu_item_id')
    .join('users', 'users.id', 'orders.seller_id')
    .where('buyer_id', id)
    .select([
      'orders.*',
      knex.raw('JSON_AGG(menu_items.*) as menu_items'),
      knex.raw('JSON_AGG(users.*) as userInfo'),
      knex.raw('JSON_AGG(cart_items.*) as cartItemInfo')
    ])
    .groupBy('orders.id')
    .then((order) => {
      res.json(order);
    })
    .catch((err) =>{
      console.log(err);
      res.status(500).end();
    });
});


/* GET active seller order items */
router.get('/users/sellers/:id', (req, res) => {

  const { id } = req.params;
  knex('orders')
    .join('cart_items', 'cart_items.cart_id', 'orders.cart_id')
    .join('menu_items', 'menu_items.id', 'cart_items.menu_item_id')
    .join('users', 'users.id', 'orders.buyer_id')
    .where('completed', false)
    .andWhere('seller_id', id)
    .select([
      'orders.*',
      knex.raw('JSON_AGG(menu_items.*) as menu_items'), knex.raw('JSON_AGG(users.*) as userInfo'),
      knex.raw('JSON_AGG(cart_items.*) as cartItemInfo')
    ])
    .groupBy('orders.id')
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) =>{
      console.log(err);
      res.status(500).end();
    });

})

/* POST create an order */
router.post('/', (req, res) => {
  knex('orders')
  .insert(req.body)
  .returning('*')
  .then((order) => {
    console.log("order placed!")
    res.json(order)
  })
  .catch((err) =>{
    console.log(err);
    res.status(500).end();
  });
  

});

/*POST confirm order */
router.post('/:order_id', (req, res) => {
  const { order_id } = req.params;

  knex('orders')
  .update('completed', true)
  .where('id', order_id)
  .then(() => {
    console.log("order completed!")
    res.status(200).end()
  })
  .catch((err) =>{
    console.log(err);
    res.status(500).end();
  });
})

module.exports = router;