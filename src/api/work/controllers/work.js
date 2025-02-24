'use strict'

/**
 * work controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::work.work'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find() {
    return await strapi.service(model).fetch()
  }
}))
