## 2026-02-20 - Unsafe Third-Party Proxy Usage
**Vulnerability:** The application relied on `corsproxy.io` to fetch YouTube data client-side without validating the structure or content of the response.
**Learning:** Using public proxies introduces a risk where the proxy could manipulate the response (e.g., injecting malicious scripts into fields that are later rendered).
**Prevention:** Always treat data from proxies as untrusted user input. Strictly validate IDs, URLs, and sanitize text content before usage, even if the origin (YouTube) is trusted.
