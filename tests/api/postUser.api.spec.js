import { test, expect } from '@playwright/test';

test('POST users, Validate status, body, and headers', async ({ request }) => {
    const payload = {
        name: "Aarju",
        job: "QA E"
    };
  
    const response = await request.post('/api/users')

  // status   code validation
  expect(response.status()).toBe(201);

  const body = await response.json();
  // expect(body.name).toBe('Aarju');
  expect(body.id).toBeTruthy();


});
