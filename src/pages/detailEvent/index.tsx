import DetailHeroBanner from "./components/DetailHeroBanner";
import EventInfoCard from "./components/EventInfoCard";
import EventSummaryCard from "./components/EventSummaryCard";
import line from "/line_bg.svg";
import event1 from "/events/event1.jpg";
import event2 from "/events/event2.png";
import event3 from "/events/event3.jpg";
import event4 from "/events/event4.jpg";
import event5 from "/events/event5.png";
import event6 from "/events/event6.jpg";
import golf from "/events/golf.png";
import { useParams } from "react-router-dom";

import { useEventDetail } from "../../hooks/useEventDetail";
const events = [
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
  },
  {
    id: 2,
    title: "Drive & Putt Open – Friendly Golf Tournamen event",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
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
    desc: "Join us for a friendly golf tournament designed for all levels. Whether you’re a beginner or an experienced player, this event is a great opportunity to enjoy a relaxing game, practice your swing, and connect with other golf enthusiasts. The course offers a scenic view and a welcoming atmosphere. Bring your clubs, good energy, and get ready for a fun day on the green!",
  },
];
export default function DetailEvent() {
  const { slug } = useParams<{ slug: string }>();
  const { data: apiData, isLoading, error } = useEventDetail(slug || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(apiData);
  // Flatten API data
  const detail =
    apiData && Array.isArray(apiData) && apiData.length > 0
      ? {
          id: apiData[0].id,
          title: apiData[0].title,
          date: apiData[0].date,
          location: apiData[0].location?.replace(" ", "-") || "",
          type: apiData[0].type,
          level: Number(apiData[0].level?.replace(/\D/g, "") || 0),
          price: apiData[0].price,
          participants: apiData[0].participants,
          duration: apiData[0].duration,
          image: apiData[0].sports?.[0]?.image?.url
            ? `https://strapi.annk.info${apiData[0].sports[0].image.url}`
            : "",
          iconType: apiData[0].sports?.[0]?.iconType?.url
            ? `https://strapi.annk.info${apiData[0].sports[0].iconType.url}`
            : "",
          iconLevel: "",
          desc: apiData[0].desc || "",
        }
      : events.find(
          (e) => e.title.toLowerCase().replace(/[^\w]/g, "-") === slug
        );

  console.log(detail);
  return (
    <div className="relative w-full min-h-screen">
      <div className="relative container">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-56 left-28 scale-[7] origin-top-left z-20 px-1.5 rotate-[3.5deg]"
        />
      </div>
      {detail && (
        <div>
          <DetailHeroBanner detail={detail} />
          <div className="relative z-50 grid grid-cols-2 gap-12 container -mt-24! mb-40!">
            <EventInfoCard detail={detail} />
            <EventSummaryCard detail={detail} />
          </div>
        </div>
      )}
    </div>
  );
}
