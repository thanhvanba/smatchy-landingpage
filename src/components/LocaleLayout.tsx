// components/LocaleLayout.tsx
// Wraps all routes under /en or /fr — syncs URL locale to LangContext + localStorage
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  useLocale,
  type Lang,
} from "../contexts/LangContext";

export default function LocaleLayout() {
  const location = useLocation();
  const { locale, setLocale } = useLocale();

  // Extract locale from the first path segment: /en/... or /fr/...
  const pathSegments = location.pathname.split("/");
  const urlLocale = pathSegments[1] as Lang;

  // If URL locale is invalid, redirect to default
  if (!urlLocale || !SUPPORTED_LOCALES.includes(urlLocale)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  }

  // Sync URL locale → context (source of truth is the URL)
  useEffect(() => {
    if (urlLocale && SUPPORTED_LOCALES.includes(urlLocale)) {
      if (locale !== urlLocale) {
        setLocale(urlLocale);
      }
      document.documentElement.lang = urlLocale;
    }
  }, [urlLocale, locale, setLocale]);

  return <Outlet />;
}
