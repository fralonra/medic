const mongoose = require('mongoose');

const language = mongoose.Schema({
  name: String,
  abbr: String
});

module.exports = mongoose.model('Lang', language);
