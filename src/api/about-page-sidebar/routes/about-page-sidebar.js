'use strict'

/**
 * about-page-sidebar router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::about-page-sidebar.about-page-sidebar'

module.exports = createCoreRouter(model, {
  only: ['find']
})
