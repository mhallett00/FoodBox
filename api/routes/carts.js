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

/* GET shopping cart info details*/
router.get('/:id', (req, res, next) => {
  console.log(req.params);
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

/* POST add item to cart */
router.post('/:id/items', (req, res) => {
  knex('cart_items')
    .insert({
      cart_id: req.params.id,
      menu_item_id: req.body.id
    })
    .returning('*')
    .then((cart_item) => {
      console.log("item added");
        res.json(cart_item[0]);
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