'use strict'

/**
 * service service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::service.service'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const services = await strapi.documents(model).findMany({
      sort: { name: 'asc' }
    })
    return services
  },

  async fetchOne(id) {
    const service = await strapi.db.query(model).findOne({
      where: { slug: id },
      populate: ['seo']
    })

    if (service) {
      service.relatedServices = await this.getRelatedServices(service.slug)
    }
    return service
  },

  async getRelatedServices(slug) {
    const services = await strapi.documents(model).findMany({
      filters: {
        slug: { $ne: slug }
      },
      sort: { name: 'asc' }
    })
    return services
  }
}))
