import asyncio
from playwright.async_api import async_playwright, expect

async def verify_gallery_accessibility():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the gallery page
        # Note: Port 5173 is the default for Vite/SvelteKit
        try:
            await page.goto("http://localhost:5173/gallery")
            # Wait for content to load
            await page.wait_for_selector("article")
        except Exception as e:
            print(f"Failed to load page: {e}")
            await browser.close()
            return

        print("Page loaded successfully")

        # Select all buttons that should have aria-labels
        buttons = await page.locator("button[aria-label]").all()

        print(f"Found {len(buttons)} buttons with aria-label")

        if len(buttons) == 0:
            print("ERROR: No buttons with aria-label found!")
            await browser.close()
            return

        # Check a few specific buttons for correct aria-label content
        # We expect labels like "Like, 1.2k likes", "Comment, 84 comments", "Share", "Bookmark"

        # Verify 'Like' button on first post
        like_btn = buttons[0]
        label = await like_btn.get_attribute("aria-label")
        print(f"First button label: {label}")

        # Verify we have aria-hidden on icons inside these buttons
        icons = await like_btn.locator("span.material-symbols-outlined").all()
        if len(icons) > 0:
            hidden = await icons[0].get_attribute("aria-hidden")
            print(f"Icon aria-hidden: {hidden}")
            if hidden != "true":
                print("ERROR: Icon missing aria-hidden='true'")
        else:
            print("ERROR: Icon not found in button")

        # Take a screenshot to visualize the page (though a11y attributes aren't visible)
        # We can simulate hover to show tooltips if any (none implemented in this change, but good for context)
        await page.screenshot(path="verification_gallery.png", full_page=True)
        print("Screenshot saved to verification_gallery.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_gallery_accessibility())
