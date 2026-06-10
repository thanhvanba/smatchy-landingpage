import { useMemo } from "react";
import Loading from "../../components/Loading";
import SEO, { type StrapiSEO } from "../../components/SEO";
import { useTeam } from "../../hooks/useTeam";
import TeamHeroBanner from "./components/TeamHeroBanner";
import LittleStory from "./components/littleStory";
import Members from "./components/members";
import line from "/line_bg.svg";

export default function TeamPage() {
  const { data, isLoading, error } = useTeam();
  //console.log("Team Data:", data);
  //const { seoBlock } = useHome();

  const seoBlock =
    (data?.teamPage?.blocks.find(
      (b: any) => b?.__component === "shared.seo",
    ) as StrapiSEO | undefined) ?? null;

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
  if (error) return <p>Error loading team.</p>;
  if (!data) return <p>No team data available.</p>;

  //console.log("Team Data:", { teamMembers: data.teamMembers, teamPage: data.teamPage });



  return (
    <>
      {seoContent}
      <div className="relative w-full min-h-screen">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="hidden lg:block absolute w-auto -top-56 left-28 scale-[7] origin-top-left z-30 px-1.5 rotate-[3.5deg]"
          />
        </div>
        <TeamHeroBanner />
        <Members />
        <LittleStory />
      </div>
    </>
  );
}
