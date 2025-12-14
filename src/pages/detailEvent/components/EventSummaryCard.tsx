import type { Event } from "../../events/type";
import pro from "/events/pro.png";
import map from "/events/map.svg";
import level from "/events/level.svg";
import user from "/events/user.svg";
import download from "/events/download.svg";
import pictureEvent from "/events/picture-event.png";
export default function EventSummaryCard({ detail }: { detail: Event }) {
  const handleGetAppClick = () => {
    const userAgent =
      (typeof navigator !== "undefined" &&
        (navigator.userAgent || navigator.vendor || (window as any).opera)) ||
      "";
    const iosLink = "https://apps.apple.com/us/app/smatchy/id6473653332";
    const androidLink =
      "https://play.google.com/store/apps/details?id=com.smatchy.app&pcampaignid=web_share";
    const fallbackLink = "/";

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open(iosLink, "_blank", "noopener,noreferrer");
      return;
    }

    if (/Android/.test(userAgent)) {
      window.open(androidLink, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(fallbackLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {detail.price && (
        <div className="shadow-2xl bg-[#0A4A60] rounded-t-2xl md:rounded-t-3xl px-4 md:px-5 lg:px-6 pt-2 md:pt-3 pb-8 md:pb-10 lg:pb-12 ">
          <div className="flex items-center justify-start gap-1 p-1 text-white text-xs font-medium">
            <img
              className="h-6 md:h-7 lg:h-8 w-6 md:w-7 lg:w-8"
              src={pro}
              alt=""
            />

            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {detail.price.toFixed(2).replace(".", ",")}
            </p>
            <span className="text-sm md:text-base lg:text-xl">€</span>
            <p className="text-xs md:text-sm lg:text-base text-[#ECEEEF]">
              / Per participant
            </p>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col gap-4 md:gap-5 lg:gap-6 bg-white rounded-2xl md:rounded-3xl px-4 md:px-5 lg:px-6 pt-4 md:pt-5 lg:pt-6 pb-10 md:pb-12 lg:pb-16 ${
          detail.price ? "-mt-6 md:-mt-8 lg:-mt-10" : ""
        } shadow-2xl`}
      >
        <div className="flex gap-3 md:gap-3.5 lg:gap-4">
          <div className="inline-flex">
            <div className="bg-[#fff1e1] rounded-full p-2 md:p-2.5 lg:p-3">
              <img
                className="h-6 md:h-7 lg:h-9 w-6 md:w-7 lg:w-9"
                src={map}
                alt=""
              />
            </div>
          </div>
          <div className="text-sm md:text-base lg:text-xl">
            <p className="text-xs md:text-sm lg:text-base text-[#0F262E] font-bold">
              Location
            </p>
            <p className="text-xs md:text-sm lg:text-base text-[#33474E]">
              {detail.location}
            </p>
          </div>
        </div>
        <div className="flex gap-3 md:gap-3.5 lg:gap-4">
          <div className="inline-flex">
            <div className="bg-[#fff1e1] rounded-full p-2 md:p-2.5 lg:p-3">
              <img
                className="h-6 md:h-7 lg:h-9 w-6 md:w-7 lg:w-9"
                src={level}
                alt=""
              />
            </div>
          </div>
          <div className="text-sm md:text-base lg:text-xl">
            <p className="text-xs md:text-sm lg:text-base text-[#0F262E] font-bold">
              Level
            </p>
            <p className="text-xs md:text-sm lg:text-base text-[#33474E]">
              {detail.level}
            </p>
          </div>
        </div>
        <div className="flex gap-3 md:gap-3.5 lg:gap-4 border-b pb-4 md:pb-5 lg:pb-6 border-[#DADEDF]">
          <div className="inline-flex">
            <div className="bg-[#fff1e1] rounded-full p-2 md:p-2.5 lg:p-3">
              <img
                className="h-6 md:h-7 lg:h-9 w-6 md:w-7 lg:w-9"
                src={user}
                alt=""
              />
            </div>
          </div>
          <div className="text-sm md:text-base lg:text-xl">
            <p className="text-xs md:text-sm lg:text-base text-[#0F262E] font-bold">
              Participants
            </p>
            <p className="text-xs md:text-sm lg:text-base text-[#33474E]">
              {detail.participants}
            </p>
          </div>
        </div>
        <div className="flex items-end gap-3 md:gap-3.5 lg:gap-4">
          <img
            className="h-12 md:h-14 lg:h-16 w-12 md:w-14 lg:w-16 rounded-xl md:rounded-2xl border border-[#ECEEEF]"
            src={pictureEvent}
            alt=""
          />
          <div className="flex flex-col gap-0.5 md:gap-1">
            <p className="text-xs md:text-sm lg:text-base text-[#45585E]">
              Activity proposed by
            </p>
            <p className="text-sm md:text-base lg:text-xl font-semibold">
              Les Bornées
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 bg-[#FFF3E6] border border-[#FCA13B] rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5">
          <img
            className="h-12 md:h-14 lg:h-16 shrink-0"
            src={download}
            alt=""
          />
          <p className="text-xs md:text-sm lg:text-xl text-[#0F262E]">
            Discover more exciting sports experiences on the Smatchy app
          </p>
        </div>
        <button
          onClick={() => handleGetAppClick()}
          className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-[#F49F3F] text-white text-xs md:text-sm lg:text-base font-medium hover:bg-[#F49F3F]/90 transition cursor-pointer"
        >
          Download Now
        </button>
      </div>
    </div>
  );
}
