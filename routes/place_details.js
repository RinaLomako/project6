var express = require('express');
var router = express.Router();

// info lieux
router.get('/', function(req, res, next) {
  res.render('place_details', { title: 'Read about the place' });
});
// route post = ajouter un comm
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
