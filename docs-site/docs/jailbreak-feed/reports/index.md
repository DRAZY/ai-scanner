---
sidebar_position: 2
---

# Reports

The Reports page is the catalog of all disclosed vulnerabilities in the Jailbreak Feed. Each row represents one **threat report** — a single disclosed jailbreak or model weakness, with associated metadata, scores, and (depending on tier) prompts, variants, and detection signatures.

## Filters

The **Add Filters** button opens a modal with multi-criteria search:

- **Target** — filter to specific affected models
- **Vendor** — filter to specific vendors
- **Test Max Score ≥** — minimum maximum test score
- **Test Kind** — restrict to a specific kind of test (e.g. a specific [JEF](https://0din.ai/research/jailbreak_evaluation_framework) metric)
- **Social Impact Score ≥** — minimum SIS rating
- **Nude Imagery Score ≥** — minimum NIRS rating
- **Status** — filter by publication state
- **Taxonomy** — filter by category, strategy, and technique triplet
- **Source** — restrict to 0DIN-disclosed reports or external reports
- **Show Scanner Module Only** — only reports that have an active scanner module
- **Cross-Model Vulnerabilities** — only reports affecting more than one model

A **Reset** button clears all filters and returns to the unfiltered list.

## Results Table

The results table lists every matching report with the following sortable columns:

| Column | Description |
|---|---|
| **Tag** | Compact identifier for the report (e.g. `0xABCD1234`) |
| **Name** | Human-readable title of the disclosure |
| **Target** | Vendor logo and primary affected model (with a `+N more` indicator when multiple models are affected) |
| **Max Score** | Highest test score recorded against any affected model |
| **Average Score** | Average test score across all affected models |
| **Models Affected** | Count of affected models, capped at 10 for display |
| **Impact** | Social Impact Score (SIS) and Nude Imagery Rating Score (NIRS) badges |
| **Status** | Publication state of the disclosure |
| **Release** | Date the report was disclosed or published |

Click any row to open the full report. The full report has five tabs — see the sub-pages of this section for a breakdown of each.
