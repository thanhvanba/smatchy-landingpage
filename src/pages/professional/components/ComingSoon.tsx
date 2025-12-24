import HeroButton from "../../../components/HeroButton";
import { usePro } from "../../../hooks/usePro";
import Yay from "/Yay.png";
import background from "/background.png";
import line from "/line_bg.svg";
export default function ComingSoon() {
  const { data } = usePro();
  console.log(data);

  const titleBlock = data?.blocks?.[3];

  // Fallback values
  const heading =
    titleBlock?.heading ||
    'Coming Soon: <span style="color:#FCA13B">Download</span> the App';
  const subHeading = titleBlock?.sub_heading || "";

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative container z-20">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="hidden md:block absolute w-auto -top-12 md:-top-16 lg:-top-20 left-[30%] md:left-[36%] lg:left-[42%] scale-[7.4] origin-top-left px-1.5 rotate-[25.67deg]"
        />
      </div>
      <div
        className="relative z-30 w-full h-[300px] lg:h-[386px] mb-40 lg:mb-80 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container py-8! md:py-12! lg:py-16!">
          <div className="flex flex-col items-center">
            <div
              className=" inline-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative uppercase text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-4 md:mb-6 lg:mb-12">
                <div
                  dangerouslySetInnerHTML={{
                    __html: heading,
                  }}
                />
                {/* Coming Soon: <span className="text-[#FCA13B]">Download</span>{" "}
                the App */}
                <img
                  className="absolute -top-10 -right-8 md:-top-12 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                  src={Yay}
                  alt=""
                />
              </div>
            </div>
            <div
              className="text-center text-white mb-4 md:mb-6 lg:mb-12 text-xs md:text-sm lg:text-base"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: subHeading,
                }}
              />
              {/* Once paid events go live, this section will feature direct
              download links to the Smatchy app on the App Store and Google
              Play. Stay tuned! */}
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex gap-2 md:gap-4 flex-wrap md:flex-nowrap w-full md:w-auto justify-center md:justify-start mb-20"
            >
              {/* <Link to="https://apps.apple.com/us/app/smatchy/id6473653332">
                <img
                  src={AppStoreImage}
                  alt=""
                  className="h-10 lg:h-12 w-auto"
                />
              </Link>
              <Link to="https://play.google.com/store/apps/details?id=com.smatchy.app">
                <img src={image3} alt="" className="h-10 lg:h-12 w-auto" />
              </Link> */}
              <HeroButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
