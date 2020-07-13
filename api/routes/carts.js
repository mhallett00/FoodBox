const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

/* POST Create new shopping cart */
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const {
    street_address,
    apartment,
    city,
    postal_code,
    country
  } = req.body;
  knex('carts')
    .insert({
      buyer_id: id,
      street_address,
      apartment,
      city,
      postal_code,
      country
    })
    .returning('id')
    .then((cart_id) => {
      res.json(cart_id[0])
    })
    .catch((err) => {
      console.log(err);
    });
});

/* GET shopping cart info details*/
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  knex('carts')
  .first()
    .where('id', id)
    .then((cart) => {
        res.json(cart);
    })
    .catch((err) =>{
      console.log(err);
    });
});

/* POST add items to cart */
router.post('/:id/items', (req, res) => {

  const cartItemEntries = req.body.map((cartItem) => {
    return({
      cart_id: req.params.id,
      menu_item_id: cartItem.id,
      order_quantity: cartItem.order_quantity
    })
  })
  knex('cart_items')
    .insert(cartItemEntries)
    .returning('*')
    .then(() => {
        res.json(req.params.id);
    })
    .catch((err) =>{
      console.log(err);
    });

});

/* GET shopping cart contents by cart id */
router.get('/:id/items', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  knex('cart_items')
    .select('cart_items.*', 'menu_items.name', 'menu_items.description', 'menu_items.image', 'menu_items.price_cents', 'menu_items.is_active') 
    .join('menu_items', 'menu_items.id', 'cart_items.menu_item_id')
    .where('cart_id', id)
    .then((cartContents) => {
        res.json(cartContents)
    })
    .catch((err) =>{
      console.log(err);
    });
});


/* DELETE cart items */
router.delete('/:id/items/:item_id', (req, res) => {
  knex('cart_items')
  .where('id', req.params.item_id)
  .first()
  .del()
    .then(() => {
        res.json("item deleted!");
    })
    .catch((err) =>{
      console.log(err);
    });
});

module.exports = router;