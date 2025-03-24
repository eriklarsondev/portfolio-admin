'use strict'

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::project.project'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find(ctx) {
    const { featured, skip } = ctx.query
    return await strapi.service(model).fetch(featured, skip)
  },

  async findOne(ctx) {
    const { id } = ctx.params

    return await strapi.service(model).fetchOne(id)
  }
}))
