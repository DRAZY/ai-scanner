import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "0din.ai Docs",
  tagline: "Documentation for 0DIN's Scanner and Jailbreak Feed",
  favicon: "img/favicon.ico",

  url: "https://0din.ai",
  baseUrl: "/docs/",

  organizationName: "0din-ai",
  projectName: "ai-scanner",
  trailingSlash: false,

  onBrokenLinks: "throw",

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      type: "text/css",
      crossorigin: "anonymous",
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/0din-ai/ai-scanner/tree/main/docs-site/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-GQY604KVC1",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "0din.ai Docs",
      logo: {
        alt: "0din.ai",
        src: "img/logo.png",
      },
      items: [],
    },
    // Footer content is rendered by the swizzled component at src/theme/Footer
    // which selects scanner / jailbreak-feed / generic links based on the
    // current pathname. The themeConfig footer field is intentionally omitted.
    // The GitHub navbar item is appended for scanner pages by the swizzled
    // component at src/theme/Navbar/Content (same pathname-based logic).
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["ruby", "bash", "json", "yaml", "python", "docker"],
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
