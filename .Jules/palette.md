## 2026-02-18 - Mobile Navigation Accessibility Gap
**Learning:** The mobile menu toggle button (`.lg:hidden`) was completely inaccessible to screen readers, lacking `aria-label`, `aria-expanded`, and `aria-controls`. This is a critical barrier for navigation on mobile devices.
**Action:** Always audit mobile-specific controls (like hamburger menus) for accessibility attributes, especially when they toggle visibility of other elements. Ensure state changes (`aria-expanded`) are communicated.

## 2026-02-19 - Missing Skip to Content Link
**Learning:** The site layout had a sticky header but no "Skip to Content" link. This forced keyboard users to tab through all navigation links on every page load to reach the main content.
**Action:** Always implement a "Skip to Content" link in the main layout (`+layout.svelte`) as a standard practice for accessibility, ensuring the target element has `tabindex="-1"` and `id="main-content"`.

## 2026-02-20 - Icon-Only Button Accessibility Gap
**Learning:** Multiple interactive buttons in the Gallery (options, bookmark, share) relied solely on icons without text labels or aria-label attributes, making them invisible to screen readers.
**Action:** Always verify icon-only buttons have an accessible name via aria-label or visually hidden text, especially in high-traffic components like feed cards.
