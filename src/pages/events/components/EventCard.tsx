import { FaArrowRightLong } from "react-icons/fa6";
import { formatDateEvent } from "../../../utils/formatDateEvent";
import type { Event } from "../type";
import pictureEvent from "/events/picture-event.png";
import level from "/events/level.png";
import PriceActive from "./PriceActive";

export default function EventCard({ event }: { event: Event }) {
  console.log(event);
  return (
    <div className="group max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      <div
        className="relative h-[297px] w-[337px ] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://strapi.annk.info${event.image})`,
        }}
      >
        <button className="hidden group-hover:block absolute top-4 right-2 text-white bg-[#FCA13B] rounded-full p-2">
          <FaArrowRightLong size={32} />
        </button>
        <div className="absolute bottom-0 w-full flex flex-col items-start">
          <img
            className="h-12 w-12 rounded-2xl m-2"
            src={pictureEvent}
            alt=""
          />
          <div className="absolute right-4 top-4">
            {event.price && <PriceActive price={event.price} />}{" "}
          </div>
          <div className="w-full group-hover:duration-1000">
            <div className="flex flex-col gap-1  bg-white group-hover:bg-[#0A4A608C] p-4 rounded-b-2xl">
              <p className="text-sm font-medium text-[#0A4A60] group-hover:hidden">
                {formatDateEvent(event.date)}
              </p>
              <h2 className="font-bold text-[#0F262E] line-clamp-1 group-hover:text-[18px] group-hover:text-white">
                {event.title}
              </h2>
              <p className="font-medium text-[#45585E] group-hover:hidden">
                {event.location}
              </p>
              <div className="flex text-[#20363E] group-hover:text-white text-sm gap-4">
                <p className="flex gap-1">
                  <img
                    className="w-[18px] h-[18px]"
                    src={`https://strapi.annk.info${event.iconType}`}
                    alt=""
                  />{" "}
                  {event.type}
                </p>
                <p className="flex justify-center items-center gap-1">
                  <img className="w-[18px] h-[18px]" src={level} alt="" />
                  Niv. {event.level}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
