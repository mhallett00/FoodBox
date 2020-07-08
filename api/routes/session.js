const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

/* POST user session creation. */
router.post('/', function(req, res) {
  if (req.body.email) {
    knex('users')
      .where('email', req.body.email)
      .first()
      .then((user) =>{
        if(user.password_digest === req.body.password_digest) {
          res.json(user);
        }
        else {
          res.status(403).send("Error 403\npassword incorrect! Please try again!");
        }
      })
      .catch((err) =>{
        console.log(err);
      })
  } else {
    res.status(403).send("Error 403\nPlease enter an email! Please try again!");
  }
});

module.exports = router;