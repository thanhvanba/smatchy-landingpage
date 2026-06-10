import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { NavigateOptions } from "react-router-dom";
import { useLocale, SUPPORTED_LOCALES } from "../contexts/LangContext";

/**
 * Hook that wraps useNavigate to automatically prefix paths with the current locale.
 *
 * Usage:
 *   const navigate = useLocalizedNavigate();
 *   navigate("/blogs");        // → /en/blogs (if current locale is en)
 *   navigate("/blogs/my-post"); // → /fr/blogs/my-post (if current locale is fr)
 */
export default function useLocalizedNavigate() {
  const navigate = useNavigate();
  const { locale } = useLocale();

  const localizedNavigate = useCallback(
    (to: string | number, options?: NavigateOptions) => {
      if (typeof to === "number") {
        navigate(to);
        return;
      }

      // External URLs or hash links — pass through
      if (to.startsWith("http") || to.startsWith("#")) {
        navigate(to, options);
        return;
      }

      // Already has locale prefix — pass through
      const localeMatch = to.match(/^\/([a-z]{2})(\/|$)/);
      if (localeMatch && SUPPORTED_LOCALES.includes(localeMatch[1] as any)) {
        navigate(to, options);
        return;
      }

      // Add locale prefix
      const path = to.startsWith("/") ? to : `/${to}`;
      navigate(`/${locale}${path}`, options);
    },
    [navigate, locale],
  );

  return localizedNavigate;
}

/**
 * Helper to build a localized path (for active state detection, Link `to` prop, etc.)
 */
export function buildLocalizedPath(path: string, locale: string): string {
  if (path.startsWith("http") || path.startsWith("#")) return path;

  const localeMatch = path.match(/^\/([a-z]{2})(\/|$)/);
  if (localeMatch && SUPPORTED_LOCALES.includes(localeMatch[1] as any)) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}
