import { test, expect } from '@playwright/test';

test('GET users list-Validate status, body, and headers', async ({ request }) => {
  const response = await request.get(
    'https://reqres.in/api/users?page=2')

  // status code validation
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  const responseBody = await response.json();

  // data validation
  expect(responseBody.data.length).toBeGreaterThan(0);
  expect(responseBody.data[0]).toHaveProperty('id');
  expect(responseBody.data[0]).toHaveProperty('email');

  //check response header
  const responseHeaders = response.headersArray();
  console.log("Response headers:", responseHeaders);
});
