---
sidebar_position: 3
---

# Prompts & Responses Tab

The **Prompts & Responses** tab shows the verbatim conversational evidence behind a disclosure: the prompts the researcher submitted and the responses the model returned. This is the rawest, most reproducible artifact in the report.

:::note Available on Team and Enterprise
**Prompts & Responses** access is included in the [Team and Enterprise plans](https://0din.ai/products). The Free plan can browse reports without this section.
:::

## Per-Message Card

Each prompt/response pair is rendered as its own card. When the message is associated with a specific model or interface, the card header shows:

- **Vendor logo and model name** — which model produced this exchange.
- **Interface** — how the model was accessed for this exchange (e.g. *API*, *Web Chat*).

## Prompt

The exact text submitted to the model is shown in a code block. A copy button next to the **Prompt** label copies the full prompt to your clipboard so you can replay the exchange against the model yourself.

## Response

The model's full response is shown in a second code block, also with a copy button. Long responses are wrapped — nothing is truncated.

## Attachments

If the exchange involved file uploads (images, PDFs, audio, etc.), they appear under an **Attachments** section as a gallery. Click any attachment to preview it in a lightbox.
