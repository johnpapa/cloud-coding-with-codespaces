import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Homepage has List with specified title', async ({ page }) => {
  const listTitle=page.locator('.content-title-group h2');
  await expect(listTitle).toHaveText("My List");
});

test('Homepage has List with at least 3 items', async ({ page }) => {
  // Uses poll to get greaterThan 
  // See: https://github.com/microsoft/playwright/issues/10367
  const list=page.locator('.card');
  await expect.poll( () => list.count() ).toBeGreaterThanOrEqual(3);
});
