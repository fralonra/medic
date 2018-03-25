module.exports = (fastify, opts, next) => {
  fastify.post('/login', fastify.controller.auth.login);
  fastify.post('/logout', fastify.controller.auth.logout);
  fastify.post('/signup', fastify.controller.auth.signup);

  next();
};
