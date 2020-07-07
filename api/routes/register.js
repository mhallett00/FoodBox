var express = require('express');
var router = express.Router();

// /* GET registration route ping */
// router.get('/', function(req, res) {
//   res.send({message: "register route get"})
//   console.log("Registration route");
// });

/* POST registration form. */
router.post('/', function(req, res) {
  console.log("Registration route");
});

module.exports = router;