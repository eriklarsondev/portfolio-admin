'use strict'

/**
 * content-block service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::content-block.content-block'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetchOne(id) {
    const content = await strapi.db.query(model).findOne({
      where: { slug: id }
    })
    return content
  }
}))
