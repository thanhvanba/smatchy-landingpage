import Slider from "react-slick";
import background from "/background.png";
import line from "/line_bg.svg";
import worldmap from "/world-map.png";
import Yay from "/Yay.png";
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

export default function Testimonials() {
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
    <div className="relative w-full overflow-hidden">
      <div className="relative container z-20">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-20 left-[42%] scale-[7.4] origin-top-left px-1.5 rotate-[25.67deg]"
        />
      </div>
      <div className="">
        <div
          className="relative w-full h-[360px] z-30 bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="flex justify-center items-center py-16">
            <h2 className="relative inline-flex text-5xl text-white font-bold">
              YOUR <span className="text-[#FCA13B] ml-2"> TESTIMONIALS</span>
              <img className="absolute -top-24 -right-20" src={Yay} alt="" />
            </h2>
          </div>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="slide-item bg-[#E2F6F6] rounded-2xl p-8 text-center transition-all duration-300">
                  <p className="text-gray-600 mb-4 text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                    <div>
                      <div className="text-start text-3xl">
                        {renderStars(testimonial.rating)}
                      </div>
                      <h3 className="text-[#0A4A60] text-[32px] font-semibold mb-2">
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

      <div className="container px-24! py-18! relative flex justify-center z-30">
        <img className="w-full" src={worldmap} alt="" />
      </div>
    </div>
  );
}
