import type { Page } from  '@playwright/test';
export class HomePage{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }

    async clickSignIn() {
        await this.page.click('text=Account & Lists');
    }

    async clickEmail() {
        await this.page.click('input[name="email"]');
    }

    async typeEmailSearchText(){
        await this.page.type('input[name="email"]', 'testfg34@yahoo.com')
    }

    async clickSubmit(){
        await this.page.click('input[type="submit"]');
    }
}