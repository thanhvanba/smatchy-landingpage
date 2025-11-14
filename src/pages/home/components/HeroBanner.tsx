import heroBanner from "/hero-banner.png";
import image7 from "/image 7.png";
import Yay from "/Yay.png";
import AppStoreImage from "/App_Store_Image.png";
import image3 from "/image 3.png";
export default function HeroBanner() {
  return (
    <>
      <div
        className="w-full pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 mx-auto">
          <div className="flex gap-20">
            <img className="z-50" src={image7} alt="" />
            <div className="flex flex-col items-center gap-10">
              <h2 className="relative font-bold text-5xl leading-14 text-white text-center mt-32">
                TIRED OF DOING YOUR SPORT{" "}
                <span className="text-[#FCA13B]">ALONE</span> ?
                <img className="absolute -top-24 -right-8" src={Yay} alt="" />
              </h2>
              <p className="font-medium text-2xl text-white text-center">
                Find sports partners <br />
                around you, for free!
              </p>
              <div className="flex gap-4">
                <img src={AppStoreImage} alt="" />
                <img src={image3} alt="" />
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
