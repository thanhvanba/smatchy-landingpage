import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { useLocale, SUPPORTED_LOCALES, type Lang } from "../contexts/LangContext";
import { useLocation, useNavigate } from "react-router-dom";
import { translatePath } from "../utils/localePathMap";

const LABELS: Record<string, string> = {
  en: "English",
  fr: "Français",
};

export default function LangSwitch() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleSwitch = (newLocale: Lang) => {
    if (newLocale === locale) {
      setOpen(false);
      return;
    }

    setLocale(newLocale);
    setOpen(false);

    const newPath = translatePath(location.pathname, locale, newLocale);
    navigate(newPath + location.search + location.hash);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 focus:outline-none bg-white/10 hover:bg-white/20 transition border border-white/30 cursor-pointer disabled:cursor-not-allowed"
        aria-label="Change language"
      >
        <FaGlobe className="w-5 h-5 text-white" />
        <span className="text-sm md:text-base font-medium text-white">
          {LABELS[locale]}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg py-1 z-50 min-w-[140px] text-black">
          {SUPPORTED_LOCALES.map((lng) => (
            <button
              key={lng}
              onClick={() => handleSwitch(lng)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 transition text-left cursor-pointer ${
                lng === locale
                  ? "bg-blue-50 font-semibold text-[#0A4A60]"
                  : "text-gray-700"
              }`}
            >
              <span className="text-sm">{LABELS[lng]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
