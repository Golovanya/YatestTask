import { browser, $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    // Получаем элементы на странице
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
        return $('a.close')
    }

    // методы  для тестов

    public async closeBaner () {
    // прячу баннер форка на гитхаб, он мешает кликнуть по баннеру
        await browser.execute(() => {
            const overlayImage = document.querySelector('img[src="/img/forkme_right_green_007200.png"]');
            if (overlayImage instanceof HTMLElement) {
                overlayImage.style.visibility = 'hidden';
            }
        });
        await this.closebtn.scrollIntoView();
        await this.closebtn.click();
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
   
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
