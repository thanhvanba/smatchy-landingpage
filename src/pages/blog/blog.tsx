import SectionHeading from "../../components/SectionHeading";

export default function Blog() {
  // const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL ?? "";
  // const posts = (data?.data ?? []) as Post[];

  return (
    <div className="container py-12 flex flex-col gap-10">
      <SectionHeading
        headingHtml={"Latest <span class='text-[#FCA13B]'>Stories</span>"}
        subtitle="Stay up to date with insight from the Smatchy team."
      />
    </div>
  );
}
