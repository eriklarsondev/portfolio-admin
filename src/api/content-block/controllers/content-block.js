'use strict'

/**
 * content-block controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::content-block.content-block'

module.exports = createCoreController(model, ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service(model).fetchOne(id)
  }
}))
