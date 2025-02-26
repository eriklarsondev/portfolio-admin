'use strict'

/**
 * typed-heading router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::typed-heading.typed-heading'

module.exports = createCoreRouter(model, {
  only: ['findOne']
})
