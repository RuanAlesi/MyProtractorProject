const configCreator = require('../utils/configCreator.js')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless']
    }
  }
})
