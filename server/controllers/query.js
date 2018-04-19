const Entry = require('../models/entry');

const initialQuery = {
  keyword: '',
  entry: []
};

module.exports = {
  query (req, rep) {
    const keyword = req.params.keyword;
    Entry.find({ title: { $eq: keyword } }, (err, entry) => {
      if (entry.length === 0) {
        //Entry.find({ title: /a/i }, (err, entry) => {
        Entry.find({ $text: { $search: keyword } }, (err, entry) => {
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
