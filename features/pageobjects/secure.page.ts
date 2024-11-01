import { $ } from '@wdio/globals'
import Page from './page.js';


class SecurePage extends Page {
  
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
