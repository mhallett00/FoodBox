const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

/* POST New user creation */
router.post('/', (req, res) => {
  knex('users')
    .insert(req.body)
    .returning('*')
    .first()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end();
    })
});

/* GET all sellers */
router.get('/', (req, res) => {
  knex('users')
    .where('is_seller', true)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end();
    })
})

module.exports = router;
