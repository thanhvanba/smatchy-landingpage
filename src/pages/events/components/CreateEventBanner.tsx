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
          className="absolute w-auto -top-20 left-[42%] scale-[7.4] origin-top-left px-1.5 rotate-[25.67deg]"
        />
      </div>
      <div
        className="relative z-20 w-full h-[360px] mb-72 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container py-16!">
          <div className="flex flex-col items-center gap-8">
            <div className=" inline-flex">
              <h2 className="relative text-center text-5xl text-white font-bold">
                CREATE <span className="text-[#FCA13B]"> YOUR OWN</span> EVENT
                <img className="absolute -top-20 -right-20 " src={Yay} alt="" />
              </h2>
            </div>
            <p className="text-center text-white text-base">
              With the Smatchy app, organize your own sports activities and
              invite your community
            </p>
            <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#F49F3F] text-white">
              Download the app now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
