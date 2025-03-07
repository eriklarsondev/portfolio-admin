'use strict'

/**
 * strategy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::strategy.strategy'

module.exports = createCoreRouter(model, {
  only: ['find']
})
