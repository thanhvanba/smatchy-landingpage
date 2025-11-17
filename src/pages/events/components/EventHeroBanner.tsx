import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "/events/banner1.png";
import banner2 from "/events/banner2.png";
import banner3 from "/events/banner3.png";
import banner4 from "/events/banner4.png";

import Yay from "/Yay.png";
import AppStoreImage from "/App_Store_Image.png";
import image3 from "/image 3.png";

import "../event.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useHero } from "../../../hooks/useHero";
const listBaner = [
  {
    id: 1,
    banner: banner1,
  },
  {
    id: 2,
    banner: banner2,
  },
  {
    id: 3,
    banner: banner3,
  },
  {
    id: 4,
    banner: banner4,
  },
];
export default function EventHeroBanner() {
  // const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef<any>(null);

  const { data, isLoading, error } = useHero("gywnpx9at0x32dob6f4n725x");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const slider = data.heros?.find((h) => h.__component === "hero.slider");
  if (!slider) return [];

  const listBaner = slider.slider_images.map((img) => ({
    id: img.id,
    banner: img.url, // url gốc (có thể dùng img.formats.large.url nếu muốn)
  }));

  //console.log(data?.heros[0].heading);

  return (
    <div className="relative z-30 overflow-hidden product-slider-container w-full h-[564px] mb-20">
      <div className="absolute inset-0 z-30 bg-[#00000054]"></div>
      <Swiper ref={swiperRef} modules={[Pagination]} className="">
        {listBaner.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              className="w-full"
              src={`https://strapi.annk.info${banner.banner}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="custom-nav-btn custom-nav-prev"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <FaArrowLeft size={32} />
      </button>
      <button
        className="custom-nav-btn custom-nav-next"
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <FaArrowRight size={32} />
      </button>

      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-30 mx-auto">
        <div className="container">
          <div className="flex flex-col items-center gap-5">
            <div className="relative font-bold text-5xl leading-14 text-white text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.heros[0].heading ?? "",
                }}
              />
              <img className="absolute -top-20 -right-20" src={Yay} alt="" />
            </div>
            <div className="font-medium text-2xl text-white text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.heros[0].sub_heading ?? "",
                }}
              />
            </div>
            <div className="flex gap-4">
              <img src={AppStoreImage} alt="" />
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
