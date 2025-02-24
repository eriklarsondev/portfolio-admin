'use strict'

/**
 * work router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::work.work'

module.exports = createCoreRouter(model, {
  only: ['find']
})
