import Yay from "/Yay.png";
import short from "/investors/short-term.png";
import medium from "/investors/medium-term.png";
import long from "/investors/long-term.png";

const ambitionVisionData = [
  {
    icon: short,
    phase: "SHORT-TERM",
    goal: "Dominate the French market by 2028",
    strategy:
      "Focus on monetization, gamification, and local partnerships to strengthen user acquisition and brand trust.",
    textColor: "#1A7D9C",
  },
  {
    icon: medium,
    phase: "MEDIUM-TERM",
    goal: "Expand across Europe by 2035",
    strategy:
      "Deploy Smatchy in major European countries, build regional partnerships, and scale the B2B offering.",
    textColor: "#C73F3F",
  },
  {
    icon: long,
    phase: "LONG-TERM",
    goal: "Establish Smatchy as the global reference for athletic sports",
    strategy:
      "Create a connected global community bridging sport, technology, and inclusivity through innovation and impact.",
    textColor: "#1F8554",
  },
];

export default function AmbitionVisionSection() {
  return (
    <div className="relative z-30 w-full mb-40">
      <div className="container pt-20!">
        <div className="flex flex-col items-center">
          <div className=" inline-flex">
            <h2 className="relative text-center text-5xl text-[#0A4A60] font-bold mb-10">
              AMBITION & <span className="text-[#FCA13B]">LONG-TERM </span>
              VISION
              <img className="absolute -top-20 -right-20 " src={Yay} alt="" />
            </h2>
          </div>
        </div>
        <p className="text-center text-[#0F262E] mb-12 px-32 text-xl font-medium">
          Become the central platform of the global sports ecosystem -
          connecting athletes, coaches, clubs and brands in an engaged and
          monetizable community
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ambitionVisionData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center"
              style={{ borderColor: "#0F262E33" }}
            >
              <div className="w-16 h-16 mb-2">
                <img
                  src={item.icon}
                  alt={item.phase}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3
                className="text-lg font-bold text-[#0F262E] mb-2"
                style={{ color: item.textColor }}
              >
                {item.phase}
              </h3>
              <p className="flex-1 text-center text-[#0A4A60] font-bold mb-3 leading-relaxed">
                {item.goal}
              </p>

              <span className="text-[#0F262E] text-center px-6 rounded-full">
                {item.strategy}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
