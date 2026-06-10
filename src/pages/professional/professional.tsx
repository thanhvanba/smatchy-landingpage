import { useMemo } from "react";
import Loading from "../../components/Loading";
import SEO, { type StrapiSEO } from "../../components/SEO";
import Benefits from "./components/Benefits";
import ComingSoon from "./components/ComingSoon";
import ProfessionalBanner from "./components/ProfessionalBanner";
import ProForm from "./components/ProForm";
import ProSlider from "./components/ProSlider";
import line from "/line_bg.svg";
import { usePro } from "../../hooks/usePro";

export default function ProfessionalPage() {
  const { data, isLoading, error } = usePro();

  const seoBlock =
    data?.blocks?.find(
      (b: any): b is StrapiSEO => b?.__component === "shared.seo",
    ) ?? null;

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
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="hidden md:block absolute w-auto -top-24 md:-top-44 left-20 md:left-56 scale-[7.4] rotate-13 origin-top-left z-20 px-1.5"
          />
        </div>
        <ProfessionalBanner />

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative -mt-12! lg:-mt-60! z-40">
          <ProForm />

          <div className="hidden lg:block">
            <ProSlider />
          </div>
        </div>
        <div className="pt-12">
          <Benefits />
        </div>
        <div className="pt-24">
          <ComingSoon />
        </div>
      </div>
    </>
  );
}
