import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const users = require('../test-data/user.json');

test('login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(users.validUser.username,users.validUser.password);

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})                  