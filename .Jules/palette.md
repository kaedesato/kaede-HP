## 2026-02-18 - Mobile Navigation Accessibility Gap
**Learning:** The mobile menu toggle button (`.lg:hidden`) was completely inaccessible to screen readers, lacking `aria-label`, `aria-expanded`, and `aria-controls`. This is a critical barrier for navigation on mobile devices.
**Action:** Always audit mobile-specific controls (like hamburger menus) for accessibility attributes, especially when they toggle visibility of other elements. Ensure state changes (`aria-expanded`) are communicated.

## 2026-02-19 - Missing Skip to Content Link
**Learning:** The site layout had a sticky header but no "Skip to Content" link. This forced keyboard users to tab through all navigation links on every page load to reach the main content.
**Action:** Always implement a "Skip to Content" link in the main layout (`+layout.svelte`) as a standard practice for accessibility, ensuring the target element has `tabindex="-1"` and `id="main-content"`.

## 2026-02-21 - Keyboard Traps in Card Interactions
**Learning:** The video post card had a "play button" overlay implemented as a `div` with `cursor-pointer`, creating a keyboard trap where users could not access the primary action.
**Action:** Always implement interactive overlays (like play buttons or "view more" masks) as `<button>` elements with proper `aria-label` and `type="button"`, ensuring they are keyboard-focusable and actionable.

## 2024-05-22 - Interactive Overlays and A11y
**Learning:** Interactive overlays (like video play buttons or 'view more' image masks) are often implemented as `div`s with click handlers, which breaks keyboard accessibility.
**Action:** Always implement these as `<button type="button">` elements. Ensure they have an `aria-label` describing the action (e.g., "Play video", "View 5 more images").
