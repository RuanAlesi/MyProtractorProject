const DestinationComponent = require('./components/destination')
const FormComponent = require('./components/form')

const HeaderComponent = require('./components/header')
const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')
const { browser } = require('protractor')

class EditDestionation {
    constructor() {
        this.self = new DestinationComponent()
        this.form = new FormComponent()
        this.header = new HeaderComponent()
    }

    visit() {
        browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}/edit`)
    }
}

module.exports = EditDestionation