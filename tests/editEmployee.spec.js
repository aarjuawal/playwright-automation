const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Dashboard } = require('../pages/Dashboard');
const { EmployeeList } = require('../pages/EmployeeList');

//Navigate to PIM..
// Open employee list..
// Click Edit on a row
// Update details
// Save
// Validate success

test.describe('Edit Employee Tests', () => {
  
  test('Edit employee', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const employeeList = new EmployeeList(page);

    // Login
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    
    // Navigate to employee list
    await employeeList.navigateToEmployeeList();

    //click edit employee button
    await employeeList.editEmployeeButton();

    //edit employee details
    await employeeList.editEmployeeDetails('sasa');

    await expect(page.getByText('Successfully Updated')).toBeVisible();

        // After saving, verify the name changed
    const updatedName = await page.getByRole('textbox').first().inputValue();
    expect(updatedName).toBe('NewName');


  })

    test('Edit employee by search', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const employeeList = new EmployeeList(page);

    // Login
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    
    // Navigate to employee list
    await employeeList.navigateToEmployeeList();

    //search by name
    await employeeList.searchEmployeeByName('Jaron Spencer');

    //click edit employee button
    await employeeList.editEmployeeButton();

    //edit employee details
    await employeeList.editEmployeeDetails('sasa');

    await expect(page.getByText('Successfully Updated')).toBeVisible();

        // After saving, verify the name changed
    const updatedName = await page.getByRole('textbox').first().inputValue();
    expect(updatedName).toBe('sasa');


  })

});