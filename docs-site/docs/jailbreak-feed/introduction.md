---
sidebar_position: 0
title: Introduction
---

# Jailbreak Feed

**Real-world adversarial intelligence for GenAI deployments.** The Jailbreak Feed (0DIN INTEL) is a subscription threat intelligence service that delivers verified vulnerability data and analysis across production GenAI models, drawn from 0DIN's research team and its GenAI bug-bounty program.

## What it is

As enterprises scale GenAI, adversaries probe production models with novel attacks that ingest live data, call external plugins, and adapt on the fly. Conventional defenses don't keep pace. The Jailbreak Feed closes that gap by surfacing the exact tactics being used against deployed models — not simulations — so security and ML teams can detect, harden, and document with high-fidelity threat data.

Each disclosed finding includes the affected models, taxonomy classification, attack technique, sample prompts and responses, reproducibility-scored test results, and step-by-step rationale for why the compromise succeeded along with guardrail rules to mitigate it.

## What's in the feed

| Data | Description |
|---|---|
| **Threat reports** | Verified disclosures with title, UUID, severity (Low–Severe), and publication status |
| **Affected models & vendors** | Per-report mapping to specific models and vendors, with cross-model vulnerability tracking |
| **Taxonomy classification** | Category, strategy, and technique triplet from the [0DIN jailbreak taxonomy](https://0din.ai/research/taxonomy) |
| **Sample prompts & responses** | Reproducible exploit demonstrations |
| **Test results** | Reproducibility scores, temperature sensitivity, and per-model scores via [JEF](https://0din.ai/research/jailbreak_evaluation_framework) |
| **Impact scoring** | [Social Impact Score](https://0din.ai/research/social_impact_score) (1–10) and [Nude Imagery Rating](https://0din.ai/research/nude_imagery_rating_system) |
| **0DIN Signatures** | Hybrid prompt-pattern detection rules — keyword + semantic + LLM — for runtime anomaly detection |
| **Scanner probes** | Where available, an automated [Scanner](/scanner-introduction) probe to reproduce the finding against your own targets |

## How to use it

- **Dashboard analytics** — Visual summaries of report volume, model vulnerabilities, trend timelines, taxonomy heatmaps, and the geographic distribution of researcher submissions. See [Dashboard](./dashboard).
- **Detailed reports** — Drill into a single disclosure with full technical breakdown, prompts, variants, and signature. See [Reports](./reports).
- **Probes** — Download curated probe packs that drop into garak and similar tools to add 0DIN-disclosed jailbreak coverage to your existing scanner. See [Probes](./probes).
- **System prompts** — Browse leaked operator system prompts captured from production models, grouped by vendor. See [System Prompts](./system-prompts).
- **REST API** — Programmatic access to the same data shown in the dashboard, with rich filtering across severity, model, and taxonomy. JSON responses are optimized for SOC tooling and dashboards. See [API](./api).
- **Export** — Bulk export findings for offline analysis or ingestion into existing threat-intel pipelines. See [Export](./export).

## Common use cases

- **Detection engineering** — Deploy 0DIN Signatures to catch known jailbreak patterns in production prompt traffic.
- **Red team enablement** — Run reproducible adversary techniques against your own GenAI targets with [Scanner](/getting-started/quick-start).
- **Security architecture** — Inform tabletop exercises and guardrail design with high-fidelity threat data.
- **Governance & compliance** — Map findings to regulatory frameworks and back compliance reporting with verified vulnerability evidence.
- **SOC integration** — Pull the feed into existing threat-intelligence workflows via REST API.

## Access

The Jailbreak Feed is a subscription service. Access is multi-user with group-based permissions, MFA required, and secure token-based API access with rate limiting.

The Free plan includes the dashboard, report metadata, and probe-pack downloads. **Prompts & Responses**, **System Prompts**, **API**, and **Export** are gated to the [Team and Enterprise plans](https://0din.ai/products).

Contact [0din@mozilla.com](mailto:0din@mozilla.com) or visit [0din.ai/products](https://0din.ai/products) for subscription details.
