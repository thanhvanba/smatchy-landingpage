import background from "/background.png";
import line from "/line_bg.svg";
import Yay from "/Yay.png";
//import attachment from "/investors/attachment.jpg";
import { InvestorPopulateType } from "../../../services/strapi";
import Loading from "../../../components/Loading";
import { useInvestor } from "../../../hooks/useInvestor";

// const benefits_ = [
//   {
//     title: "Combining social, matching, multisport",
//     description:
//       "The only platform combining social connection, sport matching, and multi-discipline practice in one ecosystem.",
//   },
//   {
//     title: "Local experience, global reach",
//     description:
//       "Users enjoy authentic local sport meetups accessible worldwide—connecting people through shared passions.",
//   },
//   {
//     title: "Diversified revenue streams",
//     description:
//       "Smatchy is a sustainable business model with multiple income sources:\n- Events ~52%\n- Gamification ~36%\n- Advertising & Media ~12% (2028 mix target)",
//   },
// ];
export default function WhySmatchyWins() {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  if (isLoading) return <Loading />;
  if (error) return null;
  //console.log(data);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "blocks.title" &&
      block.title === "Section: Why Smatchy Wins"
  );

  const benefits = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "blocks.stats" && block.title === "Why Smatchy Wins"
  );

  const attachment = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "shared.media" &&
      block.title === "Image: Why Smatchy Wins"
  );

  //console.log(attachment.file.url);

  return (
    <div className="relative w-full mt-6 lg:mt-12">
      <div className="hidden sm:block relative z-30 container">
        <img
          src={line}
          alt=""
          className="absolute w-auto top-[-300px] md:-top-[400px] lg:top-[-580px] left-[40%] md:left-[55%] lg:left-[64%] scale-[4] md:scale-[6] lg:scale-[8] origin-top-left px-1.5 rotate-[40.67deg]"
        />
      </div>
      <div className="relative w-full">
        <div
          className="absolute inset-0 z-30 w-full bg-cover bg-bottom h-[368px]"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
        <div
          className="relative z-30 container py-8! md:py-12! lg:py-16!"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center">
            <div className=" inline-flex">
              <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-6 md:mb-8 lg:mb-12 uppercase">
                <div
                  dangerouslySetInnerHTML={{
                    __html: titleBlock.heading ? titleBlock.heading : "",
                  }}
                />
                <img
                  className="absolute -top-10 -right-8 md:-top-16 md:-right-14 lg:-top-20 lg:-right-20 w-12 md:w-20 lg:w-auto"
                  src={Yay}
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center bg-white shadow-xl rounded-2xl p-4 md:p-9">
              <div className="md:w-1/2">
                <ul className="list-disc marker:text-[#0A4A60] pl-4 md:pl-5 lg:pl-6 flex flex-col gap-4 md:gap-5 lg:gap-6">
                  {benefits.stats_item.map((item: any, index: number) => (
                    <li key={index}>
                      <h3 className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E] mb-1">
                        {item.heading}
                      </h3>
                      <p className="text-xs md:text-sm lg:text-sm text-[#6B797E] whitespace-pre-line leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-1/2 flex justify-end px-2 md:px-0">
                <img
                  src={`${assetUrl}${attachment.file.url}`}
                  alt="Smatchy App"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
