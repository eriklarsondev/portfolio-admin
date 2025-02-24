'use strict'

/**
 * service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::service.service'

module.exports = createCoreRouter(model, {
  only: ['find', 'findOne']
})
