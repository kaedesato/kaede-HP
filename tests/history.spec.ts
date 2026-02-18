import { test, expect } from '@playwright/test';
import { historyData } from '../src/lib/data/historyData';

test.describe('History Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/history');
  });

  test('should display the main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'History', exact: true })).toBeVisible();
  });

  test('should display all history events', async ({ page }) => {
    for (const event of historyData) {
      // Check for title
      await expect(page.getByText(event.title)).toBeVisible();

      // Check for date
      if (event.date) {
        await expect(page.getByText(event.date)).toBeVisible();
      }

      // Check for description if it exists and is not empty
      if (event.description) {
        // Some descriptions might be long, so we just check if it's present in the DOM
        await expect(page.getByText(event.description)).toBeVisible();
      }

      // Check for image if it exists
      if (event.image) {
        await expect(page.locator(`img[src="${event.image}"]`)).toBeVisible();
      }

      // Check for youtubeId if it exists
      if (event.youtubeId) {
        await expect(page.locator(`iframe[src*="${event.youtubeId}"]`)).toBeVisible();
      }
    }
  });

  test('should have a vertical timeline', async ({ page }) => {
    const timeline = page.locator('.timeline-vertical');
    await expect(timeline).toBeVisible();
  });
});
