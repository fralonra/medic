module.exports = (fastify, opts, next) => {
  fastify.get('/', fastify.controller.home);
  fastify.register(require('./auth', { prefix: '/auth' }));
  fastify.register(require('./api', { prefix: '/api' }));

  next();
};
