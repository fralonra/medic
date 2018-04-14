const Entry = require('../models/entry');
const resTypes = require('./resTypes').entry;
const sendError = require('../lib/controller').sendError;

module.exports = {
  get (req, rep) {
    const title = req.params;
    Entry.findOne({ title: { $eq: title } }, (err, entry) => {
      return rep.send({ entry });
    });
  },

  post (req, rep) {
    const entry = req.body;
    Entry.create(entry)
    .then((result) => {
      return login(req, rep, result);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  put (req, rep) {
  },

  delete (req, rep) {
  }
};
