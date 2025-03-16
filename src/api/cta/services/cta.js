'use strict'

/**
 * cta service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::cta.cta'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetchOne(id) {
    const cta = await strapi.db.query(model).findOne({
      where: { slug: id },
      populate: ['image', 'controls']
    })
    return cta
  }
}))
