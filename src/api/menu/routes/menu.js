'use strict'

/**
 * menu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::menu.menu'

module.exports = createCoreRouter(model, {
  only: ['findOne']
})
