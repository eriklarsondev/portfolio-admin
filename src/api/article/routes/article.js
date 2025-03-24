'use strict'

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::article.article'

module.exports = createCoreRouter(model, {
  only: ['find', 'findOne']
})
