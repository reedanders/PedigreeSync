import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:8888/';

test('NavBar brand logo is present', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole('link', { name: 'placeholder logo PedigreeSync' }).click(); 
});

test('Toggle dark mode', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByText('PedigreeSyncDark ModeGet').click();
  await page.getByRole('button', { name: 'Dark Mode' }).click();
  await page.getByText('PedigreeSyncLight ModeGet').click();
});

