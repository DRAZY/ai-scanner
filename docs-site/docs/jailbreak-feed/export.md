---
sidebar_position: 6
---

# Export

The **Export** page provides bulk downloads of the entire 0DIN threat catalog in formats suitable for offline analysis, fine-tuning, and integration with internal tooling.

:::note Available on Team and Enterprise
**API & data export** functionality is included in the [Team and Enterprise plans](https://0din.ai/products). The Free plan does not include bulk export.

Exported content is **for licensed users only** and must not be redistributed publicly.
:::

## Fine-tuning Dataset Format (JSONL)

A JSONL file optimized for fine-tuning language models. Each line is a single training example with `instruction`, `input`, and `output` fields, structured to teach a model to refuse harmful or policy-violating prompts. A **sample data** preview is shown on the page so you can confirm the schema before downloading.

Use this format when you want to:

- Fine-tune a refusal classifier or guardrail model.
- Augment safety training data with real-world adversarial prompts.
- Benchmark a model's refusal behavior at scale.

## JSON

A single JSON document containing the full catalog with rich, nested metadata for each disclosure. Each entry includes:

- `uuid`, `title`, `summary`, `detail`
- `severity` and `security_boundary`
- `disclosed_at` / `published_at` / `updated_at`
- `models` — affected models and their vendors
- `messages` — prompt/response exchanges with `interface` (e.g. `api`, `webchat`)
- `taxonomies` — taxonomy triplets attached to the report
- `test_results` — every recorded test with model, score, and temperature
- `metadata` — Social Impact, Nude Imagery, and Scanner Module data
- `variant_prompts` — industry/subindustry variant rewrites with `key_changes` and `rationale`
- `detection_signatures` — every versioned detection signature

A sample of the structure is shown on the page.

## Probe Packs

A **Probe Packs** section lists the **latest released version** of each pack with one-click downloads. Each entry shows the product name, the upstream tool it extends, and a **Download** button. See [Probes](./probes) for full release history and per-product documentation.
