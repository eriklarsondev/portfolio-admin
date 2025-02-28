'use strict'

/**
 * lead controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::lead.lead'

module.exports = createCoreController(model, ({ strapi }) => ({
  async create(ctx) {
    const { body } = ctx.request
    return await strapi.service(model).save(body)
  }
}))
