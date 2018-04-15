module.exports = (fastify, opts, next) => {
  fastify.get('/:title', fastify.controller.entry.get);
  fastify.post('/', fastify.controller.entry.post);
  fastify.put('/:title', fastify.controller.entry.put);
  fastify.delete('/:title', fastify.controller.entry.delete);

  next();
};
