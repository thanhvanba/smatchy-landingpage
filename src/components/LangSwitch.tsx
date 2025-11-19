import { useState } from "react";
import { useLocale } from "../contexts/LangContext";

const flags = {
  en: "https://flagcdn.com/w40/gb.png",
  fr: "https://flagcdn.com/w40/fr.png",
};
export default function LangSwitch() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Nút hình tròn hiện cờ đang chọn */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow focus:outline-none"
        aria-label="Change language"
      >
        <img
          src={flags[locale as keyof typeof flags]}
          alt={locale}
          className="w-full h-full object-cover"
        />
      </button>

      {/* Dropdown list */}
      {open && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg py-1 z-50 min-w-[60px]">
          {(Object.keys(flags) as Array<keyof typeof flags>).map((lng) => (
            <button
              key={lng}
              onClick={() => {
                setLocale(lng);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 transition ${
                lng === locale ? "bg-blue-50 font-semibold" : ""
              }`}
            >
              <img
                src={flags[lng]}
                alt={lng}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm uppercase">{lng}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
