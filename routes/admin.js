var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

module.exports = router;

//router.get('/', admin.validPlace); AFF DES LIEUX
//router.post ('/validate/:id ', admin.validPlaces);  = mettre a jour le lieux de bdd

//visible pour l'utilisateur ADMIN UNIQUEMENT
//attribut valid = TRUE
