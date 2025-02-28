'use strict'

/**
 * testimonial service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::testimonial.testimonial'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const testimonials = await strapi.documents(model).findMany({
      populate: ['image']
    })
    return testimonials
  }
}))
