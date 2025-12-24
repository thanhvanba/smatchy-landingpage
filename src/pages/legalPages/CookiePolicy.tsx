import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
import { useLocale } from "../../contexts/LangContext";
import { cookiePolicyTexts } from "../../config/legalPagesConfig";

export default function CookiePolicy() {
  const { locale } = useLocale();

  return (
    <div>
      <div
        className="relative w-full h-16 md:h-20 lg:h-24 pt-10 md:pt-16 lg:pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="container">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="hidden md:block absolute w-auto -top-40 md:-top-48 lg:-top-52 left-10 md:left-16 lg:left-20 scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
          />
        </div>
        <div className="relative flex flex-col gap-3 md:gap-4 lg:gap-6 bg-[#E2F6F6] shadow rounded-2xl p-4 md:p-6 lg:p-8 mt-8 md:mt-16 lg:mt-20 mb-52 z-30">
          <div
            className="inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="relative text-center text-xl md:text-2xl lg:text-5xl text-[#0A4A60] font-bold pt-2 md:pt-3 lg:pt-4">
              <span className="text-[#FCA13B]">
                {(cookiePolicyTexts.titleHighlight as any)[locale]}
              </span>
              {(cookiePolicyTexts.titleEnd as any)[locale]}
              <img
                className="absolute -top-6 md:-top-8 lg:-top-16 -right-8 md:-right-12 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="inline-flex">
              <p className="">
                <span className="font-bold text-[#0F262E]">
                  {(cookiePolicyTexts.publisherLabel as any)[locale]}{" "}
                </span>
                {(cookiePolicyTexts.publisherValue as any)[locale]}
              </p>
            </div>
            <div className="inline-flex">
              <p className="">{(cookiePolicyTexts.overview as any)[locale]}</p>
            </div>
          </div>

          {(cookiePolicyTexts.sections as any)[locale].map(
            (section: any, index: number) => (
              <div
                key={index}
                className="flex flex-col gap-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
                  {section.title}
                </h3>
                {section.content && (
                  <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="flex flex-col gap-2 list-disc marker:text-[#0A4A60]">
                    {section.list.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="ml-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}

          <div
            className="p-6 rounded-xl bg-[#0A4A6026]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="leading-relaxed text-[#0F262E]">
              <p>
                <span className="font-bold">
                  {(cookiePolicyTexts.lastUpdated as any)[locale]}{" "}
                </span>
                {(cookiePolicyTexts.lastUpdatedDate as any)[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
