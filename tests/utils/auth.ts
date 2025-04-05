import { Page } from '@playwright/test';

// Test credentials should be loaded from environment variables
const TEST_EMAIL = process.env.TEST_USER_EMAIL || '';
const TEST_PASSWORD = process.env.TEST_USER_PASSWORD || '';

/**
 * Logs in using the test account
 */
export async function loginAsTestUser(page: Page) {
  await page.goto('/login');
  await page.getByLabel('Email').fill(TEST_EMAIL);
  await page.getByLabel('Password').fill(TEST_PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
  
  // Wait for navigation to complete
  await page.waitForURL('/dashboard');
}

/**
 * Signs out the current user
 */
export async function signOut(page: Page) {
  // Click on logout button in navbar
  await page.getByRole('button', { name: 'Log Out' }).click();
  // Wait for navigation to complete
  await page.waitForURL('/');
}