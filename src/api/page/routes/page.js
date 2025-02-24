'use strict'

/**
 * page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::page.page'

module.exports = createCoreRouter(model, {
  only: ['findOne']
})
