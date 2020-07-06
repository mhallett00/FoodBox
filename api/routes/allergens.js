var express = require('express');
var router = express.Router();

// static data
const allergens = [
  {
    name: "Gluten",
    description: "May contain wheat",
    image: "fas fa-bread-slice"
  },
  {
    name: "Dairy",
    description: "May contain milk, cheese",
    image: "fas fa-cheese"
  },
  {
    name: "Seafood",
    description: " May contain fish or shellfish.",
    image: "fas fa-fish"
  }
]

/* GET allergens listing. */
router.get('/', function(req, res, next) {
  
  res.json(allergens);
  console.log("Allergens data sent");
});

module.exports = router;