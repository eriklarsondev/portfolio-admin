'use strict'

/**
 * menu service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::menu.menu'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetchOne(id) {
    const menu = await strapi.db.query(model).findOne({
      where: { slug: id },
      populate: ['items']
    })
    return menu
  }
}))
