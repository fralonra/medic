const sendHtml = require('../lib/router').sendHtml;

module.exports = (req, rep) => {
  //rep.send('Hi, Medic!');
  sendHtml(rep, require('path').join(__dirname, '../dist/index.html'));
};
