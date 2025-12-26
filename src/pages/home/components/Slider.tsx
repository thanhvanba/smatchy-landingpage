import { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

// import look1 from "/1.png";
// import look2 from "/2.png";
// import slider1 from "/slider1.png";
// import slider2 from "/slider2.png";
// import slider3 from "/slider3.png";
import { useHome } from "../../../hooks/useHome";

// const slides = [
//   { id: 1, image: look1, image2: slider1 },
//   { id: 2, image: look2, image2: slider2 },
//   { id: 3, image: look2, image2: slider3 },
// ];

export default function Slider() {
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const { sliders } = useHome();
  const swiperRef = useRef<any>(null);

  //console.log(sliders);

  // const slides = sliders.map((r) => r.slider_images);

  // console.log(slides)

  const awardsItem = sliders.find(
    (item: any) =>
      item.__component === "hero.slider" && item.title === "Slider mockup"
  );

  const slides = awardsItem?.slider_images?.map((img: any) => img) ?? [];

  console.log(slides);

  return (
    <div className="relative w-full z-50 h-full">
      <Swiper
        spaceBetween={0}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full overflow-hidden"
        loop
        ref={swiperRef}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full">
              <img src={`${assetUrl}${slide.url}`} alt="" />
              {/* <img
                className={`absolute left-1/2 -translate-x-1/2 ${
                  idx === 0
                    ? "top-1/2 -translate-y-1/2"
                    : "top-[40%] -translate-y-1/2"
                } w-[60%] border border-[#00000040] rounded-[20px]`}
                src={slide.url}
                alt=""
              /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls */}
      {/* Nút điều hướng trái */}
      <button
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-10 text-[#F49F3F] transition"
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
      >
        <BsArrowLeftShort size={60} />
      </button>

      {/* Nút điều hướng phải */}
      <button
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 text-[#F49F3F] transition"
        onClick={() => swiperRef.current?.swiper?.slideNext()}
      >
        <BsArrowRightShort size={60} />
      </button>
    </div>
  );
}
