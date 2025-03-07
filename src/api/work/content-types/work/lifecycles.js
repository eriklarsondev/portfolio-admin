module.exports = {
  beforeCreate(event) {
    const { data } = event.params
    data.duration = setJobDuration(data.startYear, data.endYear)
  },

  beforeUpdate(event) {
    const { data } = event.params
    data.duration = setJobDuration(data.startYear, data.endYear)
  }
}

/**
 * sets job duration by subtracting start year from end year
 *
 * @param {*} startYear
 * @param {*} endYear
 * @returns
 */
function setJobDuration(startYear, endYear) {
  const end = endYear ? endYear : new Date().getFullYear()

  let duration = end - startYear
  if (duration < 1) {
    duration = 1
  }
  return duration !== 1 ? (duration += ' years') : (duration += ' year')
}
