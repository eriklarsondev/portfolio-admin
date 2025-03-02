'use strict'

/**
 * about-page-sidebar controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const model = 'api::about-page-sidebar.about-page-sidebar'

module.exports = createCoreController(model, ({ strapi }) => ({
  async find() {
    return await strapi.service(model).fetch()
  }
}))
