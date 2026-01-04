const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Dashboard } = require('../pages/Dashboard');
const { AddEmployee } = require('../pages/AddEmployee');
const { faker } = require('@faker-js/faker'); 

test('login and add new employee', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new Dashboard(page);
    const addEmployee = new AddEmployee(page);

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);

    await dashboard.goToAddEmployee();
    await addEmployee.uploadPhoto();
    await addEmployee.addEmployee(firstName, lastName);

    await expect(page.locator('h6.oxd-text--h6', { hasText: 'Personal Details' }))
        .toBeVisible
    
    console.log(`Employee added: ${firstName} ${lastName}`);
});