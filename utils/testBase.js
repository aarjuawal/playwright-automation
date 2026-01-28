// centralize login 

const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

exports.test = base.extend({
    page:async ({ page }, use) =>{
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');

        await use(page);
    }

});

exports.expect = base.expect;