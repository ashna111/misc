'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['Healthcheck'],
      description: 'Healthcheck endpoint to determine if the service is running',
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string', description: 'Status' },
            timestamp: { type: 'string', description: 'Timestamp' }
          },
        }
      }
    } ,
    handler: (request, response) => {
      return { status: 'OK', timestamp: new Date().toISOString() }
    }
  })
}
