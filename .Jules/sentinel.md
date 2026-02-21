
## 2025-05-23 - External Data Validation
**Vulnerability:** Potential XSS via malicious links (e.g., `javascript:`) or injected HTML in data fetched from external YouTube proxies/RSS feeds.
**Learning:** Svelte's auto-escaping protects against HTML injection but not against `javascript:` URIs in `href` attributes. External data sources (even proxies for trusted sites) must be treated as untrusted.
**Prevention:** Implement strict input validation for all external data. Use regex allow-lists for IDs and protocol checks (http/https) for URLs before using them in the application.
