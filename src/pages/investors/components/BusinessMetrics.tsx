import { FaArrowRightLong } from "react-icons/fa6";

const metrics = [
  {
    value: "10%",
    description: "Commission per booking",
  },
  {
    value: "2.9M€",
    description: "BY 2028 Projected revenue growth",
  },
  {
    value: "85%",
    description: "Gross margin target",
  },
];

const BusinessMetrics = () => {
  return (
    <div
      className="relative z-40 container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="bg-[#0A4A60] p-4 md:p-5 lg:p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {metrics.map((metric, index) => (
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
                  {metric.value}
                </h3>
                <p className="text-[#B0C4D4] text-xs md:text-sm lg:text-[18px]">
                  {metric.description}
                </p>
              </div>
              <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-xs md:text-sm lg:text-base font-semibold bg-[#D9D9D9A8] transition">
                Learn More <FaArrowRightLong />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessMetrics;
