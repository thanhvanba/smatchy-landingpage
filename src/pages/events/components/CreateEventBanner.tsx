import background from "/background.png";
import Yay from "/Yay.png";
import line from "/line_bg.svg";
import { useTeam } from "../../../hooks/useTeam";
import Loading from "../../../components/Loading";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CreateEventBanner() {
  const {
    data: events,
    isLoading: isLoadingEvent,
    error: errorEvent,
  } = useTeam();

  //console.log("🚀 ~ Members ~ data:", data);

  if (isLoadingEvent) return <Loading />;
  if (errorEvent) return <p>Error loading team.</p>;
  const eventCreate = events?.teamPage?.blocks?.[3];
  console.log(eventCreate);

  // Fallback values
  const heading = eventCreate?.heading;
  const subHeading = eventCreate?.sub_heading || "";
  // const buttonLink = eventCreate?.button?.link || "";
  const buttonLabel = eventCreate?.button?.label;

  const handleGetAppClick = () => {
    const userAgent =
      (typeof navigator !== "undefined" &&
        (navigator.userAgent || navigator.vendor || (window as any).opera)) ||
      "";
    const iosLink = "https://apps.apple.com/us/app/smatchy/id6473653332";
    const androidLink =
      "https://play.google.com/store/apps/details?id=com.smatchy.app&pcampaignid=web_share";
    const fallbackLink = "/";

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open(iosLink, "_blank", "noopener,noreferrer");
      return;
    }

    if (/Android/.test(userAgent)) {
      window.open(androidLink, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(fallbackLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative container z-20">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-12 md:-top-16 lg:-top-32 left-[30%] md:left-[36%] lg:left-[42%] scale-[4] md:scale-[5.5] lg:scale-[7.4] origin-top-left px-1.5 rotate-[25.67deg]"
        />
      </div>
      <div
        className="relative z-20 w-full h-[300px] lg:h-[360px] mb-40 lg:mb-72 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="container py-8! md:py-12! lg:py-16!"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
            <div className=" inline-flex">
              <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold">
                <div
                  dangerouslySetInnerHTML={{ __html: heading ? heading : "" }}
                />
                <img
                  className="absolute -top-10 -right-8 md:-top-12 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                  src={Yay}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center text-white text-xs md:text-sm lg:text-base">
              <div dangerouslySetInnerHTML={{ __html: subHeading }} />
            </div>
            {/* <button className="flex justify-center items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full cursor-pointer bg-[#F49F3F] hover:bg-[#F49F3F]/90 text-white text-xs md:text-sm lg:text-base">
              Download the app now
            </button> */}
            <button
              onClick={() => handleGetAppClick()}
              className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FCA13B] bg-[#FCA13B]/90 transition"
            >
              {buttonLabel}
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
