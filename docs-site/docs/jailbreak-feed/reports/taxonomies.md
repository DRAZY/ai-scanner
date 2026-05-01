---
sidebar_position: 2
---

# Taxonomies Tab

The **Taxonomies** tab classifies a disclosed vulnerability against the [0DIN Jailbreak Taxonomy](https://0din.ai/research/taxonomy). Each report can be tagged with one or more **taxonomy triplets**, where each triplet captures three nested levels of granularity.

## Triplet Structure

Each taxonomy triplet has three parts, rendered as a nested card:

1. **Category** (top level) — the broad class of attack the disclosure belongs to.
2. **Strategy** (middle level, indented) — the higher-level approach used within the category.
3. **Technique** (innermost level, indented further) — the specific technique that implements the strategy.

Each level is shown alongside its description, sourced from the canonical taxonomy. This lets readers move from the abstract attack class down to the precise technique without leaving the report.

## Why Taxonomies Matter

Tagging reports with taxonomy triplets enables:

- **Cross-report search** — the [Reports filter modal](../reports) lets you narrow the catalog to a specific category, strategy, or technique.
- **Dashboard analytics** — the [Jailbreak Taxonomy chart](../dashboard) and [Vendors and Techniques heatmap](../dashboard) on the Dashboard are both powered by this tagging.
- **Trend analysis** — track which technique families are emerging or declining over time.
