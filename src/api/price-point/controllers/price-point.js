'use strict'

/**
 * price-point controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::price-point.price-point'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find() {
    return await strapi.service(model).fetch()
  }
}))
