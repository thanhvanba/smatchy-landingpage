import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

// import sports1 from "/sports/badminton.png";
// import sports2 from "/sports/basketball.jpg";
// import sports3 from "/sports/bike.png";
// import sports4 from "/sports/climbing.jpg";
// import sports5 from "/sports/football.jpg";
// import sports6 from "/sports/golf.jpg";
// import sports7 from "/sports/hiking.png";
// import sports8 from "/sports/paddel.png";
// import sports9 from "/sports/running.png";
// import sports10 from "/sports/swimming.png";
// import sports11 from "/sports/table-tennis.jpg";
// import sports12 from "/sports/tennis.png";
// import sports13 from "/sports/trail.jpg";
// import sports14 from "/sports/trampoline.jpg";
import Loading from "../../../components/Loading";
import { useSport } from "../../../hooks/useSport";

// const slides1 = [
//   { id: 1, image: sports1, name: "Badminton" },
//   { id: 2, image: sports2, name: "Basketball" },
//   { id: 3, image: sports3, name: "Bike" },
//   { id: 4, image: sports4, name: "Climbing" },
//   { id: 5, image: sports5, name: "Football" },
//   { id: 6, image: sports6, name: "Golf" },
//   { id: 7, image: sports7, name: "Hiking" },
//   { id: 8, image: sports8, name: "Paddel" },
//   { id: 9, image: sports9, name: "Running" },
//   { id: 10, image: sports10, name: "Swimming" },
//   { id: 11, image: sports11, name: "Table Tennis" },
//   { id: 12, image: sports12, name: "Tennis" },
//   { id: 13, image: sports13, name: "Trail" },
//   { id: 14, image: sports14, name: "Trampoline" },
// ];

export default function CategorySlider() {
  const { data, isLoading, error } = useSport();
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  // 2. Helper flatten
  const slides = (Array.isArray(data) ? data : [data]).map((s) => ({
    id: s.id,
    documentId: s.documentId,
    name: s.name,
    image: s.image.url, // ← phẳng hóa
  }));

  console.log(slides);

  return (
    <div className="relative w-full">
      <div className="absolute w-[110vw] h-80 md:h-[422.38px] -top-60 -left-5 -rotate-[4.99deg] bg-[#E2F6F6] opacity-100" />

      <div className="absolute w-[110vw] h-80 md:h-[422.38px] -top-[30px] -left-5 rotate-[6.24deg] bg-[#E2F6F6] opacity-100" />

      <div
        className="relative w-full z-50 h-full mt-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={4}
          breakpoints={{
            1920: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
          }}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          className="w-full overflow-hidden"
        >
          {slides?.map((slide: any, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="relative w-[342px] h-[237px] aspect-video md:aspect-237/342 group">
                <img
                  src={`${assetUrl}${slide.image}`}
                  alt={slide.name}
                  className="w-full h-full rounded-[15px] md:rounded-[30px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent rounded-[15px] md:rounded-[30px] p-3 md:p-4 flex items-end h-16 md:h-24">
                  <p className="text-white font-semibold text-sm md:text-2xl text-right w-full">
                    {slide.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
