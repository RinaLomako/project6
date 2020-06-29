var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

//User Schema
const userSchema = mongoose.Schema({
      firstname: {type: String, unique: true},
      lastname: {type: String, unique: true},
      email: {type: String, unique: true},
      password: {type: String, unique: true},
      admin: {type: Boolean},
});

exports.addUser = function (request, response){
    response.send("Add User");
};

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
