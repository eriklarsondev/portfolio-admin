'use strict'

/**
 * testimonial router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::testimonial.testimonial'

module.exports = createCoreRouter(model, {
  only: ['find']
})
