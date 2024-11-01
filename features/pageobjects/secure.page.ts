import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }

    public get logoutBtn () {
        return $('=Logout')
    }

    public async logout () {
        await this.logoutBtn.click()
    }
}

export default new SecurePage();
