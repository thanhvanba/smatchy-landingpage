import Loading from "../../../components/Loading";
import { useInvestor } from "../../../hooks/useInvestor";
import { InvestorPopulateType } from "../../../services/strapi";
import Yay3 from "/Yay3.png"; // thay đường dẫn hình ảnh của bạn

// const roadmap = [
//   {
//     quarter: "Q1",
//     title: "Fundraising & Monetization",
//     items: [
//       "Fundraising TMC for 20% equity to accelerate growth",
//       "Launch of commissions and advertising model",
//     ],
//   },
//   {
//     quarter: "Q2",
//     title: "B2B & Gamification Launch",
//     items: [
//       "Deployment of B2B offers for coaches and clubs",
//       "Introduction of gamification and rewards features",
//     ],
//   },
//   {
//     quarter: "Q3",
//     title: "Geographic Expansion",
//     items: [
//       "Deployment to new countries after successful product validation",
//       "Local adaptation and partnerships",
//     ],
//   },
//   {
//     quarter: "Q4",
//     title: "Strategic Partnerships",
//     items: [
//       "Establish alliances with major sports and lifestyle brands",
//       "Co-marketing and sponsorship programs",
//     ],
//   },
// ];
const quarterItems = {
  Q1: "Q1",
  Q2: "Q2",
  Q3: "Q3",
  Q4: "Q4",
};

export default function RoadmapSection() {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
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
      block.__component === "blocks.title" &&
      block.title === "Section: 12-24 MONTH ROADMAP"
  );

  const roadmap = stats?.blocks?.find(
    (block: any): block is any => block.title === "12-24 month Roadmap"
  );

  //console.log(roadmap);

  return (
    <div
      className="container relative z-30 pb-8! md:pb-12! lg:pb-16!"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Tiêu đề */}
      <div className="flex flex-col items-center">
        <div className="inline-flex">
          <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-7 lg:mb-8">
            <div
              dangerouslySetInnerHTML={{
                __html: titleBlock.heading ? titleBlock.heading : "",
              }}
            />{" "}
            <img
              className="absolute -top-8 -right-8 md:-top-10 md:-right-10 lg:-top-10 lg:-right-10 w-12 md:w-16 lg:w-auto"
              src={Yay3}
              alt="decor"
            />
          </div>
        </div>
      </div>

      {/* Các khối Q1–Q4 */}
      <div className="bg-[#E2F6F6] p-4 md:p-5 lg:p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {roadmap.stats_item.map((step: any, index: number) => (
            <div
              key={index}
              className={`flex flex-col justify-between text-white gap-2 md:gap-3 pr-2 md:pr-4 lg:pr-5 ${
                index < roadmap.length - 1
                  ? "md:border-b lg:border-b-0 lg:border-r lg:border-[#0A4A6026]"
                  : ""
              }`}
            >
              <div className="h-12 md:h-14 lg:h-16 w-12 md:w-14 lg:w-16 flex items-center justify-center text-base md:text-lg lg:text-xl text-white font-bold bg-[#0A4A60] rounded-full">
                {Object.values(quarterItems)[index]}
              </div>

              <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#0A4A60] max-w-[200px]">
                {step.title}
              </h3>

              <ul
                className="
                  list-disc
                  marker:text-base md:marker:text-lg lg:marker:text-xl marker:text-[#0A4A60]
                  pl-4 md:pl-5 lg:pl-6
                  flex flex-col
                  gap-0.5 md:gap-1
                  text-xs md:text-sm lg:text-sm
                  text-[#0F262E]
                "
              >
                <li>{step.heading}</li>
                <li>{step.sub_heading}</li>
              </ul>

              {/* <ul className="list-disc marker:text-base md:marker:text-lg lg:marker:text-xl marker:text-[#0A4A60] pl-4 md:pl-5 lg:pl-6 flex flex-col gap-1 text-xs md:text-sm lg:text-sm text-[#0F262E] space-y-0.5 md:space-y-1">
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
