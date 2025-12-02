import Yay3 from "/Yay3.png";
import { FaArrowRightLong } from "react-icons/fa6";
// import avt1 from "/avt1.png";
// import avt2 from "/avt2.png";
import quotation from "/quotation.png";
import quotation2 from "/quotation2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useInvestor } from "../../../hooks/useInvestor";
import { InvestorPopulateType } from "../../../services/strapi";
import Loading from "../../../components/Loading";
import { useTestimonials } from "../../../hooks/useTestimonials";
// const testimonials = [
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
export default function PeopleSay() {
  const swiperRef = useRef<any>(null);
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
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
    <div className="my-12 md:my-16 lg:my-20 px-4 z-30">
      <div
        className="relative flex flex-col items-center z-30"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container relative flex justify-center items-center z-30">
          <button
            className="cursor-pointer absolute left-0 top-1/2 z-10 transform -translate-y-1/2 text-[#FCA13B] px-4 py-2 rounded-full"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
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
            className="cursor-pointer absolute right-0 top-1/2 z-10 transform -translate-y-1/2 text-[#FCA13B] px-4 py-2 rounded-full"
            onClick={() => swiperRef.current?.swiper?.slideNext()}
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
        <Swiper
          initialSlide={1}
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
                slideShadows: false,
              },
            },
            768: {
              coverflowEffect: {
                rotate: 0,
                stretch: 520,
                depth: 150,
                modifier: 2.5,
                slideShadows: false,
              },
            },
            1024: {
              coverflowEffect: {
                rotate: 0,
                stretch: 500,
                depth: 250,
                modifier: 2.5,
                slideShadows: false,
              },
            },
            1280: {
              coverflowEffect: {
                rotate: 0,
                stretch: 600,
                depth: 250,
                modifier: 2.5,
                slideShadows: false,
              },
            },
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
                <div className="space-y-3 slide-item bg-[#E2F6F6] rounded-xl md:rounded-2xl p-4 md:p-8 text-center transition-all duration-300">
                  <div className="relative">
                    <img className="w-4 md:w-10 " src={quotation} alt="" />
                    <p className="text-left text-[#0A4A60] font-semibold mb-3 md:mb-4 text-xs md:text-base lg:text-xl pt-2 md:pt-4">
                      {testimonial.text}
                    </p>
                    {/* <img
                        className="absolute bottom-0 right-0 w-4 md:w-10 "
                        src={quotation2}
                        alt=""
                      /> */}
                  </div>
                  {/* <div className="flex md:flex-row items-center gap-2 md:gap-3">
                      <img
                        src={`https://strapi.annk.info${testimonial.image}`}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-lg md:text-3xl flex justify-start">
                          {renderStars(testimonial.rating)}
                        </div>
                        <h3 className="text-[#0A4A60] text-start text-xs md:text-2xl lg:text-[32px] font-semibold">
                          - {testimonial.name}
                        </h3>
                      </div>
                    </div> */}
                  <div className="border border-t-[#0A4A60]" />
                  <h3 className="text-[#0F262E] text-start text-xs md:text-xl font-semibold">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
