import SectionHeading from "../../components/SectionHeading";

export default function Blog() {
  // const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL ?? "";
  // const posts = (data?.data ?? []) as Post[];

  return (
    <div className="container py-12 flex flex-col gap-10 mb-96!">
      <SectionHeading
        headingHtml={
          "Latest fdfffffffffffff dfg dffffff dfgdfgf<span class='text-[#FCA13B]'>Stories</span>"
        }
        subtitle="Stay up to date with insight from the Smatchy team."
      />
    </div>
  );
}
