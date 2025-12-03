import Yay from "/Yay.png";
// import Loading from "../../../components/Loading";
import { useHome } from "../../../hooks/useHome";
// import { useHero } from "../../../hooks/useHero";

export default function ProfessionalBanner() {
  const { hero } = useHome();
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  //console.log(hero);

  //const bg2 = hero?.background_image.url;
  const bg = hero?.background_image.url;
  // const { data, isLoading, error } = useHero("k8pxj4vdpa46rs41wsc94o63");
  // if (isLoading) return <Loading />;

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // const slider = data?.heros?.find((h) => h.__component === "hero.slider");
  // if (!slider) return [];
  return (
    <>
      <div
        className="relative w-full pt-10 md:pt-20 z-20"
        style={{
          backgroundImage: `url(${assetUrl}${bg})`,
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
          <div className="flex flex-col items-center gap-4 md:gap-6 py-16 md:py-32 lg:pb-80">
            <div className="relative font-bold text-2xl md:text-3xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-white text-center">
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: slider.heading ? slider.heading : "",
                }}
              /> */}
              <div className="uppercase text-white">
                Become a <span className="text-[#FCA13B]">Smatchy pro</span>
              </div>
              <img
                className="absolute -top-10 -right-8 md:-top-16 md:-right-14 lg:-top-24 lg:-right-20 w-12 md:w-20 lg:w-auto"
                src={Yay}
                alt=""
              />
            </div>
            <div className="font-medium text-lg md:text-xl lg:text-2xl text-white text-center">
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: slider.sub_heading ? slider.sub_heading : "",
                }}
              /> */}
              Earn money by dropping paid events, and connect with your
              Followers or "Sport" Community
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
