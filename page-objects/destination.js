const { browser } = require('protractor')
const DestinationsComponent = require('./components/destination')

const HeaderComponent = require('./components/header')
const ramdomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class Destination {
  constructor () {
    this.self = new DestinationsComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/destinations/${ramdomNumberBetweenOneAnd(15)}`)
  }
}

module.exports = Destination
