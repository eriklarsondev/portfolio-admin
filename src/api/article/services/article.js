'use strict'

/**
 * article service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::article.article'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch(limit) {
    const articles = await strapi.documents(model).findMany({
      status: 'published',
      sort: {
        published: 'desc'
      },
      limit: limit ? limit : 2,
      populate: ['categories']
    })
    return articles
  },

  async fetchOne(id) {
    const article = await strapi.db.query(model).findOne({
      where: { slug: id, publishedAt: { $notNull: true } },
      populate: ['categories', 'seo']
    })
    return article
  }
}))
