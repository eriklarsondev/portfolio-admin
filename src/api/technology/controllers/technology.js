'use strict'

/**
 * technology controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::technology.technology'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find() {
    return await strapi.service(model).fetch()
  }
}))
