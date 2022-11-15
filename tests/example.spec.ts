import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Homepage has List with specified title', async ({ page }) => {
  const listTitle=page.locator('.content-title-group h2');
  await expect(listTitle).toHaveText("My List");
});

test('Homepage has List with 3 items', async ({ page }) => {
  const items = page.locator('.card');
  await expect(items).toHaveCount(3);
});
