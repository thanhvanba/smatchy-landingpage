import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import quotation from "/quotation.png";
import type { ReviewSliderProps } from "../pages/home/types";
import "./ReviewSlider.css";

export default function ReviewSlider({
  testimonials,
  swiperRef,
  onSlideChange,
}: {
  testimonials: ReviewSliderProps[];
  swiperRef: React.RefObject<any>;
  onSlideChange?: (isBeginning: boolean, isEnd: boolean) => void;
}) {
  return (
    <>
      <Swiper
        initialSlide={1}
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            spaceBetween: 80,
          },
          1024: {
            spaceBetween: 100,
          },
        }}
        className="mySwiper"
        ref={swiperRef}
        onSlideChange={(s) => onSlideChange?.(s.isBeginning, s.isEnd)}
        onInit={(s) => onSlideChange?.(s.isBeginning, s.isEnd)}
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="w-[60%]!  md:w-[60%]! lg:w-[40%]! review-slide swiper-slide-item"
          >
            <div
              className="px-2 md:px-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="space-y-3 slide-item bg-[#E2F6F6] rounded-xl md:rounded-2xl p-4 md:p-8 text-center transition-all duration-300">
                <div className="relative">
                  <img className="w-4 md:w-10 " src={quotation} alt="" />
                  <p className="text-left text-[#0A4A60] font-semibold text-xs md:text-base lg:text-xl h-14 md:h-18 lg:h-21 pt-2 md:pt-4 line-clamp-3">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border border-t-[#0A4A60]" />
                <h3 className="text-[#0F262E] text-start text-xs md:text-xl font-semibold">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
