'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', { schema: { tags: ['Example'] } } ,async function (request, reply) {
    return 'this is an example'
  })
}
