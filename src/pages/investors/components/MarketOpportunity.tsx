import { FaArrowRightLong } from "react-icons/fa6";
import Yay3 from "/Yay3.png";
// import global from "/investors/Global.png";
// import branded from "/investors/Branded.png";
// import flashon from "/investors/Flashon.png";
// import choiseul1 from "/investors/Choiseul 01.png";
// import choiseul2 from "/investors/Choiseul 4.png";
// import choiseul3 from "/investors/Choiseul 5.png";
import { useInvestor } from "../../../hooks/useInvestor";
import Loading from "../../../components/Loading";
import { InvestorPopulateType } from "../../../services/strapi";

// const marketData1 = [
//   {
//     image: global,
//     label: "TAM (Total Addressable Market)",
//     value: "14.7B€",
//     description: "European adult sports practitioners market.",
//   },
//   {
//     image: branded,
//     label: "SAM (Serviceable Available Market)",
//     value: "2.94B€",
//     description:
//       "Segment interested in social sports and addressable by Smatchy. Assumption: 23M at 100€/year.",
//   },
//   {
//     image: flashon,
//     label: "SOM (Serviceable Obtainable Market)",
//     value: "2.9M€ (2028)",
//     description: "Smatchy’s 5-year revenue target. Assumption: 0.098% of SAM.",
//   },
// ];

// const growthImages = [choiseul1, choiseul2, choiseul3];

export default function MarketOpportunity() {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const {
    data: stats,
    isLoading: isLoadingStats,
    error: errorStats,
  } = useInvestor(InvestorPopulateType.STATS);

  if (isLoading) return <Loading />;
  if (error) return null;

  if (isLoadingStats) return <Loading />;
  if (errorStats) return null;

  //console.log(data);
  console.log(stats);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      (block.__component === "blocks.title" &&
        block.title === "Title: Market Opportunity") ||
      block.title === "Title:  Opportunité de marché"
  );

  const marketData = stats?.blocks?.find(
    (block: any): block is any =>
      (block.__component === "blocks.stats" &&
        block.title === "Item: Market Opportunity") ||
      block.title === "Item:  Opportunité de marché"
  );

  const growthImages = data?.blocks?.find(
    (block: any): block is any =>
      (block.__component === "hero.slider" &&
        block.title === "Image: Market Opportunity") ||
      block.title === "Image: Opportunité de marché"
  );

  //console.log(growthImages);

  // const marketData1 = statsBlock.stats_icon.map((item: any) => ({
  //   heading: item.heading,
  //   sub_heading: item.sub_heading,
  //   description: item.description,
  // }));

  //console.log(marketData1);

  return (
    <div>
      <div className="relative w-full z-20">
        <div className="absolute w-[110vw] h-80 md:h-[422.38px] -top-[50px] -left-5 rotate-[-4.99deg] opacity-100 bg-[#E2F6F6]"></div>
        <div className="absolute w-[110vw] h-80 md:h-[422.38px] top-[220px] -left-5 rotate-[6.24deg] opacity-100 bg-[#E2F6F6]"></div>
      </div>
      <div
        className="relative z-30 container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center items-center py-8 md:py-10 lg:py-24 gap-8 md:gap-10 lg:gap-12">
          {/* Section Title */}
          <div className=" inline-flex pt-5">
            <div className="relative z-40 text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold uppercase">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock.title ? titleBlock.heading : "",
                }}
              />
              <img
                className="absolute -top-8 -right-8 md:-top-12 md:-right-12 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </div>
          </div>
          {titleBlock.button.map((item: any) => (
            <button
              key={item.id}
              onClick={() =>
                item.link &&
                window.open(item.link, "_blank", "noopener,noreferrer")
              }
              disabled={!item.link}
              className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FCA13B] bg-[#FCA13B]/90 transition"
            >
              {item.label} <FaArrowRightLong />
            </button>
          ))}

          {/* Market Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {marketData.stats_icon.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border shadow-sm flex flex-col items-center text-center"
                style={{ borderColor: "#0A4A605C" }}
              >
                <img
                  src={`${assetUrl}${item.icon.url}`}
                  alt={item.label}
                  className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 rounded-full object-cover mb-2"
                />
                <div className="text-2xl md:text-3xl lg:text-[38px] font-bold tracking-tight mb-2 text-[#0A4A60]">
                  {item.heading}
                </div>
                <div className="text-base md:text-lg lg:text-2xl font-bold text-[#0F262E] mb-1 whitespace-pre-line">
                  {/* {item.label.replace("(", "\n(")}
                   */}
                  {item.sub_heading.replace("(", "\n(")}
                </div>
                <p className="text-xs md:text-sm lg:text-sm text-[#0F262E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="relative z-40 container grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 lg:gap-36 justify-items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {growthImages.slider_images.map((src: any, id: number) => (
          <div key={id} className=" rounded-full overflow-hidden shadow-lg">
            <img
              src={`${assetUrl}${src.url}`}
              alt={`Growth visual ${id + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
