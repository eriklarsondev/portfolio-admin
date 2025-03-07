'use strict'

/**
 * strategy service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::strategy.strategy'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const strategies = await strapi.documents(model).findMany({
      sort: { order: 'asc' }
    })
    return strategies
  }
}))
