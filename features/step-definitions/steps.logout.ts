import {  When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import securePage from '../pageobjects/secure.page';
import loginPage from '../pageobjects/login.page';

When(/^I click to logout button$/, async() => {
	await securePage.logout()
});


Then(/^field username and password are empty$/, async () => {
	const isUsernameEmpty = await loginPage.inputUsername.getValue() === '';
    const isPasswordEmpty = await loginPage.inputPassword.getValue() === '';

    await expect(isUsernameEmpty && isPasswordEmpty).toBe(true)
    ;
});
