import type { Event } from "../../events/type";
import Yay3 from "/Yay3.png";

export default function EventInfoCard({ detail }: { detail: Event }) {
  return (
    <div>
      <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-6 bg-[#FFF3E6] p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl">
        <h2 className="flex items-center justify-center relative gap-2 md:gap-3">
          <img
            className="h-6 md:h-7 lg:h-8 w-6 md:w-7 lg:w-8"
            src={detail.iconType}
            alt=""
          />
          <span className="text-lg md:text-xl lg:text-[28px] text-[#0F262E] font-bold uppercase        ">
            {detail.type}
          </span>
          {/* <img
            className="absolute -top-8 md:-top-10 lg:-top-14 -right-8 md:-right-10 lg:-right-14 h-12 md:h-16 lg:h-24"
            src={Yay3}
            alt=""
          /> */}
          <img
            className="absolute -top-6 md:-top-8 lg:-top-12 -right-8 md:-right-10 lg:-right-14 h-12 md:h-16 lg:h-24"
            src={Yay3}
            alt=""
          />
        </h2>
        <div className="">
          <p className="text-xs md:text-sm lg:text-base text-[#45585E] font-medium">
            Duration
          </p>
          <p className="text-sm md:text-base lg:text-xl text-[#0F262E] font-semibold">
            {detail.duration}
          </p>
        </div>
        <div className="text-xs md:text-sm lg:text-xl text-[#0F262E]">
          {detail.desc}
        </div>
      </div>
    </div>
  );
}
