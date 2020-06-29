var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('newplace', { title: 'New place' });
});

var place = require('../models/place');

//rout get - affiche le formulaire
// post = nouveau lieu dans bdd
module.exports = router;
