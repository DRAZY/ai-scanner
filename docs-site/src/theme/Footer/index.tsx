import React from "react";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import FooterLinks from "@theme/Footer/Links";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";

type FooterLinkItem = {
  label: string;
  to?: string;
  href?: string;
};

type FooterLinkColumn = {
  title: string;
  items: FooterLinkItem[];
};

type FooterContent = {
  links: FooterLinkColumn[];
  copyright: string;
};

const year = new Date().getFullYear();

const scannerFooter: FooterContent = {
  links: [
    {
      title: "Scanner Docs",
      items: [
        { label: "Getting Started", to: "/getting-started/quick-start" },
        { label: "User Guide", to: "/user-guide/core-concepts" },
        { label: "Deployment", to: "/deployment/docker-compose" },
        { label: "Development", to: "/development/setup" },
        { label: "Troubleshooting", to: "/troubleshooting" },
      ],
    },
    {
      title: "Community",
      items: [
        { label: "GitHub", href: "https://github.com/0din-ai/ai-scanner" },
        { label: "Issues", href: "https://github.com/0din-ai/ai-scanner/issues" },
        { label: "NVIDIA garak", href: "https://github.com/NVIDIA/garak" },
      ],
    },
    {
      title: "More",
      items: [
        { label: "0din.ai", href: "https://0din.ai" },
        { label: "Products & Pricing", href: "https://0din.ai/products" },
        { label: "Jailbreak Feed Docs", to: "/jailbreak-feed/dashboard" },
      ],
    },
  ],
  copyright: `Copyright © ${year} Scanner Contributors. Licensed under Apache 2.0.`,
};

const jailbreakFooter: FooterContent = {
  links: [
    {
      title: "Jailbreak Feed Docs",
      items: [
        { label: "Dashboard", to: "/jailbreak-feed/dashboard" },
        { label: "Reports", to: "/jailbreak-feed/reports" },
        { label: "Probes", to: "/jailbreak-feed/probes" },
        { label: "System Prompts", to: "/jailbreak-feed/system-prompts" },
        { label: "API", to: "/jailbreak-feed/api" },
        { label: "Export", to: "/jailbreak-feed/export" },
      ],
    },
    {
      title: "0DIN Research",
      items: [
        { label: "Jailbreak Taxonomy", href: "https://0din.ai/research/taxonomy" },
        { label: "JEF", href: "https://0din.ai/research/jailbreak_evaluation_framework" },
        { label: "Social Impact Score", href: "https://0din.ai/research/social_impact_score" },
        { label: "Nude Imagery Rating", href: "https://0din.ai/research/nude_imagery_rating_system" },
        { label: "Security Boundaries", href: "https://0din.ai/research/boundaries" },
      ],
    },
    {
      title: "More",
      items: [
        { label: "0din.ai", href: "https://0din.ai" },
        { label: "Products & Pricing", href: "https://0din.ai/products" },
        { label: "Scanner Docs", to: "/getting-started/quick-start" },
      ],
    },
  ],
  copyright: `Copyright © ${year} 0DIN. Jailbreak Feed content for licensed users only.`,
};

const genericFooter: FooterContent = {
  links: [
    {
      title: "Documentation",
      items: [
        { label: "Scanner", to: "/getting-started/quick-start" },
        { label: "Jailbreak Feed", to: "/jailbreak-feed/dashboard" },
      ],
    },
    {
      title: "0DIN",
      items: [
        { label: "0din.ai", href: "https://0din.ai" },
        { label: "Products & Pricing", href: "https://0din.ai/products" },
        { label: "Research", href: "https://0din.ai/research" },
      ],
    },
  ],
  copyright: `Copyright © ${year} 0din.ai`,
};

function pickFooter(pathname: string, baseUrl: string): FooterContent {
  const stripped = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length)
    : pathname;
  const path = "/" + stripped.replace(/^\/+/, "").replace(/\/+$/, "");

  if (path === "/" || path === "") {
    return genericFooter;
  }
  if (path.startsWith("/jailbreak-feed")) {
    return jailbreakFooter;
  }
  return scannerFooter;
}

export default function Footer(): JSX.Element | null {
  const { pathname } = useLocation();
  const baseUrl = useBaseUrl("/");
  const { links, copyright } = pickFooter(pathname, baseUrl);

  return (
    <FooterLayout
      style="dark"
      links={<FooterLinks links={links} />}
      logo={undefined}
      copyright={<FooterCopyright copyright={copyright} />}
    />
  );
}
