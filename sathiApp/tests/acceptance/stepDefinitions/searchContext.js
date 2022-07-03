const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require("@playwright/test");
const url = 'http://localhost:3000/home';

const homepageElement = 'div.center'
const searchButton = 'button.button-65'
const resultPage = 'div.container'

Given('a user has been through homepage',async function () {
    await page.goto(url)
    // locate the element in the webUI
    const locator = await page.locator(homepageElement)
    // assert that it's visible
    await expect(locator).toBeVisible()
  })

  When('the user clicks {string} button', async function (string) {
    // when search icon is clicked
    await page.click(searchButton)
  })
    

  Then('the user should be redirected to the destination information page',async function () {
    //destination page gets displayed
    const locator = await page.locator(resultPage)
    await expect(locator).toBeVisible()
  })