const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Dashboard } = require('../pages/Dashboard');
const { EmployeeList } = require('../pages/EmployeeList');

//Navigate to PIM..
// Open employee list..
//search employee
// Click delete on a row
// confirm 
// Validate success

test.describe('Delete Employee Tests', () => {
    test('Delete employee by search', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const employeeList = new EmployeeList(page);

    // Login
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    
    // Navigate to employee list
    await employeeList.navigateToEmployeeList();

    //search by name
    await employeeList.searchEmployeeByName('joker');

    //click  delete button
    await employeeList.deleteEmployee();

    //verify delete
    await employeeList.isNoRecordsMessageVisible()



  })

});