'use strict'

/**
 * strategy controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::strategy.strategy'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find() {
    return await strapi.service(model).fetch()
  }
}))
