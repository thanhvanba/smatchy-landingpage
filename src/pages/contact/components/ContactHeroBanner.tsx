import { useHero } from "../../../hooks/useHero";
import heroBanner from "/hero-banner.png";
import Yay from "/Yay.png";
export default function ContactHeroBanner() {
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
  console.log(listBaner);
  return (
    <>
      <div
        className="relative w-full h-full pt-10 md:pt-20 z-50"
        style={{
          backgroundImage: `url(https://strapi.annk.info${listBaner[0].banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:gap-6 py-16 md:py-24 lg:py-32">
            <h2 className="relative font-bold text-2xl md:text-3xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-white text-center">
              <span className="text-[#FCA13B]">CONTACT</span> US
              <img
                className="absolute -top-12 -right-6 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                src={Yay}
                alt=""
              />
            </h2>
            <p className="font-medium text-base md:text-lg lg:text-2xl text-white text-center">
              A question? A suggestion? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
