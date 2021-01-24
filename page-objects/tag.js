const { browser } = require('protractor')
const DestinationsComponent = require('./components/destinations')
const HeaderComponent = require('./components/header')
const ramdomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class Tag {
  constructor () {
    this.destinations = new DestinationsComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/tags/${ramdomNumberBetweenOneAnd(5)}`)
  }
}

module.exports = Tag
