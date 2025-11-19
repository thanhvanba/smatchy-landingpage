import { MdLocalPhone, MdOutlineFileDownload } from "react-icons/md";
import background from "/background.png";
import Yay from "/Yay.png";

export default function JoinSmatchy() {
  return (
    <div
      className="relative z-20 w-full h-[300px] lg:h-[360px] mb-40 lg:mb-80 bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container py-8! md:py-12! lg:py-16!">
        <div className="flex flex-col items-center">
          <div
            className=" inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-4 md:mb-6 lg:mb-12">
              JOIN THE<span className="text-[#FCA13B]"> SMATCHY</span> ADVENTURE
              <img
                className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                src={Yay}
                alt=""
              />
            </h2>
          </div>
          <p
            className="text-center text-white mb-4 md:mb-6 lg:mb-12 text-xs md:text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Invest in the platform transforming the sports world
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
            <button
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex justify-center items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-[#F49F3F] text-white text-xs md:text-sm lg:text-base"
            >
              <MdOutlineFileDownload size={20} /> Download our investor brief
            </button>
            <button
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex justify-center items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-white text-[#0A4A60] text-xs md:text-sm lg:text-base"
            >
              <MdLocalPhone size={20} /> Schedule a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
