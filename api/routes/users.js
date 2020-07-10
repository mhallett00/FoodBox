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
    })
});

module.exports = router;
