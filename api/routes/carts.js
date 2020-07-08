const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

/* POST Create new shopping cart */
router.post('/:id', (req, res) => {
  console.log(req.params)
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
    .then(() => {
      res.json("Cart created, go shopping!")
    })
    .catch((err) => {
      console.log(err);
    });
});

/* GET shopping cart contents by user id */
router.get('/:id', (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  knex('carts')
  .first()
    .where('buyer_id', id)
    .then((cart) => {
      if (!cart) {
        next();
      } else {
        res.json(cart);
      }

    })
    .catch((err) =>{
      console.log(err);
    });
});

/* GET shopping cart contents by cart id */
router.get('/:id/items', (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  knex('cart_items', 'menu_items')
  .join('menu_items', 'menu_items.id', 'cart_items.menu_item_id')
    .where('cart_id', id)
    .then((cart) => {
        res.json(cart);
    })
    .catch((err) =>{
      console.log(err);
    });
});

/* POST add item to cart */
router.post('/:id/items', (req, res) => {
  knex('cart_items')
  .insert({
    cart_id: req.params.id,
    menu_item_id: req.body.id
  })
    .then(() => {
        res.json("item added!");
    })
    .catch((err) =>{
      console.log(err);
    });

});

/* PUT edit cart items */
// router.put('/:id/carts/:cart_id', (req, res) => {

// });

/* DELETE cart items */
router.delete('/:id/items/:item_id', (req, res) => {
  knex('cart_items')
  .where('menu_item_id', req.params.item_id)
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