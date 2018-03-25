const fs = require('fs');
const path = require('path');
const fastify = require('fastify')();
const hbs = require('handlebars');
const layouts = require('handlebars-layouts');
const serveStatic = require('serve-static');
const config = require('config');

const router = require('./router/index');

/* TEMPLATE */
/* layouts.register(hbs);
hbs.registerPartial('layout', fs.readFileSync(path.join(__dirname, '/src/view/layout.hbs'), 'utf8'));
hbs.registerHelper('if_eq', function (a, b, opts) {
  if (a === b) return opts.fn(this);
  return opts.inverse(this);
});
hbs.registerHelper('if_not_null', function (a, opts) {
  if (typeof a !== 'undefined' && a) return opts.fn(this);
  return opts.inverse(this);
});

fastify.register(require('point-of-view'), {
  engine: {
    handlebars: hbs
  },
  templates: __dirname + '/src/view'
}); */

/* PLUGIN */
fastify.register(require('fastify-helmet'));
fastify.register(require('fastify-multipart'));
fastify.register(require('fastify-session'), config.get('session'));
fastify.register(require('fastify-cookie'), err => {
  if (err) console.log(err);
});
fastify.register(require('fastify-mongodb'), {
  url: config.get('mongoPath')
});

/* DECORATOR */
fastify.decorate('controller', require('./controller'));

/* STATIC */
fastify.use('/public', serveStatic(path.resolve(__dirname, 'dist')));

/*  ROUTE */
fastify.register(require('./router'));

fastify.listen(config.get('port'), (err) => {
  if (err) console.log(err);
  console.log(`server listening on ${fastify.server.address().port}`);
});
