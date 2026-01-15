import { test, expect } from '@playwright/test';

const baseUrl = process.env.BRANCH_URL || 'https://pedigreesync.netlify.app/';

// Use environment variables with fallbacks for testing
if (!process.env.TEST_USER_EMAIL || !process.env.TEST_USER_PASSWORD) {
  throw new Error('Environment variables TEST_USER_EMAIL and TEST_USER_PASSWORD must be set.');
}
const TEST_EMAIL = process.env.TEST_USER_EMAIL;
const TEST_PASSWORD = process.env.TEST_USER_PASSWORD;
test('User can log in', async ({ page }) => {
  
  // Navigate to the login page
  await page.goto(`${baseUrl}/login`);
  
  // Fill in the login form
  // Using both ID and label text for more reliable selection
  await page.getByLabel('Email Address').fill(TEST_EMAIL);
  await page.getByLabel('Password').fill(TEST_PASSWORD);
  
  // Submit the form - using the exact button text from the login page
  await page.getByRole('button', { name: 'Log In' }).click();
  
  // Check we're redirected to the manage page
  await expect(page).toHaveURL(/.*\/manage/);
});

test('Login form is visible with all elements', async ({ page }) => {
  await page.goto(`${baseUrl}/login`);
  
  // Check for the title
  await expect(page.getByRole('heading', { name: 'Login to PedigreeSync' })).toBeVisible();
  
  // Check for form elements
  await expect(page.getByLabel('Email Address')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create Account' })).toBeVisible();
  
  // Check for help text
  await expect(page.getByText('Having trouble logging in?')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Support' })).toBeVisible();
});

test('User can log out', async ({ page }) => {
  
  // First login
  await page.goto(`${baseUrl}/login`);
  await page.getByLabel('Email Address').fill(TEST_EMAIL);
  await page.getByLabel('Password').fill(TEST_PASSWORD);
  await page.getByRole('button', { name: 'Log In' }).click();
  
  // Verify login was successful
  await expect(page).toHaveURL(/.*\/manage/);
  
  // Now log out
  await page.getByRole('button', { name: 'Log Out' }).click();
  
  // Verify we're logged out and back at the homepage
  await expect(page).toHaveURL(baseUrl);
});
