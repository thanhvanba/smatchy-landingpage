import { FaArrowLeft } from "react-icons/fa6";
import RelatedArticles from "./components/RelatedArticles";
import heroBanner from "/hero-banner.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { usePostBySlug } from "../../hooks/usePost";
import Loading from "../../components/Loading";
import { useLocale } from "../../contexts/LangContext";
import { breadcrumbTexts } from "../../config/layoutConfig";

const ASSET_URL = import.meta.env.VITE_STRAPI_ASSET_URL || "";

export default function BlogDetail() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const { data: postData, isLoading } = usePostBySlug(slug || "");
  const { locale } = useLocale();

  if (isLoading) return <Loading />;
  if (!postData?.data?.[0])
    return <div className="container justify-between ">Post not found</div>;

  const post = postData.data[0];

  const image = post.featuredImage
    ? `${ASSET_URL}${post.featuredImage.url}`
    : "https://via.placeholder.com/1200x600";
  const category = post.categories?.[0]?.name || "Uncategorized";
  const date = post.publishedAt || post.createdAt;
  const contentStr = typeof post.content === "string" ? post.content : "";
  const readTime = Math.ceil((contentStr || "").split(" ").length / 200) || 5;

  <style jsx>{`
    .sticky-breadcrumb {
      position: sticky;
      top: 0;
      transform: translateY(var(--nav-height));
      margin-top: calc(-1 * var(--nav-height));
    }
  `}</style>;

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
      {/* <div className="fixed top-[65px] md:top-[70px] lg:top-[80px] left-0 right-0 z-40 bg-white border-b border-[#ECEEEF] py-2 md:py-3 lg:py-4 shadow"> */}
      {/* <div className="fixed top-16 md:top-18 lg:top-20 xl:top-24 left-0 right-0 z-40 bg-yellow-500 border-b border-[#ECEEEF] py-2 md:py-3 lg:py-4 shadow">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center gap-2 cursor-pointer container"
        >
          <div className="text-white bg-[#FCA13B] rounded-full p-1.5 md:p-2 lg:p-2">
            <FaArrowLeft size={16} className="md:w-5 md:h-5 lg:w-5 lg:h-5" />
          </div>
          <span className="text-[#0F262E] hover:text-[#0F262E]/80 font-bold text-sm md:text-base lg:text-base">
            {(breadcrumbTexts.blog as any)[locale]}
          </span>
        </button>
      </div> */}
      <div className="fixed top-0 left-0 right-0 z-40 mt-14 md:mt-17 lg:mt-18 xl:mt-19 bg-white border-b border-[#ECEEEF] py-2 md:py-3 lg:py-4 shadow">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center gap-2 cursor-pointer container"
        >
          <div className="text-white bg-[#FCA13B] rounded-full p-1.5 md:p-2 lg:p-2">
            <FaArrowLeft size={16} className="md:w-5 md:h-5 lg:w-5 lg:h-5" />
          </div>
          <span className="text-[#0F262E] hover:text-[#0F262E]/80 font-bold text-sm md:text-base lg:text-base">
            {(breadcrumbTexts.blog as any)[locale]}
          </span>
        </button>
      </div>
      <div className="min-h-screen mb-40 pt-[100px] md:pt-[120px] lg:pt-[125px]">
        <div className="relative z-30 container space-y-6 mt-7!">
          <div className="p-5 rounded-2xl">
            {/* Hero */}
            <div className="relative rounded-2xl overflow-hidden shadow mb-6">
              <img
                src={image}
                alt={post.title}
                className="w-full h-[360px] object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <span className="inline-block bg-[#FCA13B] text-lg font-semibold px-5 py-1 rounded-full">
                  {category}
                </span>
                <h1 className="text-4xl font-bold">{post.title}</h1>
              </div>
            </div>
            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#8FE5E5] flex items-center justify-center text-[#0A4A60] font-bold">
                SC
              </div>
              <div className="space-y-1">
                <p className="font-bold text-[#0A4A60]">Smatchy Team</p>
                <div className="flex justify-between text-[#6B797E] group-hover:text-white text-xs md:text-xs lg:text-sm gap-2 md:gap-3 lg:gap-4">
                  <p className="flex justify-center items-center gap-0.5 md:gap-1">
                    <MdOutlineCalendarMonth />
                    {date
                      ? new Date(date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "Unknown"}
                  </p>
                  <p className="flex justify-center items-center gap-0.5 md:gap-1">
                    <FaRegClock />
                    {readTime} min read
                  </p>
                </div>
              </div>
            </div>
            {/* Content */}
            <div
              className="prose max-w-none space-y-4 text-[#0F262E] w-full **:w-auto **:float-none **:margin-0"
              dangerouslySetInnerHTML={{
                __html: typeof post.content === "string" ? post.content : "",
              }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-semibold rounded-full bg-white text-[#0A4A60]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <RelatedArticles currentSlug={slug || ""} />
        </div>
      </div>
    </>
  );
}
