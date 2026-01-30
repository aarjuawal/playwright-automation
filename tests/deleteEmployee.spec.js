const { test, expect } = require('../utils/testBase');
const { EmployeeList } = require('../pages/EmployeeList');

test('Delete employee by search', async ({ page }) => {
  const employeeList = new EmployeeList(page);

  await employeeList.navigateToEmployeeList();
  await employeeList.searchEmployeeByName('joker');
  await employeeList.deleteEmployee();

  await employeeList.searchEmployeeByName('joker');
  await expect(page.getByText('No Records Found')).toBeVisible();

});
