import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
import { useLocale } from "../../contexts/LangContext";
import { privacyPolicyTexts } from "../../config/legalPagesConfig";
import { usePostBySlug } from "../../hooks/usePost";
import Loading from "../../components/Loading";
import "./style.css";
export default function PrivacyPolicy() {
  const { locale } = useLocale();
  const { data, isLoading, isError, error } = usePostBySlug("privacy-policy");
  const post = data?.data?.[0].content;

  if (isLoading) return <Loading />;

  if (isError) {
    return <div className="container">Error: {error?.message}</div>;
  }

  return (
    <div>
      <div
        className="relative w-full h-16 md:h-20 pt-10 md:pt-16 lg:pt-20 z-50"
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
                {(privacyPolicyTexts.titleHighlight as any)[locale]}
              </span>
              {(privacyPolicyTexts.titleEnd as any)[locale]}
              <img
                className="absolute -top-6 md:-top-8 lg:-top-16 -right-8 md:-right-12 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2>
          </div>
          {/* <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-xs md:text-sm lg:text-base leading-relaxed text-[#0F262E]">
              {(privacyPolicyTexts.intro as any)[locale]}
            </p>
          </div> */}
          <div
            className="prose max-w-none"
            data-aos="fade-up"
            data-aos-duration="1000"
            dangerouslySetInnerHTML={{ __html: post || "" }}
          />
          {/* {(privacyPolicyTexts.sections as any)[locale].map(
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
                  {section.content}
                </p>
              </div>
            )
          )} */}

          {/* <div
            className="p-2 md:p-4 lg:p-6 rounded-xl bg-[#0A4A6026]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="leading-relaxed text-[#0F262E] space-y-3 text-xs md:text-sm lg:text-base">
              <div>
                <h3 className="font-bold">
                  {(privacyPolicyTexts.contact as any)[locale]}
                </h3>
                <p>
                  <a
                    className="text-[#0A4A60] font-semibold underline"
                    href="mailto:donneespersonnelles@smatchy.app"
                  >
                    donneespersonnelles@smatchy.app
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold">
                  {(privacyPolicyTexts.supervisoryAuthority as any)[locale]}
                </h3>
                <p>CNIL, 3 Place de Fontenoy, 75334 Paris Cedex 07</p>
              </div>
            </div>
          </div> */}

          {/* <div
            className="p-2 md:p-4 lg:p-6 rounded-xl bg-[#0A4A6026]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="leading-relaxed text-[#0F262E] text-xs md:text-sm lg:text-base">
              <p>
                <span className="font-bold">
                  {(privacyPolicyTexts.lastUpdated as any)[locale]}{" "}
                </span>
                {(privacyPolicyTexts.lastUpdatedDate as any)[locale]}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
