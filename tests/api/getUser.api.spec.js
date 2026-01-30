import { test, expect } from '@playwright/test';

test('GET users list', async ({ request }) => {
  const response = await request.get(
    'https://reqres.in/api/users?page=2')

  // status code validation
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // data validation
  expect(responseBody.data.length).toBeGreaterThan(0);
  expect(responseBody.data[0]).toHaveProperty('id');
  expect(responseBody.data[0]).toHaveProperty('email');
});
