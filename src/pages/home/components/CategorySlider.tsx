import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

import sports1 from "/sports/badminton.png";
import sports2 from "/sports/basketball.jpg";
import sports3 from "/sports/bike.png";
import sports4 from "/sports/climbing.jpg";
import sports5 from "/sports/football.jpg";
import sports6 from "/sports/golf.jpg";
import sports7 from "/sports/hiking.png";
import sports8 from "/sports/paddel.png";
import sports9 from "/sports/running.png";
import sports10 from "/sports/swimming.png";
import sports11 from "/sports/table-tennis.jpg";
import sports12 from "/sports/tennis.png";
import sports13 from "/sports/trail.jpg";
import sports14 from "/sports/trampoline.jpg";

const slides = [
  { id: 1, image: sports1, name: "Badminton" },
  { id: 2, image: sports2, name: "Basketball" },
  { id: 3, image: sports3, name: "Bike" },
  { id: 4, image: sports4, name: "Climbing" },
  { id: 5, image: sports5, name: "Football" },
  { id: 6, image: sports6, name: "Golf" },
  { id: 7, image: sports7, name: "Hiking" },
  { id: 8, image: sports8, name: "Paddel" },
  { id: 9, image: sports9, name: "Running" },
  { id: 10, image: sports10, name: "Swimming" },
  { id: 11, image: sports11, name: "Table Tennis" },
  { id: 12, image: sports12, name: "Tennis" },
  { id: 13, image: sports13, name: "Trail" },
  { id: 14, image: sports14, name: "Trampoline" },
];

export default function CategorySlider() {
  return (
    <div className="relative w-full">
      <div
        style={{
          width: "100vw",
          height: "422.38px",
          position: "absolute",
          top: "-240px",
          left: "0px",
          transform: "rotate(-4.99deg)",
          opacity: 1,
          backgroundColor: "#E2F6F6",
        }}
      ></div>

      <div
        style={{
          width: "110vw",
          height: "422.38px",
          position: "absolute",
          top: "-30px",
          left: "0px",
          transform: "rotate(6.24deg)",
          opacity: 1,
          backgroundColor: "#E2F6F6",
        }}
      ></div>

      <div className="relative w-full z-50 h-full mt-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={4}
          breakpoints={{
            1920: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
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
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-[342px] h-[237px]">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full rounded-[30px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
