import { test, expect } from '@playwright/test';

test.describe('YouTube Facade', () => {
  test('should load facade initially and iframe on click', async ({ page }) => {
    await page.goto('/history');

    // Wait for content
    await page.waitForSelector('.timeline');

    // 1. Initially, there should be NO iframes from youtube
    const iframes = page.locator('iframe[src*="youtube.com/embed"]');
    await expect(iframes).toHaveCount(0);

    // 2. There should be facade elements (play buttons)
    // We'll assume the button has aria-label="Play video"
    const playButtons = page.getByLabel('Play video');
    await expect(playButtons).not.toHaveCount(0);

    const initialCount = await playButtons.count();

    // 3. Click the first play button
    await playButtons.first().click();

    // Verify one button is gone
    await expect(playButtons).toHaveCount(initialCount - 1);

    // 4. Assert that ONE iframe appears
    await expect(iframes).toHaveCount(1);
  });
});
