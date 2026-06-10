import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, useLocale } from "../contexts/LangContext";
import { translatePath } from "../utils/localePathMap";

/**
 * Strapi media object (metaImage)
 */
interface StrapiMedia {
  id?: number;
  url?: string;
  alternativeText?: string | null;
  formats?: {
    thumbnail?: { url?: string };
    small?: { url?: string };
    medium?: { url?: string };
    large?: { url?: string };
  };
}

/**
 * Strapi openGraph component (nested inside shared.seo)
 */
interface StrapiOpenGraph {
  id?: number;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogUrl?: string | null;
  ogType?: string | null;
}

/**
 * Matches the Strapi shared.seo component schema.
 * Works for both page blocks and slug-based entities.
 */
export interface StrapiSEO {
  id?: number;
  __component?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  metaRobots?: string | null;
  metaViewport?: string | null;
  canonicalURL?: string | null;
  structuredData?: Record<string, unknown> | null;
  metaImage?: StrapiMedia | null;
  openGraph?: StrapiOpenGraph | null;
  // Legacy flat fields (some endpoints may use these)
  metaAuthor?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

interface SEOProps {
  /** Pass the full Strapi seo object — all fields are extracted automatically */
  seo?: StrapiSEO | null;

  // --- Legacy / override props (take precedence over seo object) ---
  title?: string;
  description?: string;
  keyword?: string;
  author?: string;
  name?: string;
  type?: string;
  ogurl?: string;
  ogimage?: string;
}

/** Resolve the full image URL from a Strapi media object */
function resolveImageUrl(
  media: StrapiMedia | null | undefined,
  assetBaseUrl: string,
): string {
  if (!media?.url) return "";
  if (media.url.startsWith("http")) return media.url;
  return `${assetBaseUrl}${media.url}`;
}

/** Build absolute URL from a path */
function buildAbsoluteUrl(path: string): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://smatchy.app";
  return `${origin}${path}`;
}

const ASSET_URL = import.meta.env.VITE_STRAPI_ASSET_URL || "";

export default function SEO({
  seo,
  title,
  description,
  name,
  type,
  keyword,
  author,
  ogurl,
  ogimage,
}: SEOProps) {
  const location = useLocation();
  const { locale } = useLocale();

  // --- Extract from nested Strapi structures ---
  const og = seo?.openGraph;
  const metaImageUrl = resolveImageUrl(seo?.metaImage, ASSET_URL);

  // --- Merge: explicit props > openGraph > seo flat fields > defaults ---
  const metaTitle = title || seo?.metaTitle || "";
  const metaDescription = description || seo?.metaDescription || "";
  const metaKeywords = keyword || seo?.keywords || "";
  const metaAuthor = author || name || seo?.metaAuthor || "Smatchy";

  const ogType = type || og?.ogType || "website";
  const ogTitleVal = og?.ogTitle || seo?.ogTitle || metaTitle;
  const ogDescVal = og?.ogDescription || seo?.ogDescription || metaDescription;
  const ogImageUrl = ogimage || seo?.ogImage || metaImageUrl;
  const ogUrl = ogurl || og?.ogUrl || seo?.canonicalURL || "";

  const canonicalUrl = seo?.canonicalURL || ogurl || "";
  const metaRobots = seo?.metaRobots || null;
  const metaViewport = seo?.metaViewport || null;
  const structuredData = seo?.structuredData || null;

  // --- Build hreflang alternate URLs ---
  const currentPath = location.pathname;
  const hreflangLinks = SUPPORTED_LOCALES.map((lang) => ({
    lang,
    href: buildAbsoluteUrl(translatePath(currentPath, locale, lang)),
  }));
  const xDefaultHref = buildAbsoluteUrl(
    translatePath(currentPath, locale, DEFAULT_LOCALE),
  );

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      <meta name="author" content={metaAuthor} />

      {/* Robots directive */}
      {metaRobots && <meta name="robots" content={metaRobots} />}

      {/* Viewport override (if provided by Strapi) */}
      {metaViewport && <meta name="viewport" content={metaViewport} />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Hreflang alternate links */}
      {hreflangLinks.map(({ lang, href }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultHref} />

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitleVal} />
      <meta property="og:description" content={ogDescVal} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:locale" content={locale === "fr" ? "fr_FR" : "en_US"} />
      {SUPPORTED_LOCALES.filter((l) => l !== locale).map((altLocale) => (
        <meta
          key={altLocale}
          property="og:locale:alternate"
          content={altLocale === "fr" ? "fr_FR" : "en_US"}
        />
      ))}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitleVal} />
      <meta name="twitter:description" content={ogDescVal} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
      {metaAuthor && <meta name="twitter:creator" content={metaAuthor} />}

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional meta tags */}
      <meta name="theme-color" content="#FCA13B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
}
