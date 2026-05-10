## 2025-05-05 - Cross-Site Scripting (XSS) via unescaped video link in innerHTML
**Vulnerability:** Dynamic data (video link, title, thumbnail) was injected into `innerHTML` using template literals without proper HTML escaping. This allowed attackers to execute arbitrary JavaScript if the source data was compromised.
**Learning:** Client-side scripts in Astro components bypass Astro's automatic build-time escaping when they manually manipulate the DOM via `innerHTML`.
**Prevention:** Always use a robust HTML escaping utility like `escapeHTML` when injecting dynamic content into the DOM through `innerHTML` or attribute strings. Prefer safer DOM APIs like `textContent` and `setAttribute` when possible.
