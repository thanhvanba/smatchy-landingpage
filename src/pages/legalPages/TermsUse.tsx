import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
import { usePostBySlug } from "../../hooks/usePost";
import Loading from "../../components/Loading";
import { useLocale } from "../../contexts/LangContext";
import { termsOfUseTexts } from "../../config/legalPagesConfig";

export default function TermsUse() {
  const { locale } = useLocale();
  const { data, isLoading, isError, error } = usePostBySlug("terms-of-use");
  const post = data?.data?.[0];

  if (isLoading) return <Loading />;

  if (isError) {
    return <div className="container">Error: {error?.message}</div>;
  }
  console.log(post);
  const renderContent = (text: string) => {
    const nodes: React.ReactNode[] = [];
    const regex =
      /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b|\b[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\b|(?<!")Smatchy(?!")/g;

    let lastIndex = 0;
    let matchIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const index = match.index;
      const token = match[0];

      // text trước token
      if (index > lastIndex) {
        nodes.push(text.slice(lastIndex, index));
      }

      // Smatchy
      if (token === "Smatchy") {
        nodes.push(
          <span key={matchIndex} className="text-[#FCA13B] font-bold">
            {token}
          </span>
        );
      }
      // Email
      else if (token.includes("@")) {
        nodes.push(
          <a
            key={matchIndex}
            href={`mailto:${token}`}
            className="text-[#0A4A60] font-bold underline"
          >
            {token}
          </a>
        );
      }
      // Domain
      else {
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

    // text còn lại
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
            className="hidden md:block absolute w-auto -top-32 md:-top-40 lg:-top-52 left-4 md:left-10 lg:left-20 scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
          />
        </div>
        <div className="relative flex flex-col gap-4 md:gap-5 lg:gap-6 bg-[#E2F6F6] shadow rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mt-10 md:mt-14 lg:mt-20 mb-52 z-30">
          <div
            className="inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative text-center text-xl md:text-2xl lg:text-5xl text-[#0A4A60] font-bold pt-2 md:pt-3 lg:pt-4">
              <span className="text-[#FCA13B]">
                {(termsOfUseTexts.titleHighlight as any)[locale]}
              </span>
              {(termsOfUseTexts.titleEnd as any)[locale]}
              <img
                className="absolute -top-6 md:-top-8 lg:-top-16 -right-8 md:-right-12 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </div>
          </div>

          {(termsOfUseTexts.sections as any)[locale].map(
            (section: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
                    {section.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
                    {renderContent(section.content)}
                  </p>
                </div>
              );
            }
          )}

          <div
            className="p-6 rounded-xl bg-[#0A4A6026]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="leading-relaxed text-[#0F262E]">
              <p className="">
                <span className="font-bold">
                  {(termsOfUseTexts.version as any)[locale]}
                </span>
                {" " + (termsOfUseTexts.versionDate as any)[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
