export class AddEmployee {
  constructor(page) {
    this.page = page;

    this.photoUploadInput = page.locator('input[type="file"]');
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput  = page.getByRole('textbox', { name: 'Last Name' });
    this.saveButton     = page.getByRole('button', { name: 'Save' });
  }

  async uploadPhoto(){
    await this.photoUploadInput.setInputFiles('uploads/profile.jpg');
  }

  async addEmployee(firstname, lastname) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.saveButton.click();
  }
}
