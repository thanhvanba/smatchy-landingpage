import { Swiper, SwiperSlide } from "swiper/react";
import Yay3 from "/Yay3.png";
import { useRef } from "react";
import { Grid, Pagination } from "swiper/modules";
import event1 from "/events/event1.jpg";
import event2 from "/events/event2.png";
import event3 from "/events/event3.jpg";
import event4 from "/events/event4.jpg";
import event5 from "/events/event5.png";
import event6 from "/events/event6.jpg";
import golf from "/events/golf.png";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";
import { useEventList } from "../../../hooks/useEvent";
const events1 = [
  {
    id: 1,
    title: "Sunday League Clash – 5-a-Side Football",
    date: "2025-02-20T10:30:00",
    location: "Menthon-Saint-Bernard",
    iconType: golf,
    type: "Football",
    iconLevel: "",
    level: 5,
    price: 5.0,
    image: event1,
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 2,
    title: "Drive & Putt Open – Friendly Golf Tournament",
    date: "2025-02-21T10:00:00",
    location: "Montagne de la Tournette",
    type: "Golf · 18 holes",
    level: 6,
    price: 50.0,
    image: event2,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
    duration: "1h00",
  },
  {
    id: 3,
    title: "Court Masters – Weekend Tennis Match",
    date: "2025-02-22T15:00:00",
    location: "Town, Annecy",
    type: "Tennis · Double",
    level: "Easy",
    price: 2.0,
    image: event3,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 4,
    title: "City Spin Challenge – Urban Road Cycling",
    date: "2025-02-23T11:00:00",
    location: "Town, Annecy",
    type: "Cycling · Urban",
    level: 4,
    price: 10.0,
    image: event4,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 5,
    title: "Hoops After Dark – Night Basketball",
    date: "2025-02-24T20:00:00",
    location: "Lake Annecy",
    type: "Basketball · Training",
    level: "Training",
    price: 20.0,
    image: event5,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 6,
    title: "Shuttle Smash – Morning Doubles",
    date: "2025-02-25T08:00:00",
    location: "Annecy Sports Hall",
    type: "Badminton · Double",
    level: 4,
    price: 3.0,
    image: event6,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 7,
    title: "Peak Pursuit – Boulder Challenge",
    date: "2025-10-23T18:00:00",
    location: "Roc Altitude Gym, Annecy",
    type: "Bouldering",
    level: 3,
    price: 12.5,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 8,
    title: "Summit Stroll – Scenic Ridge Trail",
    date: "2025-10-29T10:00:00",
    location: "Semnoz Mountain",
    type: "Hiking · 10 km",
    level: 3,
    price: 6.0,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "Embark on a scenic hike through the Semnoz Mountain trails. This 10 km route combines forest paths and panoramic viewpoints overlooking Lake Annecy. Ideal for hikers seeking a moderate challenge, it offers a mix of steady climbs and gentle descents. Expect breathtaking landscapes, crisp mountain air, and a rewarding sense of escape. Bring water, good shoes, and your adventurous spirit for a revitalizing outdoor experience.",
  },
  {
    id: 9,
    title: "Sunrise Sprint – Lake Run",
    date: "2025-10-21T07:00:00",
    location: "Parc Charles Bosson",
    type: "Running · 12 km",
    level: 4,
    price: 5.0,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 10,
    title: "Padel Fiesta – Friendly Mixed Doubles",
    date: "2025-10-25T18:00:00",
    location: "Padel Club Annecy",
    type: "Padel · Double",
    level: 2,
    price: 6.0,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 11,
    title: "Aqua Rush – Endurance Laps",
    date: "2025-10-26T19:00:00",
    location: "Piscine Jean Régis",
    type: "Swimming · Double",
    level: 3,
    price: 5.5,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 12,
    title: "Spin Masters – Fast Rally Night",
    date: "2025-10-27T20:00:00",
    location: "Annecy Table Arena",
    type: "Table Tennis · Double",
    level: 4,
    price: 5.5,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 13,
    title: "Wild Run – Forest Trail Circuit",
    date: "2025-03-04T08:30:00",
    location: "Mont Veyrier",
    type: "Trail · 7 km",
    level: 5,
    price: 8.5,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
  {
    id: 14,
    title: "Bounce Boost – Core Air Training",
    date: "2025-02-27T09:00:00",
    location: "Jump Park Annecy",
    type: "Training · Core Air",
    level: 2,
    price: null,
    image: event1,
    iconType: golf,
    iconLevel: "",
    participants: "12/20 registered",
    duration: "1h00",
    desc: "",
  },
];
export default function UpcomingEvents() {
  const navigate = useNavigate();
  const swiperRef = useRef<any>(null);

  const { data, isLoading, error } = useEventList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

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
      price: api.price ?? 0,
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

  console.log(flatEvents);

  return (
    <div className="mb-52">
      <div className="relative w-full z-20">
        <div
          style={{
            width: "100vw",
            height: "422.38px",
            position: "absolute",
            top: "200px",
            left: "0px",
            transform: "rotate(-4.99deg)",
            opacity: 1,
            backgroundColor: "#E2F6F6",
          }}
        ></div>

        <div
          style={{
            width: "110vw",
            height: "422.38px",
            position: "absolute",
            top: "410px",
            left: "0px",
            transform: "rotate(6.24deg)",
            opacity: 1,
            backgroundColor: "#E2F6F6",
          }}
        ></div>
      </div>

      <div className="flex flex-col items-center">
        <div className=" inline-flex">
          <h2 className="relative text-center text-5xl text-[#0A4A60] font-bold mb-10">
            UP COMMING<span className="text-[#FCA13B]"> EVENTS</span>
            <img className="absolute -top-20 -right-20 " src={Yay3} alt="" />
          </h2>
        </div>
      </div>
      <div className="realtive container">
        {/* Custom Navigation Buttons */}
        <div className="relative z-30 flex justify-end items-center gap-4 mb-3">
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <div className="inline-flex">
              <h2 className="text-[20px] font-bold">
                <span className="text-[#FCA13B]">{flatEvents.length}</span>{" "}
                activities
              </h2>
            </div>
          </div>
          <button
            className="text-[#FCA13B] h-12 w-12"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <FaArrowLeftLong size={32} />
          </button>
          <button
            className="text-[#FCA13B] h-12 w-12"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <FaArrowRightLong size={32} />
          </button>
        </div>

        <div className="relative z-40">
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
