module.exports = (fastify, opts, next) => {
  fastify.get('/:keyword', fastify.controller.query.query);

  next();
};
