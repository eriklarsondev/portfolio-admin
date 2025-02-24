'use strict'

/**
 * content-block router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::content-block.content-block'

module.exports = createCoreRouter(model, {
  only: ['findOne']
})
