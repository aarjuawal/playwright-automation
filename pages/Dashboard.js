//navigate to pim
//click add employee
//fill form and save and verify


export class Dashboard {
    constructor(page){
        this.page = page;
        this.pimMenu = page.locator('//span[text()="PIM"]/ancestor::a');
        this.addEmployeeButton = page.getByRole('button', {name:'Add'});


    }
    async goToAddEmployee(){
        await this.pimMenu.click();
        await this.addEmployeeButton.click();

    }

 

        
}