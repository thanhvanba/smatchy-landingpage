import { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Thay bằng hình ảnh của bạn
import phone1 from "/professional/phone1.png";
import badge1 from "/professional/badge1.png";
import badge2 from "/professional/badge2.png";
import badge3 from "/professional/badge3.png";
import badge4 from "/professional/badge4.png";
import { usePro } from "../../../hooks/usePro";

const BADGE_IMAGES = [badge1, badge2, badge3, badge4];

const DEFAULT_SLIDES = [
  { id: 1, phone: phone1, badge: badge1 },
  { id: 2, phone: phone1, badge: badge2 },
  { id: 3, phone: phone1, badge: badge3 },
  { id: 4, phone: phone1, badge: badge4 },
];

export default function ProSlider() {
  const swiperRef = useRef<any>(null);
  const { data } = usePro();
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;

  const titleBlock = data?.blocks?.[1];

  const slides =
    titleBlock?.slider_images?.map((image: any, index: number) => ({
      id: image.id || index,
      image: `${assetUrl}${image.url}`,
      badge: BADGE_IMAGES[index % BADGE_IMAGES.length],
      name: image.name,
    })) || DEFAULT_SLIDES;

  console.log(slides);

  return (
    <div className="relative w-full h-full z-40">
      <Swiper
        spaceBetween={0}
        centeredSlides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop
        ref={swiperRef}
        className="w-full overflow-hidden"
      >
        {slides.map((slide: any) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full flex justify-center items-center  z-50">
              <img src={slide.image} alt="Phone" className="w-full" />
              {/* <img
                src={slide.badge}
                alt="Badge"
                className="absolute left-[38%] -translate-x-1/2 top-[30%] -translate-y-1/2 w-[60%]"
              /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút điều hướng trái */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full text-[#F49F3F] transition"
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
      >
        <BsArrowLeftShort size={60} />
      </button>

      {/* Nút điều hướng phải */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full text-[#F49F3F] transition"
        onClick={() => swiperRef.current?.swiper?.slideNext()}
      >
        <BsArrowRightShort size={60} />
      </button>
    </div>
  );
}
