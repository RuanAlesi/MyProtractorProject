const { browser } = require('protractor')
const TagsComponents = require('./components/tags')
const HeaderComponent = require('./components/header')

class Home {
  constructor () {
    this.tags = new TagsComponents()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get('/')
  }
}

module.exports = Home
