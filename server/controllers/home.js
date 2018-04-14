const path = require('path');

const root = require('../config').root;

const sendHtml = require('../lib/router').sendHtml;

module.exports = (req, rep) => {
  sendHtml(rep, require('path').join(root, 'dist/index.html'));
};
