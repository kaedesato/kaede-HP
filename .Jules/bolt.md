## 2024-05-24 - [Avoid Unnecessary Iterations in Svelte Templates]
**Learning:** Using `{#each array as item, i}` and then conditional checks `{#if i < 4}` inside the block causes Svelte to iterate through the entire array, which is inefficient for large datasets rendered partially (like preview grids).
**Action:** Use `.slice(0, 4)` directly on the array in the `{#each}` block definition (`{#each array.slice(0, 4) as item, i}`) to only iterate over the items actually being rendered. This minimizes reactivity overhead and DOM updates.
