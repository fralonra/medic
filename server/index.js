const fs = require('fs');
const path = require('path');

const fastify = require('fastify')();
const serveStatic = require('serve-static');

const config = require('config');

const mongoose = require('mongoose');
mongoose.connect(config.mongoPath, (err) => {
  if (err) fastify.error(err);
  fastify.info('mongoose done');
});

/* PLUGIN */
fastify.register(require('fastify-helmet'));
fastify.register(require('fastify-multipart'));
fastify.register(require('fastify-cookie'));
fastify.register(require('fastify-session'), config.session);
fastify.register(require('fastify-log'));
fastify.register(require('fastify-favicon'));

/* DECORATOR */
fastify.decorate('controller', require('./controllers'));

/* STATIC */
fastify.use('/public', serveStatic(path.resolve(__dirname, '../dist')));

/*  ROUTE */
fastify.register(require('./routes'));

/* ERROR HANDLE */
fastify.setNotFoundHandler((req, rep) => {
  rep.redirect('/');
});
if (config.env !== 'production') {
  fastify.register(require('fastify-error-page'));
}

/* READY */
fastify.ready().then(() => {
  fastify.info('successfully booted!');
}, (err) => {
  fastify.info('an error happened', err);
});

fastify.listen(config.get('port'), (err) => {
  if (err) fastify.error(err);
  fastify.info(`server listening on ${fastify.server.address().port}`);
});
