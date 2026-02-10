import { useCallback, useMemo, useState } from "react";
import Loading from "../../components/Loading";
import { usePost } from "../../hooks/usePost";
import { useTeam } from "../../hooks/useTeam";
import BlogList from "./components/BlogList";
import CategoryBlog from "./components/CategoryBlog";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";

export default function Blog() {
 
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<
    string | null
  >(null); // null = "All"
  const { data: postsData } = usePost(undefined, "*");
  const { data, isLoading, error } = useTeam();

  // Extract categories có blog posts
  const availableCategorySlugs = useMemo(() => {
    if (!Array.isArray(postsData?.data)) return [];

    const categorySet = new Set<string>();
    postsData.data.forEach((post) => {
      post.categories?.forEach((cat) => {
        if (cat.slug && cat.slug.trim() !== "") {
          categorySet.add(cat.slug);
        }
      });
    });
    return Array.from(categorySet);
  }, [postsData?.data]);

  // Handle category selection: null = fetch all posts (pass undefined to usePost)
  const fetchSlug =
    selectedCategorySlug === null ? undefined : selectedCategorySlug;

  const handleSelectCategory = useCallback((slug: string | null) => {
    setSelectedCategorySlug(slug);
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading team.</p>;
  if (!data) return <p>No team data available.</p>;

  const heading = data?.teamPage?.blocks?.[4];
  //console.log("Blog page", heading);

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
      <div className="bg-[#FFF]">
        <div className="container py-14!">
          <div className="flex flex-col">
            <div
              className=" inline-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6">
                {/* <div className="uppercase">
                  Professional <span className="text-[#FCA13B]">sports</span>{" "}
                  insight
                </div>
                <img
                  className="absolute -top-8 -right-8 md:-top-10 lg:-top-14 md:-right-10 lg:-right-20 w-12 md:w-16 lg:w-24"
                  src={Yay3}
                  alt=""
                /> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: heading?.heading ? heading.heading : "",
                  }}
                />
                <img
                  className="absolute -top-6 -right-6 md:-top-14 md:-right-14 lg:-top-20 lg:-right-20 w-8 md:w-20 lg:w-auto"
                  src={Yay3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <CategoryBlog
            selectedCategorySlug={selectedCategorySlug}
            onSelectCategory={handleSelectCategory}
            availableCategorySlugs={availableCategorySlugs}
          />
          <BlogList selectedCategorySlug={fetchSlug} />
        </div>
      </div>
    </>
  );
}
