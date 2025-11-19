import Slider from "react-slick";
import Yay3 from "/Yay3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import avt1 from "/avt1.png";
import avt2 from "/avt2.png";
const testimonials = [
  {
    id: 1,
    name: "Thomas Nguyen",
    text: "J'adore cette app, elle me motive à faire du sport tous les jours.",
    rating: 5,
    image: avt1,
  },
  {
    id: 2,
    name: "Robin Delezenne",
    text: "Super application avec beaucoup de sport. Trop hâte de rencontrer des cyclistes !",
    rating: 5,
    image: avt2,
  },
  {
    id: 3,
    name: "Alex Martin",
    text: "Une expérience incroyable, j'ai trouvé plein de partenaires sportifs.",
    rating: 5,
    image: avt1,
  },
];

const renderStars = (rating: number) => {
  return [...Array(rating)].map((_, index) => (
    <span key={index} className="text-yellow-400">
      ★
    </span>
  ));
};
export default function PeopleSay() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="my-12 md:my-16 lg:my-20 px-4">
      <div
        className="flex flex-col items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className=" inline-flex">
          <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8">
            WHAT <span className="text-[#FCA13B]">PEOPLE</span> SAY
            <img
              className="absolute -top-12 -right-12 md:-top-20 md:-right-20 w-8 md:w-auto"
              src={Yay3}
              alt=""
            />
          </h2>
        </div>
        <div className="mb-8 md:mb-10">
          <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
            Join Our Community <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div
        className="relative z-30"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 md:px-4">
              <div className="slide-item bg-[#E2F6F6] rounded-xl md:rounded-2xl p-4 md:p-8 text-center transition-all duration-300">
                <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-base lg:text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                  <img
                    src={testimonial.image}
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
          ))}
        </Slider>
      </div>
    </div>
  );
}
