'use strict'

/**
 * technology router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::technology.technology'

module.exports = createCoreRouter(model, {
  only: ['find']
})
