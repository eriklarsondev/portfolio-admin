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
      populate: ['image', 'categories']
    })
    return articles
  },

  async fetchOne(id) {
    const article = await strapi.db.query(model).findOne({
      where: { slug: id, publishedAt: { $notNull: true } },
      populate: ['image', 'categories', 'seo']
    })

    if (article) {
      article.nav = await this.fetchArticleNav(article.slug)
    }
    return article
  },

  async fetchArticleNav(slug) {
    const nav = []

    const articles = await strapi.documents(model).findMany({
      status: 'published',
      sort: {
        published: 'desc'
      },
      populate: ['image', 'categories']
    })
    const index = articles.findIndex(article => article.slug === slug)

    if (index > 0) {
      nav.push(articles[index - 1])
    } else {
      nav.push(null)
    }
    if (index < articles.length - 1) {
      nav.push(articles[index + 1])
    } else {
      nav.push(null)
    }
    return nav
  }
}))
