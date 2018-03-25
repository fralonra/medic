const mongoose = require('mongoose');

const entry = mongoose.Schema({
  etymology: String,
  pronunciation: String,
  definition: String,
  author: String,
  createAt: Date
});

module.exports = mongoose.model('Entry', entry);
