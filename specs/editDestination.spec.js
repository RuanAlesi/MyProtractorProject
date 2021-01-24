const faker = require('faker')
const { browser } = require('protractor')
const helper = require('protractor-helper')

const Destination = require('../page-objects/destination')
const EditDestination = require('../page-objects/editDestination')

describe('Given I\'m at a random edit destination page', () => {
  let editDestination

  beforeEach(() => {
    editDestination = new EditDestination()
    editDestination.visit()
  })

  it('Then I see an image, and a form to edit the name and description', () => {
    helper.waitForElementVisibility(editDestination.self.image)
    helper.waitForElementVisibility(editDestination.form.nameLabel)
    helper.waitForElementVisibility(editDestination.form.nameInput)
    helper.waitForElementVisibility(editDestination.form.descriptionLabel)
    helper.waitForElementVisibility(editDestination.form.descriptionInput)
  })

  describe('When I submit the form with less then the minimun required characters', () => {
    beforeEach(() => {
      editDestination
        .form
        .submitFormAfterClearingAndFillingItWith('Ab', '123456789')
    })

    it('Then both input fields are wrapped in a .field_with_errors div', () => {
      helper.waitForElementVisibility(editDestination.form.nameInputWithError)
      helper.waitForElementVisibility(editDestination.form.descriptionInputWithError)
    })
  })

  describe('When successfully for the form with a new name and description', () => {
    let destinationUrl
    const randomUuid = faker.random.uuid()
    const fiveRandomWords = faker.random.words(5)

    beforeEach(() => {
      browser.getCurrentUrl().then(url => {
        destinationUrl = url.replace('/edit', '')
      })

      editDestination
        .form
        .submitFormAfterClearingAndFillingItWith(randomUuid, fiveRandomWords)
    })

    it('Then I\'m redirected to the destination view page, and I see the updated page', () => {
      const destination = new Destination()
      helper.waitForUrlToBeEqualToExpectedUrl(destinationUrl)
      helper.waitForTextToBePresentInElement(
        destination.self.heading,
        randomUuid
      )
      helper.waitForTextToBePresentInElement(
        destination.self.paragraph,
        fiveRandomWords
      )
    })
  })
})
