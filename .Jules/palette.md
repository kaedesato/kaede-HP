## 2026-02-18 - Mobile Navigation Accessibility Gap
**Learning:** The mobile menu toggle button (`.lg:hidden`) was completely inaccessible to screen readers, lacking `aria-label`, `aria-expanded`, and `aria-controls`. This is a critical barrier for navigation on mobile devices.
**Action:** Always audit mobile-specific controls (like hamburger menus) for accessibility attributes, especially when they toggle visibility of other elements. Ensure state changes (`aria-expanded`) are communicated.

## 2026-02-19 - Missing Skip to Content Link
**Learning:** The site layout had a sticky header but no "Skip to Content" link. This forced keyboard users to tab through all navigation links on every page load to reach the main content.
**Action:** Always implement a "Skip to Content" link in the main layout (`+layout.svelte`) as a standard practice for accessibility, ensuring the target element has `tabindex="-1"` and `id="main-content"`.

## 2026-03-01 - Interactive icon-only buttons need `aria-label`
**Learning:** In `src/routes/gallery/+page.svelte`, icon-only buttons for social engagement features (like "Like", "Retweet", "Quote", "Reply") were completely lacking `aria-label` attributes. Using Material Symbols ligatures alone with `aria-hidden="true"` inside a button means screen reader users receive zero context about the button's action. Additionally, when buttons include dynamic text like counts alongside icons, the count must be included in the `aria-label` since the label overrides child content.
**Action:** Always verify that interactive icon-only buttons have an explicit `aria-label`. If dynamic stats are shown next to the icon within the button, include those stats dynamically within the `aria-label` so users understand both the action and the current state/count.
