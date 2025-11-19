import background from "/background.png";
import line from "/line_bg.svg";
import Yay from "/Yay.png";
import attachment from "/investors/attachment.jpg";

const benefits = [
  {
    title: "Combining social, matching, multisport",
    description:
      "The only platform combining social connection, sport matching, and multi-discipline practice in one ecosystem.",
  },
  {
    title: "Local experience, global reach",
    description:
      "Users enjoy authentic local sport meetups accessible worldwide—connecting people through shared passions.",
  },
  {
    title: "Diversified revenue streams",
    description:
      "Smatchy is a sustainable business model with multiple income sources:\n- Events ~52%\n- Gamification ~36%\n- Advertising & Media ~12% (2028 mix target)",
  },
];
export default function WhySmatchyWins() {
  return (
    <div className="relative w-full mt-2 md:mt-3 lg:mt-5">
      <div className="relative z-30 container">
        <img
          src={line}
          alt=""
          className="absolute w-auto top-[-300px] md:-top-[400px] lg:top-[-580px] left-[40%] md:left-[55%] lg:left-[64%] scale-[4] md:scale-[6] lg:scale-[8] origin-top-left px-1.5 rotate-[40.67deg]"
        />
      </div>
      <div className="">
        <div
          className="relative z-30 w-full bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div
            className="container py-8! md:py-12! lg:py-16! px-4! md:px-6! lg:px-8!"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-col items-center">
              <div className=" inline-flex">
                <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-6 md:mb-8 lg:mb-12">
                  WHY <span className="text-[#FCA13B]">SMATCHY</span> WINS
                  <img
                    className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                    src={Yay}
                    alt=""
                  />
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center bg-white shadow-xl rounded-2xl">
                <div className="p-4 md:p-5 lg:p-6">
                  <ul className="list-disc marker:text-[#0A4A60] pl-4 md:pl-5 lg:pl-6 flex flex-col gap-4 md:gap-5 lg:gap-6">
                    {benefits.map((item, index) => (
                      <li key={index}>
                        <h3 className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm lg:text-sm text-[#6B797E] whitespace-pre-line leading-relaxed">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center px-2 md:px-0">
                  <img
                    src={attachment}
                    alt="Smatchy App"
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
