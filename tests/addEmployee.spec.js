import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Dashboard } from "../pages/Dashboard";
import { AddEmployee } from "../pages/AddEmployee";

test('login and add new employee', async({page}) => {
    const loginPage = new LoginPage(page);
    const dashboard = new Dashboard(page);
    const addEmployee = new AddEmployee(page);

    await loginPage.goto();
    await loginPage.login('Admin','admin123');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await dashboard.goToAddEmployee();

    await addEmployee.uploadPhoto();


    await addEmployee.addEmployee('aan', 'thisis3rd');
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();


})