import CreateEventBanner from "./components/CreateEventBanner";
import EventHeroBanner from "./components/EventHeroBanner";
import UpcomingEvents from "./components/UpcomingEvents";

import line from "/line_bg.svg";

export default function EventsPage() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="relative container">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="hidden md:block absolute w-auto -top-56 left-28 scale-[7] origin-top-left z-20 px-1.5 rotate-[3.5deg]"
        />
      </div>
      <EventHeroBanner />
      <UpcomingEvents />
      <CreateEventBanner />
    </div>
  );
}
