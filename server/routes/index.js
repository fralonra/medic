module.exports = (fastify, opts, next) => {
  fastify.get('/', fastify.controller.home);

  fastify.register(require('./api'), { prefix: '/api' });
  fastify.register(require('./auth'), { prefix: '/auth' });
  fastify.register(require('./entry'), { prefix: '/entry' });
  fastify.register(require('./query'), { prefix: '/query' });

  next();
};
