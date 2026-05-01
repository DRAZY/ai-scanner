import React, { type ReactNode } from "react";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { TitleFormatterProvider } from "@docusaurus/theme-common/internal";

const BASE_TITLE = "0din.ai Docs";
const SCANNER_TITLE = "0din.ai Scanner Docs";
const JAILBREAK_TITLE = "0din.ai Jailbreak Feed Docs";

function pickSiteTitle(pathname: string, baseUrl: string): string {
  const stripped = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length)
    : pathname;
  const path = "/" + stripped.replace(/^\/+/, "").replace(/\/+$/, "");

  if (path === "/" || path === "") return BASE_TITLE;
  if (path.startsWith("/jailbreak-feed")) return JAILBREAK_TITLE;
  return SCANNER_TITLE;
}

export default function ThemeProviderTitleFormatter({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const { pathname } = useLocation();
  const baseUrl = useBaseUrl("/");
  const siteTitle = pickSiteTitle(pathname, baseUrl);

  const formatter = (params: {
    title?: string;
    titleDelimiter: string;
  }): string => {
    const trimmed = params.title?.trim();
    if (!trimmed || trimmed === siteTitle) return siteTitle;
    return `${trimmed} ${params.titleDelimiter} ${siteTitle}`;
  };

  return (
    <TitleFormatterProvider formatter={formatter}>
      {children}
    </TitleFormatterProvider>
  );
}
