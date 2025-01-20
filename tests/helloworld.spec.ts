import { test, expect } from '@playwright/test';

const baseUrl = process.env.DEPLOY_URL || 'https://pedigreesync.netlify.app/';

test('NavBar brand logo is present', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole('link', { name: /PedigreeSync/i }).click();
});

test('Toggle dark mode', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByText('PedigreeSyncDark ModeGet').click();
  await page.getByRole('button', { name: 'Dark Mode' }).click();
  await page.getByText('PedigreeSyncLight ModeGet').click();
});

