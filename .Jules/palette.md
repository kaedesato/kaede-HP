## 2026-02-24 - Accessible Icon-Only Buttons
**Learning:** The Gallery page (`src/routes/gallery/+page.svelte`) used several icon-only buttons (More options, Share, Bookmark) without `aria-label` or text content, making them invisible to screen readers.
**Action:** When using Material Symbols or other icon libraries in buttons, always ensure an `aria-label` is present if no visible text describes the action. Verified using Playwright to check for label presence in the accessibility tree.
