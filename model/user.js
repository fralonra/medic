const mongoose = require('mongoose');

const user = mongoose.Schema({
  id: Number,
  name: String,
  nickname: String,
  group: Number,
  lastLogin: Date,
  pwHash: String
});

module.exports = mongoose.model('User', user);
