import background from "/background.png";
import line from "/line_bg.svg";
import worldmap from "/world-map.png";
import Yay from "/Yay.png";
// import avt1 from "/avt1.png";
// import avt2 from "/avt2.png";
import Loading from "../../../components/Loading";
import { useTestimonials } from "../../../hooks/useTestimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
// const testimonials1 = [
//   {
//     id: 1,
//     name: "Thomas Nguyen",
//     text: "J'adore cette app, elle me motive à faire du sport tous les jours.",
//     rating: 5,
//     image: avt1,
//   },
//   {
//     id: 2,
//     name: "Robin Delezenne",
//     text: "Super application avec beaucoup de sport. Trop hâte de rencontrer des cyclistes !",
//     rating: 5,
//     image: avt2,
//   },
//   {
//     id: 3,
//     name: "Alex Martin",
//     text: "Une expérience incroyable, j'ai trouvé plein de partenaires sportifs.",
//     rating: 5,
//     image: avt1,
//   },
// ];

const renderStars = (rating: number) => {
  return [...Array(rating)].map((_, index) => (
    <span key={index} className="text-yellow-400">
      ★
    </span>
  ));
};

export default function Testimonials() {
  const { data, isLoading, error } = useTestimonials("home");
  const swiperRef = useRef<any>(null);

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const testimonials = data?.map((s) => ({
    id: s.id,
    name: s.author,
    text: s.content,
    rating: 5, // default
    image: s.avatar?.url, // "/uploads/avatar1_d95a6afcff.png"
  }));

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative container z-20 px-4 md:px-6 lg:px-8">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-20 left-[42%] scale-[3] md:scale-[5] lg:scale-[7.4] origin-top-left px-1.5 rotate-[25.67deg]"
        />
      </div>
      <div className="">
        <div
          className="relative w-full h-auto md:h-[360px] z-30 bg-cover bg-bottom py-8 md:py-16"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div
            className="container flex justify-center items-center py-8! md:py-16!"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button
              className="cursor-pointer absolute left-0 top-1/2 z-10 transform -translate-y-1/2 text-[#FCA13B] px-4 py-2 rounded-full"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <BsArrowLeftShort className="text-2xl md:text-6xl" />
            </button>
            <h2 className="relative inline-flex text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center px-4">
              YOUR
              <span className="text-[#FCA13B] ml-1 md:ml-2"> TESTIMONIALS</span>
              <img
                className="absolute -top-6 -right-2 md:-top-20 md:-right-12 lg:-top-24 lg:-right-16 w-8 md:w-auto"
                src={Yay}
                alt=""
              />
            </h2>
            <button
              className="cursor-pointer absolute right-0 top-1/2 z-10 transform -translate-y-1/2 text-[#FCA13B] px-4 py-2 rounded-full"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <BsArrowRightShort className="text-2xl md:text-6xl" />
            </button>
          </div>

          <Swiper
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={100}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            className="mySwiper"
            ref={swiperRef}
          >
            {testimonials?.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="w-[60%]! md:w-[60%]! lg:w-[40%]!"
              >
                <div
                  className="px-2 md:px-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="slide-item bg-[#E2F6F6] rounded-xl md:rounded-2xl p-4 md:p-8 text-center transition-all duration-300">
                    <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-base lg:text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                      <img
                        src={`https://strapi.annk.info${testimonial.image}`}
                        alt={testimonial.name}
                        className="w-16 md:w-20 h-16 md:h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-start text-lg md:text-3xl flex justify-center md:justify-start">
                          {renderStars(testimonial.rating)}
                        </div>
                        <h3 className="text-[#0A4A60] text-base md:text-2xl lg:text-[32px] font-semibold">
                          - {testimonial.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className="container px-4! md:px-8! lg:px-24! pb-28! md:py-20! lg:py-18! relative flex justify-center z-30"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img className="w-full h-auto" src={worldmap} alt="" />
      </div>
    </div>
  );
}
