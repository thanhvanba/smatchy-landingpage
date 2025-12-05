import { formatDateEvent } from "../../../utils/formatDateEvent";
import { FaArrowLeft } from "react-icons/fa6";
import type { Event } from "../../events/type";
import { useNavigate } from "react-router-dom";
export default function DetailHeroBanner({ detail }: { detail: Event }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative w-full h-72 md:h-96 lg:h-[621px] pt-8 md:pt-12 lg:pt-20 z-30"
        style={{
          backgroundImage: `url(${detail?.image})`,
          backgroundRepeat: "contain",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-40 bg-[#00000054]"></div>
        <div className="container relative z-50 mx-auto mt-8! md:mt-16! lg:mt-32!">
          <button
            onClick={() => navigate("/events")}
            className="flex items-center justify-center text-[#45585E] text-xs md:text-sm lg:text-xl font-medium mb-6 md:mb-8 gap-2 md:gap-3 bg-[#FFFFFF99] px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-lg md:rounded-xl cursor-pointer"
          >
            <FaArrowLeft
              size={20}
              className="md:w-5 md:h-5 lg:w-[30px] lg:h-[30px]"
            />{" "}
            Back to events
          </button>
          <div
            className="z-50 w-full flex flex-col items-start justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white uppercase">
              {detail?.title}
            </h2>
            <p className="text-sm md:text-base lg:text-2xl font-medium text-center text-white mt-2 md:mt-3 lg:mt-4">
              {formatDateEvent(detail?.date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
