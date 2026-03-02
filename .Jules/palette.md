## 2026-02-18 - Mobile Navigation Accessibility Gap
**Learning:** The mobile menu toggle button (`.lg:hidden`) was completely inaccessible to screen readers, lacking `aria-label`, `aria-expanded`, and `aria-controls`. This is a critical barrier for navigation on mobile devices.
**Action:** Always audit mobile-specific controls (like hamburger menus) for accessibility attributes, especially when they toggle visibility of other elements. Ensure state changes (`aria-expanded`) are communicated.

## 2026-02-19 - Missing Skip to Content Link
**Learning:** The site layout had a sticky header but no "Skip to Content" link. This forced keyboard users to tab through all navigation links on every page load to reach the main content.
**Action:** Always implement a "Skip to Content" link in the main layout (`+layout.svelte`) as a standard practice for accessibility, ensuring the target element has `tabindex="-1"` and `id="main-content"`.

## 2026-03-02 - Redundant ARIA Labels on Mixed Content Buttons
**Learning:** Adding an `aria-label` to a button that already contains descriptive visible text (e.g., `<span>アルバムのすべての写真を見る</span>`) completely overrides the native child elements for screen readers. If the `aria-label` is in English while the visible text is Japanese, a Japanese screen reader user will suddenly hear English text instead of the expected native translation.
**Action:** For buttons that already contain clear, visible text, only add `aria-hidden="true"` to the decorative icon (`<span class="material-symbols-outlined">`) and omit the `aria-label` attribute on the button itself. Only use `aria-label` on buttons that consist solely of icons or when the visible text is insufficient.
