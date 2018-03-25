const fs = require('fs');

module.exports = {
  sendHtml: (rep, file) => {
    rep.type('text/html').send(fs.readFileSync(file));
  }
};
