## 2024-05-23 - Dev Environment Port Conflicts
**Learning:** The `npm run preview` command (Vite) automatically switches to the next available port (e.g., 4174, 4180) if the default (4173) is occupied. This causes Playwright tests (configured for 4173) to fail or timeout if they connect to a zombie process on the old port.
**Action:** Always use `--strictPort` (e.g., `npm run preview -- --port 4173 --strictPort`) in CI/test scripts to ensure the server fails fast if the port is in use, rather than silently switching ports. Also, ensure proper cleanup of background processes using `pkill` or similar before starting tests.

## 2024-05-23 - YouTube Embed Performance
**Learning:** The project uses standard YouTube iframe embeds in list views (e.g., History page), which causes massive performance degradation due to multiple heavy iframe loads on initial page render.
**Action:** Implemented a Facade pattern in `YouTube.svelte` that loads a lightweight thumbnail image first and only hydrates the iframe on user interaction. This should be the standard for all media embeds in this codebase.
