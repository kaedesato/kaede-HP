## 2024-05-24 - [YouTube Facade Pattern]
**Learning:** Replacing YouTube iframes with a "Lite Embed" facade (thumbnail + play button) significantly improves page load performance by deferring the heavy iframe load until interaction. This is especially critical for lists of videos.
**Action:** Always use a facade pattern for third-party embeds (YouTube, Vimeo, Maps) in lists or below the fold.

## 2024-05-24 - [Svelte Component Reuse State]
**Learning:** Svelte components in `{#each}` blocks might be reused. Local state (like `isPlaying` or `hasError`) must be reset when key props (like `id`) change using reactive statements `$: { prop; state = init; }`.
**Action:** Audit component state to ensure it resets correctly when props change, especially for components used in lists.
