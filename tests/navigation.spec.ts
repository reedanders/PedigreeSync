import { test, expect } from '@playwright/test';

const baseUrl = process.env.BRANCH_URL || 'https://pedigreesync.netlify.app/';

test('NavBar brand logo is present', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole('navigation').getByRole('link', { name: 'Lamb icon PedigreeSync' }).click();
});
