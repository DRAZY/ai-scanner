---
sidebar_position: 4
---

# System Prompts

The **System Prompts** page is a catalog of leaked system prompts grouped by vendor. System prompt leaks are a distinct category of disclosure: the model has been induced to reveal its hidden operator instructions, exposing safety rules, persona definitions, tool configurations, or proprietary product wording.

:::note Available on Team and Enterprise
**Model System Prompts Intel** is included in the [Team and Enterprise plans](https://0din.ai/products). The Free plan does not include this section.
:::

## Vendor Groups

The list is organized as collapsible vendor groups. Each group header shows:

- The **vendor logo** and name.
- A **leak count** — the total number of system prompt leaks recorded against any model from that vendor.

When expanded, the group lists every model from that vendor with at least one leak. Click a model name to open the model's leaks page.

## Per-Model Detail

Inside a model's leaks page, each captured system prompt is shown with its source, the date it was captured, and the verbatim leaked text. Researchers can compare versions over time to see how a vendor evolves its safety scaffolding in response to disclosures.
