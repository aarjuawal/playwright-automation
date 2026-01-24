const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { EmployeeList } = require('../pages/EmployeeList');

test.describe('Employee Search Tests', () => {
  
  test('Search by employee name', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const employeeList = new EmployeeList(page);

    // Login
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    
    // Navigate to employee list
    await employeeList.navigateToEmployeeList();
    
    // Search for employee
    await employeeList.searchEmployeeByName('Amelia');
    

  });

  test('Search with non-existent employee name', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const employeeList = new EmployeeList(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await employeeList.navigateToEmployeeList();
    
    // Search for non-existent employee
    await employeeList.searchEmployeeByName('NonExistentEmployee12345');
    
    // Should show no records
    // const isNoRecords = await employeeList.isNoRecordsMessageVisible();
    // expect(isNoRecords).toBeTruthy();
  });
});