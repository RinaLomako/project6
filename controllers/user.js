var jwt = require ('bcrypt');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = require ('../models/user');

exports.signup = (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        password:hash,
        admin:false
  });

  console.log('newUser')
  user.save(function(err){
      console.log(user);
      if(err) {
        console.log("syntax error")
      } else {
        console.log("registered!");
        res.redirect('/user');
      }
    });
  });
}

exports.login = (req, res, next) => {
  User.findUser({email: req.body.email})
    .then(user => {
      if(!user) {
        return res.status(401), json({ error: "the user doesn't exist"})
      }
      bcrypt.compare(req.body.password, user.password)
      .then(valid => {
        //????
    })
  });
}


//module.exports = {
  //listPlaces: (req, res) {
    //list les lieu: isValid = true
  //}
//}
