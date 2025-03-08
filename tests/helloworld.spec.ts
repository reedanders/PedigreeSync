import { test, expect } from '@playwright/test';

const baseUrl = process.env.BRANCH_URL || 'https://pedigreesync.netlify.app/';

test('NavBar brand logo is present', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole('navigation').getByRole('link', { name: 'Lamb icon PedigreeSync' }).click();
});

test('Use navbar to view About EBV page', async ({ page }) => {
  const viewport = page.viewportSize();
  if (viewport && viewport.width < 800) {
    test.skip(viewport && viewport.width < 800, 'Skipping test on mobile screens until hamburger menu is implemented');
  }
  await page.goto(baseUrl);
  await page.getByRole('list').getByRole('link', { name: 'About EBVs' }).click();
  await page.getByRole('heading', { name: 'Understanding Estimated' }).click();
});

test('Use navbar to view Roadmap page', async ({ page }) => {
  const viewport = page.viewportSize();
  if (viewport && viewport.width < 800) {
    test.skip(viewport && viewport.width < 800, 'Skipping test on mobile screens until hamburger menu is implemented');
  }
  await page.goto(baseUrl);
  await page.getByRole('navigation').getByRole('link', { name: 'Roadmap' }).click();
  await page.getByRole('heading', { name: 'PedigreeSync Development' }).click();
});