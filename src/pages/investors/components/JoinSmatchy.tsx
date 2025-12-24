import { MdCalendarToday, MdOutlineFileDownload } from "react-icons/md";
import background from "/background.png";
import Yay from "/Yay.png";
import { InvestorPopulateType } from "../../../services/strapi";
import { useInvestor } from "../../../hooks/useInvestor";
import Loading from "../../../components/Loading";

export default function JoinSmatchy() {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  if (isLoading) return <Loading />;
  if (error) return null;
  //console.log(data);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "hero.slider" &&
      block.title === "CTA: JOIN THE SMATCHY ADVENTURE"
  );

  const ctaDownload = titleBlock?.button?.[0];
  const ctaSchedule = titleBlock?.button?.[1];

  //console.log(ctaDownload);
  return (
    <div
      className="relative z-30 w-full h-[300px] lg:h-[386px] mb-40 lg:mb-80 bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container py-8! md:py-12! lg:py-16!">
        <div className="flex flex-col items-center">
          <div
            className=" inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-4 md:mb-6 lg:mb-12">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock.heading ? titleBlock.heading : "",
                }}
              />
              <img
                className="absolute -top-10 -right-8 md:-top-12 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay}
                alt=""
              />
            </div>
          </div>
          <div
            className="text-center text-white mb-4 md:mb-6 lg:mb-12 text-xs md:text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: titleBlock.sub_heading ? titleBlock.sub_heading : "",
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
            <button
              onClick={() =>
                ctaDownload.link &&
                window.open(ctaDownload.link, "_blank", "noopener,noreferrer")
              }
              disabled={!ctaDownload.link}
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex justify-center items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full cursor-pointer bg-[#F49F3F] hover:bg-[#F49F3F]/90 text-white text-xs md:text-sm lg:text-base"
            >
              <MdOutlineFileDownload size={20} /> {ctaDownload.label}
            </button>

            {/* <button
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex justify-center items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-white text-[#0A4A60] text-xs md:text-sm lg:text-base"
            >
              <MdLocalPhone size={20} /> Schedule a call
            </button> */}

            <button
              onClick={() =>
                ctaSchedule.link &&
                window.open(ctaSchedule.link, "_blank", "noopener,noreferrer")
              }
              disabled={!ctaSchedule.link}
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex justify-center items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full cursor-pointer bg-white hover:bg-white/90 text-[#0A4A60] text-xs md:text-sm lg:text-base"
            >
              <MdCalendarToday size={20} /> {ctaSchedule.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
