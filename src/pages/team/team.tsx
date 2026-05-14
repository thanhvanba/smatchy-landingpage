import { useMemo } from "react";
import Loading from "../../components/Loading";
import { useHome } from "../../hooks/useHome";
import { useTeam } from "../../hooks/useTeam";
import TeamHeroBanner from "./components/TeamHeroBanner";
import LittleStory from "./components/littleStory";
import Members from "./components/members";
import line from "/line_bg.svg";
import SEO from "../../components/SEO";

export default function TeamPage() {
  const { data, isLoading, error } = useTeam();
  const { seoBlock } = useHome();
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;

  const seoContent = useMemo(() => {
    const ogImage = seoBlock?.metaImage?.url
      ? `${assetUrl}${seoBlock.metaImage.url}`
      : undefined;

    return (
      <SEO
        title={seoBlock?.metaTitle || "Smatchy"}
        description={seoBlock?.metaDescription || "Sports Matching Platform"}
        keyword={seoBlock?.keywords || "sports, matching, events, players"}
        name={seoBlock?.metaAuthor || "Smatchy"}
        type="website"
        ogurl={typeof window !== "undefined" ? window.location.href : ""}
        ogimage={ogImage}
      />
    );
  }, [seoBlock, assetUrl]);

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
