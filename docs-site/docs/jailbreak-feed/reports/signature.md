---
sidebar_position: 5
---

# Signature Tab

The **Signature** tab exposes the **detection signature** for a disclosure — a structured pattern that automated tooling can use to detect the vulnerability in production traffic, scanner output, or model responses.

:::note Available on Team and Enterprise
**Detection Signature** capabilities are included in the [Team and Enterprise plans](https://0din.ai/products). The Free plan does not include this section.
:::

## Signature Card

The tab shows a single card with:

- **Signature label** identifying the artifact.
- **Signature body** rendered in a monospaced font, broken across lines as needed so long patterns remain copy-able.
- **Copy button** that copies the full signature to your clipboard for use in your own detection pipelines.

## Bulk Access

A note above the card links to the [Data Export](../export) page, where every detection signature in the feed is available in a single bulk download. Use the per-report tab when you only need a single signature; use the export when you're integrating against the full catalog.
