import { useNavigate } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";
import Loading from "./Loading";
import backgroundFooter from "/background-footer.png";
import Facebook from "/Facebook.svg";
import instagram from "/Instagram.svg";
import LinkedIn from "/LinkedIn.svg";
import Tiktok from "/Tiktok.svg";
import Youtube from "/Youtube.svg";
import { useLocale } from "../contexts/LangContext";
import { footerTexts } from "../config/layoutConfig";
console.log("🚀 ~ footerTexts:", footerTexts);
import logo from "/footer-logo.svg";

export default function Footer() {
  const { locale } = useLocale();
  const { data, isLoading, error } = useGlobal();
  //console.log("🚀 ~ Footer ~ data:", data);

  const navigate = useNavigate();
  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //console.log(sortedLegal);

  // Icon mapping by platform
  const platformIcons: Record<string, string> = {
    instagram: instagram,
    tiktok: Tiktok,
    linkedin: LinkedIn,
    facebook: Facebook,
    youtube: Youtube,
  };

  //const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const socialData = data?.social || [];

  return (
    <footer className="relative">
      <div
        className="z-30"
        style={{
          width: "120vw",
          height: "497.33px",
          position: "absolute",
          top: "-180px",
          left: "0px",
          transform: "rotate(-7.67deg)",
          opacity: 1,
          backgroundColor: "#E2F6F6",
        }}
      ></div>
      {/* Main footer content */}
      <div
        // className="relative z-10 bg-cover bg-no-repeat bg-top"
        // style={{ backgroundImage: `url(${backgroundFooter})` }}
        className="relative w-full h-auto lg:h-[280px] z-30"
        style={{
          backgroundImage: `url(${backgroundFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 py-8 md:py-12">
            {/* Logo column */}
            <div className="w-full md:w-1/5 flex justify-center md:justify-start shrink-0">
              <img
                // src={`${assetUrl}${data?.favicon.url}`}
                src={logo}
                alt="Company Logo"
                className="h-10 w-10 md:h-24 md:w-24 object-contain"
                loading="lazy"
              />
            </div>

            {/* Right content */}
            <div className="w-full md:w-4/5 text-white font-bold">
              {/* Social networks row */}
              <div className="flex flex-col items-center md:items-start mb-6 md:mb-8">
                <h3 className="text-base md:text-2xl mb-3 md:mb-4">
                  {(footerTexts.socialHeading as any)[locale]}
                </h3>

                {/* Loading state */}
                {isLoading ? (
                  <div className="text-white/70 text-sm">
                    {(footerTexts.socialLoading as any)[locale]}
                  </div>
                ) : (
                  <nav aria-label="Social networks">
                    <ul className="flex gap-3 md:gap-5 justify-center">
                      {socialData.map((social: any) => {
                        const platformLower = social.platform?.toLowerCase();
                        const icon = platformIcons[platformLower];
                        return (
                          <li key={social.id}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-2 rounded-lg hover:bg-white/10 transition-colors"
                              aria-label={social.platform}
                            >
                              {icon && (
                                <img
                                  src={icon}
                                  alt={social.platform}
                                  className="h-10 w-10 md:h-16 md:w-16 object-contain"
                                  loading="lazy"
                                />
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                )}
              </div>

              {/* Legal links row */}
              <nav aria-label="Legal pages" className="pt-2 md:pt-4">
                <ul className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-3">
                  {(footerTexts.legalLinks as any).map((link: any) => (
                    <li key={link.path} className="text-center">
                      <button
                        onClick={() => navigate(link.path)}
                        className="text-white/90 hover:text-white transition-colors py-2 px-1 hover:underline underline-offset-4 w-full cursor-pointer"
                      >
                        {(link.label as any)[locale]}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
