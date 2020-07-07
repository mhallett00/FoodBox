var express = require('express');
var router = express.Router();


// /* GET session route ping */
// router.get('/', function(req, res) {
//   res.send({message: "Session route get"})
//   console.log("Session route");
// });

/* POST session form listing. */
router.post('/', function(req, res) {
  console.log("Session route");
  
});

module.exports = router;