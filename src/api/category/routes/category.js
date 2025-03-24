'use strict'

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories
const model = 'api::category.category'

module.exports = createCoreRouter(model, {
  only: ['find', 'findOne'],
  config: {
    find: {
      auth: false
    },
    findOne: {
      auth: false
    }
  }
})
