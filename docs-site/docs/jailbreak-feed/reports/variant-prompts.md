---
sidebar_position: 4
---

# Variant Prompts Tab

The **Variant Prompts** tab shows industry-tailored rewrites of the original jailbreak prompt. Variants demonstrate how the same vulnerability can be re-targetted for different real-world contexts, making it easier to assess relevance for a specific deployment.

:::note Available on Team and Enterprise
**0DIN industry variants** are included in the [Team and Enterprise plans](https://0din.ai/products). The Free plan does not include this section.
:::

## Industry → Subindustry → Prompt

Variants are organized hierarchically:

1. **Industry** (top level) — broad sector such as *Finance*, *Healthcare*, or *E-commerce*. Each industry shows its total variant count.
2. **Subindustry** (middle level) — a more specific vertical inside the industry (e.g. *Investment Banking* under *Finance*, *Hospital* under *Healthcare*).
3. **Variant Prompt** (innermost level) — an individual rewritten prompt with its supporting context.

Click any industry to expand it; click any subindustry to expand its prompts. Counts on every level help readers gauge how much coverage a given context has.

## Variant Card

Each variant prompt is rendered as a card with three sections:

- **Prompt** — the rewritten prompt itself, in a code block with a copy button.
- **Key Changes** — a bulleted list of what was changed relative to the original prompt (e.g. *industry-specific context, time-pressure element, professional authority figure*).
- **Rationale** — an explanation of why the rewrite is likely to be effective in the target context, rooted in domain assumptions about that industry.

## Why Variants Matter

Standard security testing uses Chemical, Biological, Radiological, and Nuclear (CBRN) targets to generate generic attack techniques against an LLM. Variants retarget these techniques for industry verticals. For example, instead of extracting a recipe for crystal meth, a professional in the life insurance industry would target extraction of internal documentation on actuarial tables. A vulnerability that looks abstract in its original form often becomes concrete and high-impact when reframed for a specific industry.
