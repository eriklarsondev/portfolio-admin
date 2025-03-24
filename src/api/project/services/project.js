'use strict'

/**
 * project service
 */

const { createCoreService } = require('@strapi/strapi').factories
const { getArrayFromString } = require('../../../util')
const model = 'api::project.project'

module.exports = createCoreService(model, ({ strapi }) => ({
  async fetch(featured, skip) {
    const projects = await strapi.documents(model).findMany({
      filters: {
        featured: featured,
        slug: { $ne: skip }
      },
      sort: { name: 'asc' },
      populate: ['image']
    })

    projects.forEach(project => {
      if (project.technologies) project.technologies = getArrayFromString(project.technologies)
    })
    return projects
  },

  async fetchOne(id) {
    const project = await strapi.db.query(model).findOne({
      where: { slug: id },
      populate: ['image', 'screenshots', 'seo']
    })

    if (project.technologies) {
      project.technologies = getArrayFromString(project.technologies)
    }
    return project
  }
}))
