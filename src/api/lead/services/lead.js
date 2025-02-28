'use strict'

/**
 * lead service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::lead.lead'

module.exports = createCoreService(model, ({ strapi }) => ({
  async save(fields) {
    const lead = await strapi.documents(model).create({
      data: fields
    })
    return lead
  }
}))
