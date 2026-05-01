---
sidebar_position: 5
---

# API

The **API** page lets you generate and manage personal API keys for programmatic access to the 0DIN Jailbreak Feed.

:::note Available on Team and Enterprise
**API & data export** functionality is included in the [Team and Enterprise plans](https://0din.ai/products). The Free plan does not include programmatic access.
:::

## Your API Keys

A table lists all keys on your account with their **Label**, **Created On** date, **Expires On** date, **Status**, and per-row **Actions** (revoke, copy). You can have up to **5 active keys** at any time.

The **Create New API Key** button opens a dialog for naming and generating a new key. The key value is shown once at creation — copy it immediately, since it cannot be retrieved later.

## Code Examples

The page provides ready-to-paste examples for common operations against `api/v1/threatfeed/`:

- **List Threats (cURL)**
- **List Threats (Python)** — using `requests`
- **Get Single Threat (cURL)**
- **Get Single Threat (Python)**

Every example uses an `Authorization: YOUR_API_KEY` header. Replace `YOUR_API_KEY` with one of your generated keys (or set it via an environment variable as the Python examples demonstrate).

## Rate Limits & Quotas

- **25 requests per minute**

If you hit the rate limit, back off and retry; for sustained higher throughput, contact your account owner about a higher tier.

## Security and Best Practices

- **Securely store your keys** — treat them like passwords.
- **Rotate your keys every 90 days** to limit blast radius if a key is exposed.
- **Never embed your key in code or Docker builds** — pull from environment variables or a secrets manager at runtime.

## FAQs

**What if I lose my key?** Revoke the lost key from the table, then generate a new one.

**I'm getting rate limited. What's next?** Check your usage; if you need more throughput, consider upgrading your plan.
