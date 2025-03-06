'use strict'

/**
 * project router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::project.project'

module.exports = createCoreRouter(model, {
  only: ['find', 'findOne']
})
