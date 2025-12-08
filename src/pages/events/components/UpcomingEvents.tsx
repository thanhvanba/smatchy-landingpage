import { Swiper, SwiperSlide } from "swiper/react";
import Yay3 from "/Yay3.png";
import { useRef, useState } from "react";
import { Grid, Pagination } from "swiper/modules";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useEventList } from "../../../hooks/useEvent";
import { useTeam } from "../../../hooks/useTeam";

export default function UpcomingEvents() {
  const navigate = useNavigate();
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data, isLoading, error } = useEventList();

  const {
    data: events,
    isLoading: isLoadingEvent,
    error: errorEvent,
  } = useTeam();

  //console.log("🚀 ~ Members ~ data:", data);

  if (isLoadingEvent) return <Loading />;
  if (errorEvent) return <p>Error loading team.</p>;

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //console.log(events);

  const eventHeading = events?.teamPage?.blocks?.[2];


  const flattenEvent = (api: any) => {
    const levelMatch = (api.level || "").match(/\d+/);
    const levelNum = levelMatch ? Number(levelMatch[0]) : 0;

    const sport = api.sports?.[0] ?? {};

    return {
      id: api.id,
      title: api.title,
      date: api.date,
      location: api.location?.replaceAll(" ", "-") ?? api.location,
      type: api.type || sport.name || "",
      level: levelNum,
      price: api.price,
      participants: api.participants,
      duration: api.duration,
      desc: api.desc,
      slug: api.slug,
      image: sport.image?.url || "", // hình môn thể thao
      iconType: sport.iconType?.url || "", // icon nhỏ
      iconLevel: "",
    };
  };

  /* ---------- flatten ---------- */
  const flatEvents = Array.isArray(data) ? data.map(flattenEvent) : [];

  const handleSlideChange = (begin: boolean, end: boolean) => {
    setIsBeginning(begin);
    setIsEnd(end);
  };

  return (
    <div className="mb-52">
      <div className="relative w-full z-20">
        <div className="absolute w-[110vw] h-80 md:h-[422.38px] top-[200px] -left-5 rotate-[-4.99deg] opacity-100 bg-[#E2F6F6]"></div>
        <div className="absolute w-[120vw] h-96 md:h-[422.38px] top-[410px] -left-5 rotate-[6.24deg] opacity-100 bg-[#E2F6F6]"></div>
      </div>

      <div className="flex flex-col items-center">
        <div
          className=" inline-flex"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-10">
            <div dangerouslySetInnerHTML={{ __html: eventHeading?.heading ? eventHeading?.heading : ""}} />
            <img
              className="absolute -top-8 -right-8 md:-top-10 lg:-top-20 md:-right-10 lg:-right-20 w-12 md:w-16 lg:w-auto"
              src={Yay3}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="realtive container">
        {/* Custom Navigation Buttons */}
        <div className="relative z-30 flex justify-end items-center gap-4 mb-3">
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <div
              className="inline-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="text-base md:text-lg lg:text-[20px] font-bold">
                <span className="text-[#FCA13B]">{flatEvents.length}</span>{" "}
                activities
              </h2>
            </div>
          </div>
          <button
            className={`h-10 md:h-12 w-10 md:w-12 cursor-pointer ${
              isBeginning ? "text-[#C7CDCF]/60" : "text-[#FCA13B]"
            }`}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <FaArrowLeftLong className="text-2xl md:text-4xl" />
          </button>
          <button
            className={`h-10 md:h-12 w-10 md:w-12 cursor-pointer ${
              isEnd ? "text-[#C7CDCF]/60" : "text-[#FCA13B]"
            }`}
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <FaArrowRightLong className="text-2xl md:text-4xl" />
          </button>
        </div>

        <div
          className="relative z-40"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <Swiper
            ref={swiperRef}
            modules={[Grid, Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            slidesPerGroup={3}
            grid={{
              rows: 2, // 2 dòng
              fill: "row", // điền theo hàng ngang
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
            onSlideChange={(s) => handleSlideChange?.(s.isBeginning, s.isEnd)}
            onInit={(s) => handleSlideChange?.(s.isBeginning, s.isEnd)}
          >
            {flatEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <div onClick={() => navigate(`/events/${event.slug}`)}>
                  <EventCard event={event} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
