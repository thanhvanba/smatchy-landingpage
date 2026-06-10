import { useMemo } from "react";
import Loading from "../../components/Loading";
import { useEventPage } from "../../hooks/useEvent";
import CreateEventBanner from "./components/CreateEventBanner";
import EventHeroBanner from "./components/EventHeroBanner";
import UpcomingEvents from "./components/UpcomingEvents";

import line from "/line_bg.svg";
import SEO, { type StrapiSEO } from "../../components/SEO";

export default function EventsPage() {
  const { data, isLoading, error } = useEventPage();

  const seoBlocks = (data?.blocks ?? []).filter(
    (b: any): b is StrapiSEO => b?.__component === "shared.seo",
  );

  const seoBlock =
    seoBlocks.find((block) => block?.canonicalURL?.includes("/events")) ??
    seoBlocks[0] ??
    null;

  const seoContent = useMemo(() => {
    return (
      <SEO
        seo={seoBlock}
        title={seoBlock?.metaTitle || "Smatchy"}
        description={seoBlock?.metaDescription || "Sports Matching Platform"}
        ogurl={typeof window !== "undefined" ? window.location.href : ""}
      />
    );
  }, [seoBlock]);

  if (isLoading) return <Loading />;
  if (error) return null;
  return (
    <>
      {seoContent}
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
    </>
  );
}
