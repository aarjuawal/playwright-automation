const { expect } = require('@playwright/test');

class EmployeeList{
    constructor(page){
        this.page = page;
        
        this.pimMenu = page.locator('//span[text()="PIM"]/ancestor::a');
        this.employeeListMenu = page.getByRole('link', {name:'Employee List'});

        this.employeeName = page.getByLabel('Employee Name');
        this.searchButton = page.getByRole('button', {name:'Search'});
    }
    async navigateToEmployeeList(){
        await this.pimMenu.click();
        await this.employeeListMenu.click();
    }
    async searchEmployeeByName(name){
        await this.employeeName.fill(name);
        await this.searchButton.click();
    }
} 
module.exports = {EmployeeList}