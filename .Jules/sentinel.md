## 2025-02-18 - [Trusted Proxy Assumption]
**Vulnerability:** The application scraped data from a proxy (`corsproxy.io`) and blindly trusted the structure and content of the response, including extracting `videoId` and using it in URL construction without validation.
**Learning:** Even when using proxies or external APIs, all extracted data must be treated as untrusted user input. Specifically, IDs that are used to construct further URLs (like `src` attributes) must be strictly validated.
**Prevention:** Implement strict validation functions (e.g., regex checks) for all data extracted from external sources before using them in the application logic or UI.
