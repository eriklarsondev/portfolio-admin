function formatQueryParam(text) {
  if (text) {
    text = text.replace(/[^\w\s]/gi, '')
    text = text.replace(/\s+/g, '-')

    return text.toLowerCase()
  }
  return
}

function getArrayFromString(text) {
  if (text) {
    return text.split(',').map(item => item.trim())
  }
  return []
}

module.exports = { formatQueryParam, getArrayFromString }
