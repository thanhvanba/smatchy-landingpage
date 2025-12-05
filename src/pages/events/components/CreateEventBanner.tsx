import background from "/background.png";
import Yay from "/Yay.png";
import line from "/line_bg.svg";

export default function CreateEventBanner() {
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
              <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold">
                CREATE <span className="text-[#FCA13B]"> YOUR OWN</span> EVENT
                <img
                  className="absolute -top-10 -right-8 md:-top-12 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                  src={Yay}
                  alt=""
                />
              </h2>
            </div>
            <p className="text-center text-white text-xs md:text-sm lg:text-base">
              With the Smatchy app, organize your own sports activities and
              invite your community
            </p>
            <button className="flex justify-center items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full cursor-pointer bg-[#F49F3F] hover:bg-[#F49F3F]/90 text-white text-xs md:text-sm lg:text-base">
              Download the app now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
