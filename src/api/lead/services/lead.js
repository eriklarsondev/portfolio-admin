'use strict'

/**
 * lead service
 */

const { createCoreService } = require('@strapi/strapi').factories
const model = 'api::lead.lead'

module.exports = createCoreService(model, ({ strapi }) => ({
  async saveLead(data) {
    const lead = await strapi.documents(model).create({
      data: data
    })
    await this.sendEmail(data)

    return lead
  },

  async sendEmail(data) {
    const config = {
      to: 'eriklarsonco@gmail.com',
      subject: `You have a new message from ${data.fullName}`,
      html: this.getEmailTemplate(data)
    }
    await strapi.plugin('email').service('email').send(config)
  },

  getEmailTemplate(fields) {
    let template = '<table>'
    for (const [key, value] of Object.entries(fields)) {
      template += `
      <tr>
        <td style="padding: 5px">${key}</td>
        <td style="padding: 5px">${value}</td>
      </tr>
      `
    }
    template += '</table>'

    return template
  }
}))
