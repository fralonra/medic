const Entry = require('../models/entry');

const initialQuery = {
 keyword: '',
 entry: []
};

module.exports = {
  query (req, rep) {
    const keyword = req.params.keyword;
    Entry.findOne({ title: { $eq: keyword } }, (err, entry) => {
      if (!entry) {
        Entry.find({ title: keyword }, (err, entry) => {
          return rep.send({
            keyword,
            entry
          });
        })
      } else {
        return rep.send({
          keyword,
          entry
        });
      }
    });
  }
};
