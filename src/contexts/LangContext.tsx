// contexts/LangContext.tsx
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createContext, useContext, type ReactNode } from "react";

export type Lang = "en" | "fr";
export const SUPPORTED_LOCALES: Lang[] = ["en", "fr"];
export const DEFAULT_LOCALE: Lang = "en";

interface ILang {
  locale: Lang;
  setLocale: (l: Lang) => void;
}

const LangContext = createContext<ILang>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Lang>(() => {
    // 1. Try to read from URL first
    const pathLocale = window.location.pathname.split("/")[1] as Lang;
    if (SUPPORTED_LOCALES.includes(pathLocale)) return pathLocale;

    // 2. Fallback to localStorage
    const saved = localStorage.getItem("locale") as Lang | null;
    if (saved && SUPPORTED_LOCALES.includes(saved)) return saved;

    // 3. Default
    return DEFAULT_LOCALE;
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    queryClient.invalidateQueries(); // refetch all queries with new locale
  }, [locale, queryClient]);

  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLocale = () => useContext(LangContext);
