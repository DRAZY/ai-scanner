import React from "react";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
// `theme-common/internal` is unstable across Docusaurus versions. Re-verify
// these imports on each major upgrade — there is no public API for
// path-conditional navbar items as of 3.x.
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import styles from "./styles.module.css";

const githubItem = {
  href: "https://github.com/0din-ai/ai-scanner",
  label: "GitHub",
  position: "right" as const,
};

function isScannerPath(pathname: string, baseUrl: string): boolean {
  const stripped = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length)
    : pathname;
  const path = "/" + stripped.replace(/^\/+/, "").replace(/\/+$/, "");
  if (path === "/" || path === "") return false;
  if (path.startsWith("/jailbreak-feed")) return false;
  return true;
}

function useNavbarItems() {
  const items = useThemeConfig().navbar.items as Array<Record<string, unknown>>;
  const { pathname } = useLocation();
  const baseUrl = useBaseUrl("/");
  if (isScannerPath(pathname, baseUrl)) {
    return [...items, githubItem];
  }
  return items;
}

function NavbarItems({ items }: { items: Array<Record<string, unknown>> }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error },
            )
          }
        >
          <NavbarItem {...(item as any)} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          "navbar__items",
        )}
      >
        {left}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          "navbar__items navbar__items--right",
        )}
      >
        {right}
      </div>
    </div>
  );
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items as any);
  const searchBarItem = items.find(
    (item) => (item as { type?: string }).type === "search",
  );
  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
