import { FaArrowRightLong } from "react-icons/fa6";
import Loading from "../../../components/Loading";
import { useInvestor } from "../../../hooks/useInvestor";
import { InvestorPopulateType } from "../../../services/strapi";
import Yay3 from "/Yay3.png";
import { useState } from "react";
export default function ProductFeatures() {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  const [videoLoaded, setVideoLoaded] = useState(true);

  if (isLoading) return <Loading />;
  if (error) return null;

  const handleVideoError = () => {
    setVideoLoaded(false);
  };

  if (!videoLoaded) {
    return null; // hoặc <div className="w-full h-0"></div> nếu muốn giữ khoảng trống
  }
  //console.log(data);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      (block.__component === "shared.icon-text" &&
        block.title === "PRODUCT & FEATURES") ||
      block.title === "PRODUIT ET FONCTIONNALITÉS"
  );

  // const videoBlock = data?.blocks?.find(
  //   (block: any): block is any =>
  //     block.__component === "shared.media" &&
  //     block.title === "Video"
  // );

  return (
    <div className="relative z-30 pt-20">
      <div className="relative w-full z-20">
        <div className="absolute -left-5 w-[110vw] h-80 md:h-[486.38px] -top-[30px] md:-top-[50px] -rotate-[4.99deg] bg-[#E2F6F6] opacity-100" />
        <div className="absolute -left-5 w-[120vw] h-96 md:h-[896.38px] top-[120px] md:top-[220px] rotate-[6.24deg] bg-[#E2F6F6] opacity-100" />
      </div>
      <div
        className="container relative z-30 py-8! md:py-10!"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center">
          <div className=" inline-flex">
            <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-4 md:mb-6 lg:mb-8">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock.heading ? titleBlock.heading : "",
                }}
              />
              <img
                className="absolute -top-8 -right-8 md:-top-10 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </div>

            {/* <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-4 md:mb-6 lg:mb-8">
              <span className="text-[#FCA13B]">PRODUCT</span>
              & FEATURES
              <img
                className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2> */}
          </div>
          <div className="text-center text-[#0A4A60] mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-base">
            <div
              dangerouslySetInnerHTML={{
                __html: titleBlock.sub_heading ? titleBlock.sub_heading : "",
              }}
            />
          </div>

          <div className="mb-6 md:mb-7 lg:mb-8">
            {/* <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
              Learn More <FaArrowRightLong />
            </button> */}
            <button
              onClick={() =>
                titleBlock.button.link &&
                window.open(
                  titleBlock.button.link,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              disabled={!titleBlock.button.link}
              className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FCA13B] bg-[#FCA13B]/90 transition"
            >
              {titleBlock.button.label}
              <FaArrowRightLong />
            </button>
          </div>

          <div className="w-full">
            <video
              src="/VIDEO_PITCH_SMATCHY.mp4"
              className="w-full"
              controls
              onError={handleVideoError}
              autoPlay={false}
              muted={false}
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}
