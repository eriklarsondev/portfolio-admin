'use strict'

/**
 * cta controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::cta.cta'

module.exports = createCoreController(model, ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service(model).fetchOne(id)
  }
}))
