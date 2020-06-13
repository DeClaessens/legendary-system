const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
});
 

module.exports = mongoose.model('Room', RoomSchema);