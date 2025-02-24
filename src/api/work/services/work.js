'use strict'

/**
 * work service
 */

const { createCoreService } = require('@strapi/strapi').factories
const { getArrayFromString } = require('../../../util')
const model = 'api::work.work'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch() {
    const experience = await strapi.documents(model).findMany({
      sort: { startYear: 'desc' }
    })

    experience.forEach(job => {
      if (job.technologies) job.technologies = getArrayFromString(job.technologies)
    })
    return experience
  }
}))
