'use strict'

/**
 * about-page-sidebar service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::about-page-sidebar.about-page-sidebar'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const sidebar = await strapi.db.query(model).findOne({
      populate: ['image', 'topics']
    })
    return sidebar
  }
}))
