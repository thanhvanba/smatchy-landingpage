import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import banner1 from "/events/banner1.png";
// import banner2 from "/events/banner2.png";
// import banner3 from "/events/banner3.png";
// import banner4 from "/events/banner4.png";

import Yay from "/Yay.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import HeroButton from "../../../components/HeroButton";
import Loading from "../../../components/Loading";
import { useHero } from "../../../hooks/useHero";
import "../event.css";

// const listBaner = [
//   {
//     id: 1,
//     banner: banner1,
//   },
//   {
//     id: 2,
//     banner: banner2,
//   },
//   {
//     id: 3,
//     banner: banner3,
//   },
//   {
//     id: 4,
//     banner: banner4,
//   },
// ];
export default function EventHeroBanner() {
  // const [isHovered, setIsHovered] = useState(false);
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const swiperRef = useRef<any>(null);

  const { data, isLoading, error } = useHero("gywnpx9at0x32dob6f4n725x");

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const slider = data?.heros?.find((h) => h.__component === "hero.slider");
  if (!slider) return [];

  const listBaner = slider.slider_images.map((img: any) => ({
    id: img.id,
    banner: img.url, // url gốc (có thể dùng img.formats.large.url nếu muốn)
  }));

  //console.log(data?.heros[0].heading);

  return (
    <div className="relative z-30 overflow-hidden product-slider-container w-full h-full md:h-[400px] lg:h-[564px] mb-10 md:mb-16 lg:mb-20">
      <div className="absolute inset-0 z-30 bg-[#00000054] md:h-[400px] lg:h-[564px]"></div>
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        className=""
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop
      >
        {listBaner.map((banner: any) => (
          <SwiperSlide key={banner.id}>
            <img
              className="w-full h-[260px] md:h-[400px] lg:h-[564px] object-cover"
              src={`${assetUrl}${banner.banner}`}
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
        <FaArrowLeft className="text-sm md:text-3xl" />
      </button>
      <button
        className="custom-nav-btn custom-nav-next"
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <FaArrowRight className="text-sm md:text-3xl" />
      </button>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 mx-auto">
        <div className="container">
          <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
            <div
              className="relative font-bold text-2xl md:text-3xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-white text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.heros[0].heading ?? "",
                }}
              />
              <img
                className="absolute -top-10 -right-8 md:-top-10 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay}
                alt=""
              />
            </div>
            <div
              className="font-medium text-base md:text-lg lg:text-2xl text-white text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.heros[0].sub_heading ?? "",
                }}
              />
            </div>
            <div className="flex gap-2 md:gap-3 lg:gap-4 flex-wrap md:flex-nowrap">
              {/* <Link to="https://apps.apple.com/us/app/smatchy/id6473653332">
                <img
                  src={AppStoreImage}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="h-8 md:h-10 lg:h-auto w-auto"
                />
              </Link>
              <Link to="https://play.google.com/store/apps/details?id=com.smatchy.app">
                <img
                  src={image3}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="h-8 md:h-10 lg:h-auto w-auto"
                />
              </Link> */}
              <HeroButton />
            </div>
          </div>
        </div>
      </div>
      <div
        className="
    pointer-events-none
    absolute inset-x-0 bottom-0
    h-16 sm:h-24
    z-40
  "
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 8.24%, #FBFBFB 84.56%)",
        }}
      />
    </div>
  );
}
