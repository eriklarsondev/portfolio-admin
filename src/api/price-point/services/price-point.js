'use strict'

/**
 * price-point service
 */

const { createCoreService } = require('@strapi/strapi').factories
const { getArrayFromString } = require('../../../util')
const model = 'api::price-point.price-point'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const pricing = await strapi.documents(model).findMany({
      sort: { price: 'asc' }
    })

    pricing.forEach(price => {
      if (price.content) price.content = getArrayFromString(price.content)
    })
    return pricing
  }
}))
