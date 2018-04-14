const Entry = require('../models/entry');

module.exports = {
  query (req, rep) {
    const { keyword } = req.body;
    Entry.findOne({ title: { $eq: keyword } }, (err, entry) => {
      if (!entry) {
        Entry.find({ title: keyword }, (err, entry) => {
          return rep.send({ entry })
        })
      } else {
        return rep.send({ entry });
      }
    });
  }
};
