const { formatQueryParam } = require('../../../../util')

module.exports = {
  beforeCreate(event) {
    const { data } = event.params
    data.slug = formatQueryParam(data.name)
  },

  beforeUpdate(event) {
    const { data } = event.params
    data.slug = formatQueryParam(data.name)
  }
}
