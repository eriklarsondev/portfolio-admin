'use strict'

/**
 * cta router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::cta.cta'

module.exports = createCoreRouter(model, {
  only: ['findOne']
})
