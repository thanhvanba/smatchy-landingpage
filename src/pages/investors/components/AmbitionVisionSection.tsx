import Yay from "/Yay3.png";
// import short from "/investors/short-term.png";
// import medium from "/investors/medium-term.png";
// import long from "/investors/long-term.png";
import Loading from "../../../components/Loading";
import { useInvestor } from "../../../hooks/useInvestor";
import { InvestorPopulateType } from "../../../services/strapi";

// const ambitionVisionData = [
//   {
//     icon: short,
//     phase: "SHORT-TERM",
//     goal: "Dominate the French market by 2028",
//     strategy:
//       "Focus on monetization, gamification, and local partnerships to strengthen user acquisition and brand trust.",
//     textColor: "#1A7D9C",
//   },
//   {
//     icon: medium,
//     phase: "MEDIUM-TERM",
//     goal: "Expand across Europe by 2035",
//     strategy:
//       "Deploy Smatchy in major European countries, build regional partnerships, and scale the B2B offering.",
//     textColor: "#C73F3F",
//   },
//   {
//     icon: long,
//     phase: "LONG-TERM",
//     goal: "Establish Smatchy as the global reference for athletic sports",
//     strategy:
//       "Create a connected global community bridging sport, technology, and inclusivity through innovation and impact.",
//     textColor: "#1F8554",
//   },
// ];

export default function AmbitionVisionSection() {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  if (isLoading) return <Loading />;
  if (error) return null;
  //console.log(data);

  const {
    data: stats,
    isLoading: isLoadingStats,
    error: errorStats,
  } = useInvestor(InvestorPopulateType.STATS);

  if (isLoadingStats) return <Loading />;
  if (errorStats) return null;

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "shared.icon-text" &&
      block.title === "Ambition & Long-Term Vision"
  );

  const ambitionVisionData = stats?.blocks?.find(
    (block: any): block is any => block.title === "Ambition & Long-Term Vision"
  );

  //console.log(ambitionVisionData);

  return (
    <div className="relative z-30 w-full mb-20 md:mb-28 lg:mb-40">
      <div className="container pt-8! md:pt-12! lg:pt-20!">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" inline-flex">
            <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8 lg:mb-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock.heading ? titleBlock.heading : "",
                }}
              />
              <img
                className="absolute -top-8 -right-8 md:-top-10 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="text-center text-[#0F262E] mb-8 md:mb-10 lg:mb-12 px-4 md:px-8 lg:px-32 text-sm md:text-base lg:text-xl font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: titleBlock.sub_heading ? titleBlock.sub_heading : "",
            }}
          />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {ambitionVisionData.stats_icon.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-5 lg:p-6 border shadow-sm flex flex-col items-center"
              style={{ borderColor: "#0F262E33" }}
            >
              <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 mb-2">
                <img
                  src={`${assetUrl}${item.icon.url}`}
                  alt={item.phase}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3
                className="text-sm md:text-base lg:text-lg font-bold text-[#0F262E] mb-2"
                style={{ color: item.textColor }}
              >
                {item.heading}
              </h3>
              <p className="flex-1 text-center text-xs md:text-sm lg:text-base text-[#0A4A60] font-bold mb-2 md:mb-3 lg:mb-3 leading-relaxed">
                {item.sub_heading}
              </p>

              <span className="text-xs md:text-sm lg:text-sm text-[#0F262E] text-center px-3 md:px-4 lg:px-6 rounded-full">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

