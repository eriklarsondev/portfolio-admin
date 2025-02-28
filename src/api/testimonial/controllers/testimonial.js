'use strict'

/**
 * testimonial controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::testimonial.testimonial'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find() {
    return await strapi.service(model).fetch()
  }
}))
