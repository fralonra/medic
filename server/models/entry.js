const mongoose = require('mongoose');

const entry = mongoose.Schema({
  title: String,
  language: String,
  etymology: String,
  pronunciation: String,
  definition: String,
  author: String,
  createAt: Date
});

module.exports = mongoose.model('Entry', entry);
