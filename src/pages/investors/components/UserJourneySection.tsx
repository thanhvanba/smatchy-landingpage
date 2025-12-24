import { FaArrowRightLong } from "react-icons/fa6";
import Yay3 from "/Yay3.png";
import { InvestorPopulateType } from "../../../services/strapi";
import { useInvestor } from "../../../hooks/useInvestor";
import Loading from "../../../components/Loading";
// const steps = [
//   {
//     number: "01",
//     label: "Step 1",
//     title: "Sign Up & Profile",
//     description: "Create profile with skill level, location, preferences",
//   },
//   {
//     number: "02",
//     label: "Step 2",
//     title: "Get Matched",
//     description: "Find perfect teammates & opponents nearby",
//   },
//   {
//     number: "03",
//     label: "Step 3",
//     title: "Book & Play",
//     description: "Reserve venues, pay through app, show up and play",
//   },
//   {
//     number: "04",
//     label: "Step 4",
//     title: "Earn & Grow",
//     description: "Coaches monetize sessions, athletes earn rewards",
//   },
// ];

const UserJourneySection = () => {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  if (isLoading) return <Loading />;
  if (error) return null;

  const {
    data: stats,
    isLoading: isLoadingStats,
    error: errorStats,
  } = useInvestor(InvestorPopulateType.STATS);

  if (isLoadingStats) return <Loading />;
  if (errorStats) return null;

  //console.log(stats);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      (block.__component === "shared.icon-text" &&
        block.title === "The User Journey") ||
      block.title === "Le parcours de l'utilisateur"
  );

  const steps = stats?.blocks?.find(
    (block: any): block is any =>
      (block.__component === "blocks.stats" &&
        block.title === "The User Journey") ||
      block.title === "Le parcours de l'utilisateur"
  );

  // Fallback values
  const heading = titleBlock?.heading || "The User Journey";
  const buttonLabel = titleBlock?.button?.label || "Get the App";

  //console.log(steps);

  const handleGetAppClick = () => {
    const userAgent =
      (typeof navigator !== "undefined" &&
        (navigator.userAgent || navigator.vendor || (window as any).opera)) ||
      "";
    const iosLink = "https://apps.apple.com/us/app/smatchy/id6473653332";
    const androidLink =
      "https://play.google.com/store/apps/details?id=com.smatchy.app&pcampaignid=web_share";
    const fallbackLink = "https://linktr.ee/smatchyapp";

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open(iosLink, "_blank", "noopener,noreferrer");
      return;
    }

    if (/Android/.test(userAgent)) {
      window.open(androidLink, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(fallbackLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative z-30 mb-32">
      <div className="container">
        <div className="flex flex-col items-center mt-10 md:mt-14 lg:mt-16">
          <div className=" inline-flex">
            <div
              className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8 lg:mb-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                 dangerouslySetInnerHTML={{
                   __html: heading,
                 }}
              />
              <img
                className="absolute -top-8 -right-8 md:-top-10 md:-right-12 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </div>
          </div>

          <div
            className="mb-6 md:mb-8 lg:mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
              Get the App <FaArrowRightLong />
            </button> */}
            <button
              onClick={() => handleGetAppClick()}
              className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FCA13B] bg-[#FCA13B]/90 transition"
            >
              {buttonLabel}
              <FaArrowRightLong />
            </button>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            {steps.stats_icon.map((step: any, index: number) => (
              <div key={index} className="group cursor-pointer">
                <div className="inline-flex rounded-2xl text-5xl md:text-6xl lg:text-7xl p-5 font-semibold group-hover:text-[#FCA13B] text-[#A2ABAF] bg mb-1 md:mb-2 lg:mb-4 group-hover:bg-linear-to-b from-[#FCA13B]/0 via-[#FCA13B]/10 to-[#FCA13B]/40">
                  {step.title}
                </div>
                <div className="bg-[#E2F6F6] group-hover:bg-[#0A4A60] rounded-xl p-6 flex gap-4 items-start shadow-sm">
                  <div>
                    {/* <div className="text-sm inline-flex font-semibold py-1 px-6 rounded-2xl bg-[#D9D9D9A8] bg-linear-to-r from-[#0A4A60]/.88 via-[#7F9EA6]/31 to-[#0A4A60]/65 mb-6">
                      {step.heading}
                    </div> */}
                    <div
                      className="text-sm inline-flex font-semibold py-1 px-6 rounded-2xl mb-6"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(10,74,96,0.88) 0%, rgba(127,158,166,0.31) 50.11%, rgba(10,74,96,0.65) 100%)," +
                          "linear-gradient(0deg, rgba(217,217,217,0.66), rgba(217,217,217,0.66))",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                      }}
                    >
                      {step.heading}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#0A4A60] group-hover:text-white mb-1">
                        {step.sub_heading}
                      </h3>
                      <p className="text-[#0F262E] group-hover:text-white leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourneySection;
