## 2026-02-22 - Lite Embed for YouTube Components
**Learning:** Loading multiple YouTube iframes on a single page (like the history timeline) significantly degrades performance due to simultaneous heavy resource fetching (scripts, docs, media).
**Action:** Implemented a "Lite Embed" pattern in `src/lib/components/YouTube.svelte`.
- Replaces initial iframe with a lightweight thumbnail image and a play button.
- Loads the actual iframe only upon user interaction (click/enter).
- This drastically reduces initial network requests and improves Time to Interactive (TTI), especially for pages with lists of videos.
