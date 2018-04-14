module.exports = (fastify, opts, next) => {
  fastify.get('/:id', fastify.controller.entry.get);
  fastify.post('/:id', fastify.controller.entry.post);
  fastify.put('/:id', fastify.controller.entry.put);
  fastify.delete('/:id', fastify.controller.entry.delete);

  next();
};
