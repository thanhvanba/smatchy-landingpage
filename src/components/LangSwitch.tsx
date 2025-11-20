import { useState } from "react";
import { useLocale } from "../contexts/LangContext";

const flags = {
  en: "https://flagcdn.com/w40/gb.png",
  fr: "https://flagcdn.com/w40/fr.png",
};

const LABELS: Record<keyof typeof flags, string> = {
  en: "English",
  fr: "France",
};

export default function LangSwitch() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-0.5 md:gap-2 rounded-full px-1 py-1 focus:outline-none"
        aria-label="Change language"
      >
        <img
          src={flags[locale as keyof typeof flags]}
          alt={LABELS[locale as keyof typeof flags]}
          className="w-5 h-5 md:w-8 md:h-8 rounded-full object-cover"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-[#0A4A60]"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg py-1 z-50 min-w-[110px] text-black">
          {(Object.keys(flags) as Array<keyof typeof flags>).map((lng) => (
            <button
              key={lng}
              onClick={() => {
                setLocale(lng);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 transition ${
                lng === locale ? "bg-blue-50 font-semibold text-black" : ""
              }`}
            >
              <img
                src={flags[lng]}
                alt={LABELS[lng]}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm">{LABELS[lng]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
