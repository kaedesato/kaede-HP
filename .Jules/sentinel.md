## 2024-05-24 - Do Not Leak External Dependency Errors to Frontend
**Vulnerability:** The error message from `open-graph-scraper` (`error.message`) was being returned directly to the client in the `ogDescription` field when an OGP fetch failed.
**Learning:** Raw error messages from external dependencies or underlying systems often leak internal stack traces, system paths, or configuration details. This is an information disclosure vulnerability. Even when the error appears harmless, standard practice is to log the specific error server-side and return a generic safe message to the client.
**Prevention:** Catch external module errors and sanitize the user-facing output. Always prefer a static, safe message (like `"情報の取得中にエラーが発生しました。"`) instead of dynamic interpolation of `error.message`.
