---
sidebar_position: 1
---

# Overview Tab

The **Overview** tab is the default view of a threat report. It gives a high-level summary of the disclosure and the test results that back it up.

## Header

The top of the report shows:

- **Tag** (e.g. `0x8CCD7F81`) — short identifier for the report.
- **Title** — human-readable name of the disclosure.
- **Star rating** — community/researcher rating for the report.
- **Released** — date the report was disclosed.

## Summary Card

A summary card describes what the vulnerability is in plain language, alongside a [**Security Boundary**](https://0din.ai/research/boundaries) badge identifying the class of boundary that the jailbreak crosses (e.g. *prompt extraction*, *jailbreak*, *guardrails*).

## Metadata

A side panel lists report metadata:

- **Details** — pills indicating disclosure source, publication status, and other classifications.
- **Disclosed on** — disclosure date (for 0DIN-sourced reports).
- **References** — external links to writeups, papers, or other related material.

## Models and Test Scores

A table lists every model that was tested against this report:

| Column | Description |
|---|---|
| **Model** | Vendor and model name |
| **Test Kind** | Which test was run (e.g. a [JEF](https://0din.ai/research/jailbreak_evaluation_framework) metric) |
| **Test Score** | Result on a 0–100 scale, with a colored gradient indicating severity |
| **Temperature** | Sampling temperature used for the test (max 2.0) |

A [**JEF Score**](https://0din.ai/research/jailbreak_evaluation_framework) appears alongside the table with a hover-over breakdown showing each component (blast radius, retargetability, output fidelity).

## Impact Scores

Two cards summarize the human impact of the disclosure:

- [**Social Impact Score (SIS)**](https://0din.ai/research/social_impact_score) — qualitative description of the harm the disclosure could cause, on a five-level scale from minimal to critical.
- [**Nude Imagery Rating System (NIRS)**](https://0din.ai/research/nude_imagery_rating_system) — rating for any sexually explicit imagery the disclosure can produce, classified across five levels by artistic intent and realism.

## Detail

A **Detail** card carries the researcher-written long-form writeup of the disclosure — methodology, observations, caveats, and any supporting commentary that doesn't fit in the summary.
