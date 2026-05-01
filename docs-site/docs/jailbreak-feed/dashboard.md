---
sidebar_position: 1
---

# Dashboard

## Summary Tiles

Three tiles across the top of the page give a quick read on feed coverage:

- **Total Threat Reports** — total count of disclosed vulnerability reports submitted by security researchers, with a sparkline showing the trend over time.
- **Most Affected Vendor** — the vendor with the highest share of vulnerability reports, shown as a percentage alongside the vendor name.
- **Scanner Probe Available** — percentage of vulnerability reports that have an active scanner probe for automated detection.

Each tile is clickable and jumps to the corresponding section or filtered view.

## Visualizations

Below the tiles, the dashboard renders four data visualizations:

- **Most Affected Models** — top AI models ranked by percentage of disclosed vulnerabilities affecting them. See [LLM Model Cards](https://0din.ai/research/vendor_cards) for per-model security profiles.
- **Research Origins** — geographic distribution of vulnerability reports based on the researcher's location.
- **Jailbreak Taxonomy: Category** — distribution of vulnerabilities across [jailbreak taxonomy](https://0din.ai/research/taxonomy) categories, showing which attack types are most prevalent.
- **Cross-Model Vulnerability** — cumulative count of vulnerabilities that affect multiple AI models, indicating widespread security issues.

## Latest Reports

A table on the right surfaces the most recently disclosed reports. Each row links to the full report and shows:

- **Title** of the disclosure
- **Max Score** — highest test result recorded against any model
- **Models Affected** — visual indicator of how many models the report applies to (capped at 10)
- **Status** — current publication state of the disclosure

An **All reports** button opens the full Reports list.

## Vendors and Techniques Heatmap

At the bottom of the dashboard, a heatmap cross-references AI vendors with [jailbreak techniques](https://0din.ai/research/taxonomy). Cell intensity indicates how frequently a given technique has been observed against a given vendor — useful for spotting which techniques generalize across the ecosystem versus which are vendor-specific.
