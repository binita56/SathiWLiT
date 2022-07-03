const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require("@playwright/test");
const url = 'http://localhost:3000/home';

const homepageElement = 'div.center'
const createNeweventButton = 'a.button1';
const createEventButton = 'button.button1';

Given('a user has navigated to the homepage',async function () {
  await page.goto(url)
  // locate the element in the webUI
  const locator = await page.locator(homepageElement)
  // assert that it's visible
  await expect(locator).toBeVisible()
})

When('the user clicks {string} to generate the event for travelling',async function (string) {
  // click create new event button
  await page.click(createNeweventButton)
})

Then('the user should be redirected to the event form to click {string}',async function (string) {
  // click create a event button
  await page.click(createEventButton)
})