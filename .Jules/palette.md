## 2026-02-21 - YouTube Lite Embed Pattern
**Learning:** Replaced direct iframe embedding with a "Lite Embed" (facade) pattern in `YouTube.svelte` to improve performance and accessibility.
**Action:** When embedding external media, always use a facade (thumbnail + play button) that loads the heavy iframe only upon interaction. Ensure the interactive element has a descriptive `aria-label` and visible focus state (`focus-visible:ring`).
