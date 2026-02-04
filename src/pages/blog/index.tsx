import BlogList from "./components/BlogList";
import CategoryBlog from "./components/CategoryBlog";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";

export default function Blog() {
  // const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL ?? "";
  // const posts = (data?.data ?? []) as Post[];

  return (
    <>
      <div
        className="relative w-full h-16 md:h-20 pt-10 md:pt-16 lg:pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="bg-[#E2F6F6]">
        <div className="container py-14!">
          <div className="flex flex-col">
            <div
              className=" inline-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6">
                <div className="uppercase">Professional sports insight</div>
                <img
                  className="absolute -top-8 -right-8 md:-top-10 lg:-top-14 md:-right-10 lg:-right-20 w-12 md:w-16 lg:w-24"
                  src={Yay3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <CategoryBlog />
          <BlogList />
        </div>
      </div>
    </>
  );
}
