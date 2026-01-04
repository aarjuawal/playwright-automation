const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Dashboard } = require('../pages/Dashboard');
const { faker } = require('@faker-js/faker'); 
const { EmployeeList } = require('../pages/EmployeeList');

test('Search by employee name', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new Dashboard(page);
    const employeeList = new EmployeeList(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await employeeList.navigateToEmployeeList();
    await employeeList.searchEmployeeByName('aarju');

});