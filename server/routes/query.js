module.exports = (fastify, opts, next) => {
  fastify.get('/', fastify.controller.query.query);

  next();
};
