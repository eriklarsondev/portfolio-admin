const { formatQueryParam } = require('../../../../util')

module.exports = {
  beforeCreate(event) {
    const { data } = event.params
    data.slug = formatQueryParam(data.name)
    data.excerpt = setPostExcerpt(data.content)
  },

  beforeUpdate(event) {
    const { data } = event.params
    data.slug = formatQueryParam(data.name)
    data.excerpt = setPostExcerpt(data.content)
  }
}

/**
 * set post excerpt using first 30 words of post content
 *
 * @param {*} text
 * @returns
 */
function setPostExcerpt(text) {
  let excerpt = []

  if (text) {
    // remove html tags
    text = text.replace(/(<([^>]+)>)/gi, '')

    text = text.split(' ')
    for (let i = 0; i < text.length - 1; i++) {
      if (i >= 30) {
        break
      }
      excerpt.push(text[i])
    }
    return excerpt.join(' ') + '...'
  }
  return
}
