'use strict'

/**
 * page service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::page.page'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetchOne(id) {
    const page = await strapi.db.query(model).findOne({
      where: { slug: id },
      populate: ['controls', 'seo']
    })
    return page
  }
}))
