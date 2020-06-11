const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
});
 

module.exports = mongoose.model('User', UserSchema);