## 2026-02-18 - Mobile Navigation Accessibility Gap
**Learning:** The mobile menu toggle button (`.lg:hidden`) was completely inaccessible to screen readers, lacking `aria-label`, `aria-expanded`, and `aria-controls`. This is a critical barrier for navigation on mobile devices.
**Action:** Always audit mobile-specific controls (like hamburger menus) for accessibility attributes, especially when they toggle visibility of other elements. Ensure state changes (`aria-expanded`) are communicated.

## 2026-02-19 - Missing Skip to Content Link
**Learning:** The site layout had a sticky header but no "Skip to Content" link. This forced keyboard users to tab through all navigation links on every page load to reach the main content.
**Action:** Always implement a "Skip to Content" link in the main layout (`+layout.svelte`) as a standard practice for accessibility, ensuring the target element has `tabindex="-1"` and `id="main-content"`.
