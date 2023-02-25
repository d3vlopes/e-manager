/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const componentGenerator = require('./generators/component')

module.exports = (plop) => {
  componentGenerator(plop)
}
