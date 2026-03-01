## 2023-10-27 - [Information Leakage in SSR]
**Vulnerability:** External fetch error messages (e.g., from `ogs`) were directly exposed to the frontend in `src/routes/recommend/+page.server.ts`.
**Learning:** Returning raw system, network, or third-party error messages in Server-Side Rendering (SSR) data loaders can leak sensitive information about the backend environment or request behavior to users.
**Prevention:** Always log the full `error` object or `error.message` on the server (`console.error`), and return a safe, generic fallback message to the frontend when building or rendering pages.
