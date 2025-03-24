'use strict'

/**
 * category service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::category.category'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const categories = await strapi.documents(model).findMany({
      sort: { name: 'asc' }
    })
    return categories
  },

  async fetchOne(id) {
    const category = await strapi.db.query(model).findOne({
      where: { slug: id },
      populate: {
        articles: {
          where: {
            publishedAt: { $notNull: true }
          },
          sort: { publishedAt: 'desc' },
          populate: ['categories']
        },
        seo: true
      }
    })
    return category
  }
}))
