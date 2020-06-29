var express = require('express');
var router = express.Router();
var userCtrl = require ('../controllers/user');
var user = require ('../models/user');

// a la racine
router.get ('/', function(req, res) {
    res.status(200);
    res.render('signup.ejs', { title: 'userpage'});
});

// = signup
router.get('/register', function(req,res) {
    res.status(200);
    res.render ('signup.ejs', {title: "register page"})
});

// = register
router.post('/signup', userCtrl.signup);
router.post('/loginUser', userCtrl.login),

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
