// contexts/LangContext.tsx
import { useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Lang = "en" | "fr" | "vi";
interface ILang {
  locale: Lang;
  setLocale: (l: Lang) => void;
}

const LangContext = createContext<ILang>({ locale: "en", setLocale: () => {} });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Lang>(() => {
    const saved = localStorage.getItem("locale") as Lang | null;
    return saved || "en";
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    localStorage.setItem("locale", locale);
    // ❌ window.location.reload();   // <- bỏ dòng này
    queryClient.invalidateQueries(); // refetch tất cả query
  }, [locale, queryClient]);

  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLocale = () => useContext(LangContext);
