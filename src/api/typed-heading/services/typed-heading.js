'use strict'

/**
 * typed-heading service
 */

const { createCoreService } = require('@strapi/strapi').factories
const { getArrayFromString } = require('../../../util')
const model = 'api::typed-heading.typed-heading'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetchOne(id) {
    const heading = await strapi.db.query(model).findOne({
      where: { slug: id }
    })

    if (heading && heading.items) {
      heading.items = getArrayFromString(heading.items)
    }
    return heading
  }
}))
