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
    <div className="relative w-full mt-5">
      <div className="relative z-30 container">
        <img
          src={line}
          alt=""
          className="absolute w-auto top-[-580px] left-[64%] scale-[8] origin-top-left px-1.5 rotate-[40.67deg]"
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
          <div className="container py-16!">
            <div className="flex flex-col items-center">
              <div className=" inline-flex">
                <h2 className="relative text-center text-5xl text-white font-bold mb-12">
                  WHY <span className="text-[#FCA13B]">SMATCHY</span> WINS
                  <img
                    className="absolute -top-20 -right-20 "
                    src={Yay}
                    alt=""
                  />
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white shadow-xl rounded-2xl">
                <div className=" p-6">
                  <ul className="list-disc marker:text-[#0A4A60] pl-6 flex flex-col gap-6">
                    {benefits.map((item, index) => (
                      <li key={index}>
                        <h3 className="text-xl font-bold text-[#0F262E] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#6B797E] whitespace-pre-line leading-relaxed">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <img
                    src={attachment}
                    alt="Smatchy App"
                    className="w-full max-w-md rounded-xl shadow-lg"
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
