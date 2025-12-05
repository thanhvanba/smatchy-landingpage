import Yay3 from "/Yay3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useInvestor } from "../../../hooks/useInvestor";
import { InvestorPopulateType } from "../../../services/strapi";
import Loading from "../../../components/Loading";
import { useTestimonials } from "../../../hooks/useTestimonials";
import ReviewSlider from "../../../components/ReviewSlider";

export default function PeopleSay() {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  // const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);

  const {
    data: investorTestimonials,
    isLoading: isTestimonialsLoading,
    error: testimonialsError,
  } = useTestimonials("investor");

  if (isTestimonialsLoading) return <Loading />;
  if (testimonialsError) return null;

  if (isLoading) return <Loading />;
  if (error) return null;

  //console.log(investorTestimonials);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "blocks.title" &&
      block.title === "Section: What people say"
  );
  const ctaButton = titleBlock?.button?.[0];
  // console.log(titleBlock.button.map((item) => item.label));

  const testimonials = investorTestimonials?.map((s) => ({
    id: s.id,
    name: s.author,
    text: s.content,
    rating: 5, // default
    image: s.avatar?.url, // "/uploads/avatar1_d95a6afcff.png"
  }));

  //console.log(testimonials)

  return (
    <div className="my-12 md:my-16 lg:my-32 px-4 z-30">
      <div
        className="relative flex flex-col items-center z-30"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container relative flex justify-center items-center z-30">
          <button
            className={`cursor-pointer absolute left-0 top-1/2 z-10 transform -translate-y-1/2  px-4 py-2 rounded-full ${
              isBeginning ? "text-[#C7CDCF]/60" : "text-[#FCA13B]"
            }`}
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            disabled={isBeginning}
          >
            <BsArrowLeftShort className="text-2xl md:text-6xl" />
          </button>
          <div className=" inline-flex">
            <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock.heading ? titleBlock.heading : "",
                }}
              />
              <img
                className="absolute -top-10 -right-10 md:-top-12 lg:-top-20 md:-right-14 lg:-right-20 w-12 md:w-20 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </div>

            {/* <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8">
              WHAT <span className="text-[#FCA13B]">PEOPLE</span> SAY
              <img
                className="absolute -top-12 -right-12 md:-top-20 md:-right-20 w-8 md:w-auto"
                src={Yay3}
                alt=""
              />
            </h2> */}
          </div>
          <button
            className={`cursor-pointer absolute right-0 top-1/2 z-10 transform -translate-y-1/2 px-4 py-2 rounded-full ${
              isEnd ? "text-[#C7CDCF]/60" : "text-[#FCA13B]"
            }`}
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            disabled={isEnd}
          >
            <BsArrowRightShort className="text-2xl md:text-6xl" />
          </button>
        </div>

        {ctaButton && (
          <div className="mb-8 md:mb-10">
            <button
              onClick={() =>
                ctaButton.link &&
                window.open(ctaButton.link, "_blank", "noopener,noreferrer")
              }
              disabled={!ctaButton.link}
              className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FCA13B] bg-[#FCA13B]/90 transition"
            >
              {ctaButton.label} <FaArrowRightLong />
            </button>
          </div>
        )}
      </div>
      <div
        className="relative z-30"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <ReviewSlider
          testimonials={testimonials!}
          swiperRef={swiperRef}
          onSlideChange={(begin, end) => {
            setIsBeginning(begin);
            setIsEnd(end);
          }}
        />
      </div>
    </div>
  );
}
