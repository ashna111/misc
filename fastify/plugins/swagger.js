'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/openapi',
    swagger: {
        info: {
        title: 'Notes API',
        description: 'CRUD Notes',
        version: '0.1.0'
        },
        externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    exposeRoute: true
    })
})