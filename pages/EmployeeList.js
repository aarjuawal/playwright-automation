export class EmployeeList {
  constructor(page) {
    this.page = page;
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.employeeNameInput = page.locator('.oxd-grid-item').filter({ hasText: 'Employee Name' }).getByPlaceholder('Type for hints...');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.tableRows = page.locator('.oxd-table-body .oxd-table-row');
    this.noRecordsFound = page.getByText('No Records Found');
    this.firstRow = page.locator('.oxd-table-body .oxd-table-row').first();
    this.editButton = this.firstRow.locator('button').first();
    this.editName = page.getByRole('textbox', { name: 'First Name' })
    this.saveButton = page.getByRole('button',{name: 'Save'})
    this.deleteButton = page.getByRole('button').filter({ hasText: /^$/ }).nth(4)
    this.confirmDelete = page.getByRole('button', { name: ' Yes, Delete' })
  }

  async navigateToEmployeeList() {
    await this.pimMenu.click();
  }

  async searchEmployeeByName(name) {
    // Fill the employee name
    await this.employeeNameInput.fill(name);
    
    // Click search button
    await this.searchButton.click();
    
  }

  //click edit button
  async editEmployeeButton() {
    await this.editButton.click();
    await this.page.getByRole('heading', { name: 'Personal Details' }).waitFor();
  }


  //update details
  async editEmployeeDetails(newName){
    await this.editName.fill(newName);
    await this.saveButton.click();

  }

  async deleteEmployee(){
    await this.deleteButton.click()
    await this.confirmDelete.click()
    

  }

  async isNoRecordsMessageVisible() {
    return await this.noRecordsFound.isVisible();
  }
}