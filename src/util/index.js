/**
 * returns string argument formatted as a URL slug
 *
 * @param {*} text
 * @returns
 */
function formatQueryParam(text) {
  if (text) {
    text = text.replace(/[^\w\s]/gi, '')
    text = text.replace(/\s+/g, '-')

    return text.toLowerCase()
  }
  return
}

/**
 * returns array after parsing string argument
 *
 * @param {*} text
 * @returns
 */
function getArrayFromString(text) {
  if (text) {
    return text.split(',').map(item => item.trim())
  }
  return []
}

module.exports = { formatQueryParam, getArrayFromString }
