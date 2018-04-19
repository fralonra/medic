const mongoose = require('mongoose');

const entry = mongoose.Schema({
  title: String,
  lang: String,
  pronunciation: String,
  etymology: String,
  definition: String,
  author: String,
  createAt: Number
});

entry.index({ title: 'text' });

module.exports = mongoose.model('Entry', entry);
