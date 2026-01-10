
import { test, expect } from '@playwright/test';

test('sucessfull login with correct credential', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name: 'Login'}).click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  // await expect(page.getByText('Dashboard')).toBeVisible();

   //double click
  //  await page.getByText('Double click me').dblclick();

    //type with delay(simulate human typing)
    // await page.getByLabel('Password').type('secretsss', { delay: 100})

    //clear input
    // await page.getByLabel('Email').clear();
});

test('dropdown and checkboxes', async({page}) =>{
  await page.goto('');
  
  //select from dropdown
  await page.getByLabel('Country').selectOption('USA');
  await page.locator('#country').selectOption({label: 'United States'});

  //check checkbox
  await page.getByLabel('Subscribe').check();

    //uncheck checkbox
  await page.getByLabel('Subscribe').uncheck();

  //radio button
  await page.getByLabel('Male').check();


})

test('Hover and drag', async({page}) =>{
  await page.goto('');

  //hover
  await page.getByAltText('Menu').hover();

  //drag and drop
  await page.locator('#draggable').dragTo(page.locator('#droppable'));

})

//element assertion
test('element assertion', async({page}) =>{
  await page.goto('');
  const button = page.getByRole('button',{name:'submit'})

  //visibility
  await expect(button).toBeVisible();
  await expect(button).toBeHidden();

  //enable / disabled
  await expect(button).toBeEnabled();
  await expect(button).toBeDisabled();

//text content
  await expect(button).toHaveText('submit');
  await expect(button).toContainText('sub');

  //count
  await expect(page.getByRole('listitem')).toHaveCount(5);

  //attribute
  await expect(button).toHaveAttribute('type', 'submit');

  //css class
  await expect(button).toHaveClass('btn-primary');

  //valur(for imput)
  await expect(page.getByLabel('Email')).toHaveValue('test@gmail.com')


})

//soft assertion(continue on failure)
test('soft assertions', async ({ page }) =>{
  await page.goto('https://example.com');

  //test continues even if these fail
  await expect.soft(page.getByText('Header')).toBeVisible();
  await expect.soft(page.getByText('Footer')).toBeVisible();
  
})