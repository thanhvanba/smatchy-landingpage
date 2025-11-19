import { FaArrowRightLong } from "react-icons/fa6";
import movie from "/investors/movie.png";
import Yay3 from "/Yay3.png";
export default function ProductFeatures() {
  return (
    <div className="relative z-30 pt-20">
      <div className="relative w-full z-20">
        <div
          style={{
            width: "110vw",
            height: "422.38px",
            position: "absolute",
            top: "-50px",
            left: "0px",
            transform: "rotate(-4.99deg)",
            opacity: 1,
            backgroundColor: "#E2F6F6",
          }}
        ></div>

        <div
          style={{
            width: "110vw",
            height: "868.38px",
            position: "absolute",
            top: "220px",
            left: "0px",
            transform: "rotate(6.24deg)",
            opacity: 1,
            backgroundColor: "#E2F6F6",
          }}
        ></div>
      </div>
      <div
        className="container relative z-30 py-8! md:py-10! lg:py-12!"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center">
          <div className=" inline-flex">
            <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-4 md:mb-6 lg:mb-8">
              <span className="text-[#FCA13B]">PRODUCT</span>
              & FEATURES
              <img
                className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2>
          </div>
          <p className="text-center text-[#0A4A60] mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-base">
            Watch how athletes connect, book activities, and earn - all in one
            seamless experience
          </p>

          <div className="mb-6 md:mb-7 lg:mb-8">
            <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
              Learn More <FaArrowRightLong />
            </button>
          </div>

          <div className="w-full">
            <img src={movie} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
