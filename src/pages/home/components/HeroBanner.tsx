//import heroBanner from "/hero-banner.png";
//import image7 from "/image 7.png";
import Yay from "/Yay.png";
import AppStoreImage from "/App_Store_Image.png";
import image3 from "/image 3.png";
import Loading from "../../../components/Loading";
import { useHome } from "../../../hooks/useHome";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  const { isLoading, error, hero } = useHome();
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //console.log(hero);

  //const bg2 = hero?.background_image.url;
  const bg = hero?.background_image.url;
  const main_img = hero?.main_image.formats?.medium.url;

  // console.log(bg);
  return (
    <>
      <div
        className="w-full pt-10 md:pt-20 z-50 max-h-[768px]"
        style={{
          backgroundImage: `url(${assetUrl}${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 md:">
          <div className="flex flex-col md:flex-row gap-4 md:gap-20 items-center md:items-start">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className="z-50 w-full md:w-2/5 lg:w-auto h-auto hidden md:block"
              src={`${assetUrl}${main_img}`}
              //src={image7}
              alt=""
            />
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col mb-8 md:mb-0 items-center gap-6 md:gap-10 w-full z-50"
            >
              <div className="relative font-bold text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[50px] lg:leading-[55px] text-white text-center mt-8 md:mt-20 lg:mt-48">
                <img
                  className="absolute -top-8 right-0 sm:-right-8 md:-top-14 lg:-top-24 md:right-4 lg:-right-12 w-12 md:w-20 lg:w-auto"
                  src={Yay}
                  alt=""
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: hero?.heading ? hero.heading : "",
                  }}
                />
              </div>
              <div
                className="font-medium text-lg md:text-xl lg:text-2xl text-white text-center md:text-left"
                dangerouslySetInnerHTML={{
                  __html: hero?.sub_heading ? hero.sub_heading : "",
                }}
              />
              <div className="flex gap-2 md:gap-4 flex-wrap md:flex-nowrap w-full md:w-auto justify-center md:justify-start">
                <Link to="https://apps.apple.com/us/app/smatchy/id6473653332">
                  <img
                    src={AppStoreImage}
                    alt=""
                    className="h-10 lg:h-12 w-auto"
                  />
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=com.smatchy.app">
                  <img src={image3} alt="" className="h-10 lg:h-12 w-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
