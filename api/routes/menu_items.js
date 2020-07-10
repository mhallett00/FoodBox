const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

/* GET menu_items listing psql */
router.get('/', (req, res) => {
  knex('menu_items')
    .leftJoin('item_allergens','menu_items.id','item_allergens.menu_item_id')
    .leftJoin('allergens', 'allergens.id', 'item_allergens.allergen_id' )
    .select([
      'menu_items.*',
      knex.raw('JSON_AGG(allergens.*) as allergens')
    ])
    .groupBy('menu_items.id')
    .then((menu_items) => {
      res.json(menu_items)
    })
    .catch((err) => {
      console.log(err)
    });

});

/* GET a menu item by ID */
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  knex('menu_items')
    .leftJoin('item_allergens','menu_items.id','item_allergens.menu_item_id')
    .leftJoin('allergens', 'allergens.id', 'item_allergens.allergen_id' )
    .where('menu_items.id', req.params.id)
    .select([
      'menu_items.*',
      knex.raw('JSON_AGG(allergens.*) as allergens')
    ])
    .groupBy('menu_items.id')
    .then((menu_items) => {
      res.json(menu_items)
    })
    .catch((err) => {
      console.log(err)
    });
});

/* GET a menu items by user */
router.get('/users/:user_id', (req, res) => {
  console.log(req.params.user_id)
  knex('menu_items')
    .where('menu_items.user_id', req.params.user_id)
    .then((menu_items) => {
      res.json(menu_items)
    })
    .catch((err) => {
      console.log(err)
    });
});


/* POST add a new menu item */
router.post('/', (req, res) => {
  knex('menu_items')
    .returning('id')
    .insert(req.body)
    .then(() => {
      res.json('Item added!')
    })
    .catch((err) => {
      console.log(err)
    });
});

/* POST edit a menu item */
router.post('/:id', (req, res) => {
  const { 
    id,
    name,
    description,
    image,
    quantity,
    price_cents,
    is_active
  } = req.params;

  knex('menu_items')
    .where('id', id)
    .update(req.body)
    .then(() => {
      res.json('success!');
    })
    .catch((err) =>{
      console.log(err);
    });
  
});

/* DELETE delete a menu item */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  knex('menu_items')
    .where('id', id)
    .del()
    .then(() => {
      res.json('deleted!')
    })
    .catch((err) => {
      console.log(err)
    });
});

module.exports = router;