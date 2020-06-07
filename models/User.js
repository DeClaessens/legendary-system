const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  token: String,
  name: String,
});
 

module.exports = mongoose.model('User', UserSchema);