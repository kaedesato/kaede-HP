## 2026-02-18 - Mobile Navigation Accessibility Gap
**Learning:** The mobile menu toggle button (`.lg:hidden`) was completely inaccessible to screen readers, lacking `aria-label`, `aria-expanded`, and `aria-controls`. This is a critical barrier for navigation on mobile devices.
**Action:** Always audit mobile-specific controls (like hamburger menus) for accessibility attributes, especially when they toggle visibility of other elements. Ensure state changes (`aria-expanded`) are communicated.

## 2026-02-19 - Missing Skip to Content Link
**Learning:** The site layout had a sticky header but no "Skip to Content" link. This forced keyboard users to tab through all navigation links on every page load to reach the main content.
**Action:** Always implement a "Skip to Content" link in the main layout (`+layout.svelte`) as a standard practice for accessibility, ensuring the target element has `tabindex="-1"` and `id="main-content"`.

## 2026-02-28 - Missing ARIA Labels on Icon Buttons and Ligatures
**Learning:** In interactive layouts like the Gallery feed (`src/routes/gallery/+page.svelte`), icon-only buttons (e.g., Like, Share, More) and dynamic interactive buttons (e.g., "Play Video") were lacking `aria-label` attributes. Additionally, Google Material Symbols ligatures inside `span` elements were not hidden with `aria-hidden="true"`, causing screen readers to mistakenly read out the ligature text (e.g., "favorite") instead of the true action. A key project convention is that despite the site being in Japanese, accessibility attributes like `aria-label` should remain in English.
**Action:** When adding icon buttons or ligature icons in this codebase, always pair them with an explicit English `aria-label` on the parent button and `aria-hidden="true"` on the icon container to ensure clean, accurate screen reader announcements. Use optional chaining and nullish coalescing for dynamic values in attributes.
