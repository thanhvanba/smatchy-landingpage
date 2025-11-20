import background from "/investors/background.png";
import user from "/investors/user.png";
import growth from "/investors/growth.png";
import star from "/investors/star.png";
import award from "/investors/award.png";
import Yay from "/Yay.png";
const tractionData = [
  {
    icon: user,
    title: "10,000+",
    subtitle: "Active users",
  },
  {
    icon: growth,
    title: "+10%",
    subtitle: "Organic growth",
  },
  {
    icon: star,
    title: "4.5/5",
    subtitle: "User rating",
  },
  {
    icon: award,
    title: "25,000+",
    subtitle: "Activities created",
  },
];

const tractionBoxes = [
  {
    title: "Early Adopters",
    text: "+800 people in the first month / 95% retention rate for the app on stores",
  },
  {
    title: "Brand Partnerships",
    text: "Collaborating with communities such as Les Bonnes, event organizers and brands.",
  },
  {
    title: "High Engagement",
    text: "45K views per month on social networks in October 2023",
  },
];
const TractionProofSection = () => {
  return (
    <div className="relative min-h-[500px] lg:min-h-[640px] z-30 w-full ">
      <div
        className="relative h-[500px] lg:h-[640px] z-30 inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></div>
      <div className="relative container z-30 -mt-[500px]! lg:-mt-[640px]! py-8! md:py-12! lg:py-16!">
        <div className="flex flex-col items-center">
          <div className=" inline-flex">
            <h2
              className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-6 md:mb-8 lg:mb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="text-[#FCA13B]">TRACTION </span>& PROOF
              <img
                className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                src={Yay}
                alt=""
              />
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-10 lg:mb-12">
          {tractionData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 text-center text-white"
            >
              <div
                className="w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3
                className="text-2xl md:text-3xl lg:text-5xl font-bold"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {item.title}
              </h3>
              <p
                className="text-[#DADEDF] text-xs md:text-sm lg:text-base leading-relaxed whitespace-pre-line"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* 3 box mô tả bên dưới */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {tractionBoxes.map((item, i) => (
            <div
              key={i}
              className="bg-[#FFFFFFC4] border border-[#0A4A605C] text-[#0F262E] rounded-2xl p-4 md:p-5 lg:p-6 shadow-md"
            >
              <h4 className="font-bold mb-1 md:mb-1.5 lg:mb-2 text-sm md:text-base lg:text-lg">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm lg:text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TractionProofSection;
