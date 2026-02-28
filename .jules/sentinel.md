## 2024-05-19 - Do not expose server error details on the frontend
**Vulnerability:** In `src/routes/recommend/+page.server.ts`, the OGP extraction function caught errors from `ogs` and passed `error.message` down to the frontend as the description for failed products. This leaks potentially sensitive internal trace or stack details.
**Learning:** Returning error messages from external fetch processes or dependencies to the client directly is a security risk.
**Prevention:** Always log the full error securely on the server (`console.error` / logger) and map to a generic, safe string before responding to the client.
