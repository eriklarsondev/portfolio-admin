'use strict'

/**
 * price-point router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::price-point.price-point'

module.exports = createCoreRouter(model, {
  only: ['find']
})
