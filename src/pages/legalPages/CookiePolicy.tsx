import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
export default function CookiePolicy() {
  return (
    <div>
      <div
        className="relative w-full h-24 pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="container ">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-52 left-20 scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
          />
        </div>
        <div className="relative bg-[#E2F6F6] shadow rounded-2xl p-8  mt-20 mb-52 z-30"></div>
      </div>
    </div>
  );
}
