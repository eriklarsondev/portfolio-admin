'use strict'

/**
 * service controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::service.service'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find() {
    return await strapi.service(model).fetch()
  },

  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service(model).fetchOne(id)
  }
}))
