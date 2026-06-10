/**
 * Shared locale path mapping utilities.
 * Used by LangSwitch (for navigation) and SEO (for hreflang tags).
 */
import { SUPPORTED_LOCALES, type Lang } from "../contexts/LangContext";
import { headerTexts, footerTexts } from "../config/layoutConfig";

/**
 * Full path map: "/en/team" → { en: "/en/team", fr: "/fr/equipe" }
 */
function buildPathMap(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {};

  const allItems = [
    ...headerTexts.menu.map((m) => m.link),
    ...footerTexts.legalLinks.map((m) => m.path),
  ];

  for (const linkObj of allItems) {
    for (const fromLocale of SUPPORTED_LOCALES) {
      const fromPath = `/${fromLocale}${linkObj[fromLocale] === "/" ? "" : linkObj[fromLocale]}`;
      if (!map[fromPath]) map[fromPath] = {};
      for (const toLocale of SUPPORTED_LOCALES) {
        const toPath = `/${toLocale}${linkObj[toLocale] === "/" ? "" : linkObj[toLocale]}`;
        map[fromPath][toLocale] = toPath;
      }
    }
  }

  return map;
}

/**
 * Segment map: SEGMENT_MAP["en"]["events"] → { en: "events", fr: "evenements" }
 */
function buildSegmentMap(): Record<string, Record<string, Record<string, string>>> {
  const map: Record<string, Record<string, Record<string, string>>> = {};

  for (const loc of SUPPORTED_LOCALES) {
    map[loc] = {};
  }

  const allItems = [
    ...headerTexts.menu.map((m) => m.link),
    ...footerTexts.legalLinks.map((m) => m.path),
  ];

  for (const linkObj of allItems) {
    const segments: Record<string, string> = {};
    for (const loc of SUPPORTED_LOCALES) {
      const raw = linkObj[loc];
      segments[loc] = raw === "/" ? "" : raw.replace(/^\//, "");
    }
    for (const loc of SUPPORTED_LOCALES) {
      if (segments[loc]) {
        map[loc][segments[loc]] = { ...segments };
      }
    }
  }

  return map;
}

export const PATH_MAP = buildPathMap();
export const SEGMENT_MAP = buildSegmentMap();

/**
 * Translate a full URL path from one locale to another.
 * e.g. translatePath("/en/events/some-slug", "en", "fr") → "/fr/evenements/some-slug"
 */
export function translatePath(currentPath: string, fromLocale: Lang, toLocale: Lang): string {
  if (fromLocale === toLocale) return currentPath;

  // A) Exact match (static pages: /en/team → /fr/equipe)
  if (PATH_MAP[currentPath]?.[toLocale]) {
    return PATH_MAP[currentPath][toLocale];
  }

  // B) Dynamic route with sub-path: /en/events/some-slug → /fr/evenements/some-slug
  const deepMatch = currentPath.match(/^\/([a-z]{2})\/([^/]+)\/(.+)$/);
  if (deepMatch) {
    const baseSegment = deepMatch[2];
    const rest = deepMatch[3];
    const translated = SEGMENT_MAP[fromLocale]?.[baseSegment]?.[toLocale] || baseSegment;
    return `/${toLocale}/${translated}/${rest}`;
  }

  // C) Simple: /en/segment → /fr/translated-segment
  const simpleMatch = currentPath.match(/^\/([a-z]{2})\/([^/]+)$/);
  if (simpleMatch) {
    const segment = simpleMatch[2];
    const translated = SEGMENT_MAP[fromLocale]?.[segment]?.[toLocale] || segment;
    return `/${toLocale}/${translated}`;
  }

  // D) Root: /en → /fr
  if (/^\/[a-z]{2}\/?$/.test(currentPath)) {
    return `/${toLocale}`;
  }

  // Fallback
  return `/${toLocale}`;
}
