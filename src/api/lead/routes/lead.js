'use strict'

/**
 * lead router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::lead.lead'

module.exports = createCoreRouter(model, {
  only: ['create']
})
