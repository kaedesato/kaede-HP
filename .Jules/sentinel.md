## 2026-02-22 - [Enhancement] YouTube Video ID Validation
**Vulnerability:** `getChannelData` extracted `videoId` from external sources (`corsproxy.io` and `rss2json.com`) without validation, allowing potential injection of malicious characters into `src` and `href` attributes if the source returned crafted data.
**Learning:** Even when using proxies to fetch data, the content is still external and untrusted. Proxies can be manipulated or compromised. Assuming data structure (like `videoId` format) is dangerous.
**Prevention:** Always validate extracted IDs against a strict allowlist (e.g., regex `^[a-zA-Z0-9_-]+$`) before using them to construct URLs or render in the UI. Fail safe (return null/skip) if validation fails.
