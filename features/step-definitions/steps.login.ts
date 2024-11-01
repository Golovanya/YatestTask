import { Given, When, Then } from '@wdio/cucumber-framework';
import {  expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
};

Given(/^User is on the (.+) page$/, async (page) => {
    await pages[page].open();
});


When(/^I fill form with valid (.+) and (.+)$/, async (username, password) => {
    await LoginPage.fillFields(username, password);
});


When(/^I click enter$/, async () => {
    await LoginPage.enterClick()
});


When(/^I click submit button$/, async () => {
	await LoginPage.btnClick()
});


Then(/^I should see a flash message saying (.+)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});


Then(/^inputs and submit button is visible$/, async () => {
	await expect (LoginPage.btnSubmit).toBeDisplayed();
    await expect (LoginPage.inputUsername).toBeDisplayed();
    await expect (LoginPage.inputPassword).toBeDisplayed();

});


When(/^I click  close banner$/, async () => {
	await LoginPage.closeBaner()
});

Then(/^banner is not visible$/, async () => {
	await expect(LoginPage.flashAlert).not.toBeDisplayed();
});
