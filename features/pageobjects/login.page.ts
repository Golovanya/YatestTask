import { browser, $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors uc      sing getter methods
     */
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get flashAlert () {
        return $('#flash');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get closebtn () {
        return $('.close')
    }

    public async closeBaner () {
        await this.closebtn.click()
    }

    public async fillFields (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        
    }
    public async btnClick () {
        await this.btnSubmit.click()
    }
    public async enterClick () {
        await this.inputPassword.click()
        await browser.keys("Enter")
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
