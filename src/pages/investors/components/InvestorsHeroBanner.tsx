import { useHero } from "../../../hooks/useHero";
import heroBanner from "/hero-banner.png";
import Yay from "/Yay.png";
import { MdLocalPhone, MdOutlineFileDownload } from "react-icons/md";
export default function InvestorsHeroBanner() {
  const { data, isLoading, error } = useHero("k8pxj4vdpa46rs41wsc94o63");
  if (isLoading) {
    return <div>Loading...</div>;
  }

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

  console.log("Button 1:", btn1);
  console.log("Button 2:", btn2);

  return (
    <>
      <div
        className="relative w-full h-full pt-20 z-50"
        style={{
          backgroundImage: `url(https://strapi.annk.info${listBaner[0].banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 mx-auto">
          <div className="flex flex-col items-center gap-6 py-32">
            <div className="relative font-bold text-5xl leading-14 text-white text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: slider.heading ? slider.heading : "",
                }}
              />
              <img className="absolute -top-24 -right-8" src={Yay} alt="" />
            </div>
            <div className="font-medium text-2xl text-white text-center">
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

            <div className="flex gap-4">
              {btn1.label && (
                <a
                  href={btn1.url || "#"}
                  className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#F49F3F] text-white"
                >
                  <MdOutlineFileDownload size={24} /> {btn1.label}
                </a>
              )}
              {btn2.label && (
                <a
                  href={btn2.url || "#"}
                  className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A4A60]"
                >
                  <MdLocalPhone size={24} /> {btn2.label}
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
