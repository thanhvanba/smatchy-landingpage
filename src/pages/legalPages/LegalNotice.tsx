import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
import { useLocale } from "../../contexts/LangContext";
import { legalNoticeTexts } from "../../config/legalPagesConfig";

export default function LegalNotice() {
  const { locale } = useLocale();

  const renderContent = (text: string) => {
    const nodes: React.ReactNode[] = [];
    const regex =
      /(?<!")Smatchy(?!")|\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b|\b(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s.,!?")\]]*)?\b/g;

    let lastIndex = 0;
    let matchIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const index = match.index;
      const token = match[0];

      if (index > lastIndex) {
        nodes.push(text.slice(lastIndex, index));
      }

      if (token === "Smatchy") {
        nodes.push(
          <span key={matchIndex} className="text-[#FCA13B] font-bold">
            {token}
          </span>
        );
      } else if (token.includes("@")) {
        nodes.push(
          <a
            key={matchIndex}
            href={`mailto:${token}`}
            className="text-[#0A4A60] font-bold underline"
          >
            {token}
          </a>
        );
      } else {
        nodes.push(
          <a
            key={matchIndex}
            href={`https://${token}`}
            target="_blank"
            rel="noreferrer"
            className="text-[#0A4A60] font-bold underline"
          >
            {token}
          </a>
        );
      }

      lastIndex = index + token.length;
      matchIndex++;
    }

    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex));
    }

    return nodes.map((node, i) =>
      typeof node === "string" ? <span key={i}>{node}</span> : node
    );
  };

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
        <div className="relative flex flex-col gap-3 md:gap-4 lg:gap-6 bg-[#E2F6F6] shadow rounded-2xl p-4 md:p-6 lg:p-8 mt-8 md:mt-16 lg:mt-20 mb-52 z-40">
          <div
            className="inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="relative text-center text-xl md:text-2xl lg:text-5xl text-[#0A4A60] font-bold pt-2 md:pt-3 lg:pt-4">
              <span className="text-[#FCA13B]">
                {(legalNoticeTexts.titleHighlight as any)[locale]}
              </span>
              {(legalNoticeTexts.titleEnd as any)[locale]}
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
            {(legalNoticeTexts.infoRows as any).map(
              (row: any, index: number) => (
                <div key={index} className="inline-flex">
                  <p className="text-xs md:text-sm lg:text-base">
                    <span className="font-bold text-[#0F262E]">
                      {row.label[locale]}{" "}
                    </span>
                    {row.value[locale]}
                  </p>
                </div>
              )
            )}
          </div>

          {(legalNoticeTexts.sections as any)[locale].map(
            (section: any, index: number) => (
              <div
                key={index}
                className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
                  {section.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base leading-relaxed text-[#0F262E]">
                  {renderContent(section.content)}
                </p>

                {section.cardLines && (
                  <div className="p-2 md:p-4 lg:p-6 rounded-xl bg-[#0A4A6026]">
                    <div className="leading-relaxed text-[#0F262E] space-y-1.5 text-xs md:text-sm lg:text-base">
                      {section.cardLines.map(
                        (line: string, lineIndex: number) => (
                          <p key={lineIndex}>{renderContent(line)}</p>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
