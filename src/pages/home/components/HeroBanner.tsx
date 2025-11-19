//import heroBanner from "/hero-banner.png";
//import image7 from "/image 7.png";
import Yay from "/Yay.png";
import AppStoreImage from "/App_Store_Image.png";
import image3 from "/image 3.png";
import Loading from "../../../components/Loading";
import { useHome } from "../../../hooks/useHome";
export default function HeroBanner() {
  const { isLoading, error, hero } = useHome();

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const bg = hero?.background_image.url;
  const main_img = hero?.main_image.url;

  console.log(bg);
  return (
    <>
      <div
        className="w-full pt-10 md:pt-20 z-50"
        style={{
          backgroundImage: `url(https://strapi.annk.info${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-20 items-center md:items-start">
            <img
              className="z-50 w-full md:w-1/2 lg:w-auto h-auto"
              src={`https://strapi.annk.info${main_img}`}
              //src={image7}
              alt=""
            />
            <div className="flex flex-col mb-8 md:mb-0 items-center gap-6 md:gap-10 w-full md:w-1/2">
              <div className="relative font-bold text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[50px] lg:leading-[55px] text-white text-center mt-8 md:mt-14 lg:mt-32">
                <img
                  className="absolute -top-8 right-0 md:-top-24 md:-right-12 w-12 md:w-auto"
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
                <img
                  src={AppStoreImage}
                  alt=""
                  className="h-10 lg:h-12 w-auto"
                />
                <img src={image3} alt="" className="h-10 lg:h-12 w-auto" />
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
