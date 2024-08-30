const config = require('@onesimpleone/configs/stylelint')

module.exports = {
  ...config,
  ignoreFiles: ['src/styles/reset.css', 'public/*'],
}
