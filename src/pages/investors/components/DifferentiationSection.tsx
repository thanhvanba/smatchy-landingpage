import { FaArrowRightLong } from "react-icons/fa6";
import differentiation from "/investors/differentiation.png";
import Yay3 from "/Yay3.png";
const DifferentiationSection = () => {
  return (
    <div
      className="container relative z-30 pb-8! md:pb-12! lg:pb-16!"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col items-center">
        <div className=" inline-flex">
          <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8 lg:mb-12">
            OUR <span className="text-[#FCA13B]">DIFFERENTIATION</span>
            <img
              className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
              src={Yay3}
              alt=""
            />
          </h2>
        </div>
        <p className="text-center text-[#0A4A60] mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-base">
          Smatchy is not just a social network – it's the central ecosystem for
          all sports.
        </p>

        <div className="mb-6 md:mb-7 lg:mb-8">
          <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
            Learn More <FaArrowRightLong />
          </button>
        </div>

        <div className="w-full">
          <img className="w-full" src={differentiation} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DifferentiationSection;
