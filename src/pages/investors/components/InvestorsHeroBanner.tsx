import Loading from "../../../components/Loading";
import { useHero } from "../../../hooks/useHero";
//import heroBanner from "/hero-banner.png";
import Yay from "/Yay.png";
import { MdCalendarToday, MdOutlineFileDownload } from "react-icons/md";
export default function InvestorsHeroBanner() {
  const { data, isLoading, error } = useHero("k8pxj4vdpa46rs41wsc94o63");

  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const slider = data?.heros?.find((h) => h.__component === "hero.slider");
  if (!slider) return [];

  const listBaner = slider.slider_images.map((img: any) => ({
    id: img.id,
    banner: img.url, // url gốc (có thể dùng img.formats.large.url nếu muốn)
  }));

  const buttons = slider.button || [];
  const btn1 = buttons[0] || {};
  const btn2 = buttons[1] || {};

  // console.log("Button 1:", btn1);
  // console.log("Button 2:", btn2);

  return (
    <>
      <div
        className="relative w-full h-full pt-10 md:pt-20 z-50"
        style={{
          backgroundImage: `url(${assetUrl}${listBaner[0].banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="container z-50"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center gap-4 md:gap-6 py-16 md:py-32">
            <div className="relative font-bold text-2xl md:text-3xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-white text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: slider.heading ? slider.heading : "",
                }}
              />
              <img
                className="absolute -top-10 right-0 sm:-right-8 md:-top-16 md:-right-14 lg:-top-24 lg:-right-20 w-12 md:w-20 lg:w-auto"
                src={Yay}
                alt=""
              />
            </div>
            <div className="font-medium text-lg md:text-xl lg:text-2xl text-white text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: slider.sub_heading ? slider.sub_heading : "",
                }}
              />
            </div>

            {/* <h2 className="relative font-bold text-5xl leading-14 text-white text-center">
              <span className="text-[#FCA13B]">SMATCHY</span>, THE PLATFORM
              CONNECTING THE SPORTS WORLD - AND TURNING IT INTO A SCALABLE
              BUSINESS
              <img className="absolute -top-24 -right-8" src={Yay} alt="" />
            </h2>
            <p className="font-medium text-2xl text-white text-center">
              A massive market, a clear need, a unique opportunity
            </p> */}

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
              {btn1.label && (
                <a
                  href={btn1.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#F49F3F] hover:bg-[#F49F3F]/90 text-white text-sm md:text-base"
                >
                  <MdOutlineFileDownload size={24} /> {btn1.label}
                </a>
              )}
              {btn2.label && (
                <a
                  href={btn2.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white hover:bg-white/90 text-[#0A4A60] text-sm md:text-base"
                >
                  <MdCalendarToday size={24} /> {btn2.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
