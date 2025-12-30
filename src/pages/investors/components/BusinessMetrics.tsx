import { FaArrowRightLong } from "react-icons/fa6";
import { useInvestor } from "../../../hooks/useInvestor";
import Loading from "../../../components/Loading";
import { InvestorPopulateType } from "../../../services/strapi";

const BusinessMetrics = () => {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.STATS);

  if (isLoading) return <Loading />;
  if (error) return null;

  //console.log(data);

  const block = data?.blocks?.find(
    (block: any): block is any =>
      (block.__component === "blocks.stats" &&
        block.title === "Business Metrics") ||
      block.title === " Mesures commerciales"
  );

  // const block = data?.blocks?.find((b: any) => b.id === 130);

  if (!block) return null;

  //console.log(block);

  const metrics = block.stats_item.map((item: any) => ({
    title: item.title,
    heading: item.heading,
    btn_label: item.button.label,
    btn_url: item.button.link,
  }));

  const btn = metrics.find((metric: any) => metric.btn_url);
  console.log(metrics);
  return (
    <div
      className="relative z-40 container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="bg-[#0A4A60] p-4 md:p-5 lg:p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {metrics.map((metric: any, index: number) => (
            <div
              key={index}
              className={`flex flex-col justify-between text-white gap-3 md:gap-4 pr-2 md:pr-5 ${
                index < metrics.length - 1
                  ? "md:border-r md:border-[#FFFFFF33]"
                  : ""
              }`}
            >
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-[38px] font-bold">
                  {metric.title}
                </h3>
                <p className="text-[#B0C4D4] text-xs md:text-sm lg:text-[18px]">
                  {metric.heading}
                </p>
              </div>
            </div>
          ))}
        </div>
        {btn && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() =>
                window.open(btn.btn_url, "_blank", "noopener,noreferrer")
              }
              className="flex justify-center items-center gap-2 text-white rounded-full px-6 md:px-8 py-2 text-xs md:text-sm lg:text-base font-semibold bg-[#D9D9D9A8] hover:bg-[#D9D9D9A8]/80 transition cursor-pointer"
            >
              {btn.btn_label} <FaArrowRightLong />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessMetrics;
