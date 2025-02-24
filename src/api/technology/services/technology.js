'use strict'

/**
 * technology service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::technology.technology'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const tech = await strapi.documents(model).findMany({
      sort: { name: 'asc' }
    })
    return tech
  }
}))
