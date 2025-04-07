'use strict'

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::article.article'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find(ctx) {
    const { limit, featured } = ctx.query
    return await strapi.service(model).fetch(limit, featured)
  },

  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service(model).fetchOne(id)
  }
}))
