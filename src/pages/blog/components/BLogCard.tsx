import type { Post } from "../../../services/types/post";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { formatDateBlog } from "../../../utils/formatDateBlog";

const ASSET_URL = import.meta.env.VITE_STRAPI_ASSET_URL || "";

export default function BLogCard(post: Post) {
  // Extract plain text từ HTML
  const stripHtml = (html: string): string => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const image = post.featuredImage
    ? `${ASSET_URL}${post.featuredImage.url}`
    : "https://via.placeholder.com/337x423";
  const category = post.categories?.[0]?.name || "Uncategorized";
  const contentStr = typeof post.content === "string" ? post.content : "";
  const description = post.excerpt ? stripHtml(post.excerpt) : stripHtml(contentStr || "");
  const date = post.publishedAt || post.createdAt;
  const readTime = Math.ceil((contentStr || "").split(" ").length / 200) || 5;

  return (
    <div className="group w-full rounded-2xl overflow-hidden cursor-pointer border border-[#DADEDF]">
      <div
        className="relative h-[423px] w-[337px ] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute top-4 left-2 text-white font-semibold text-sm bg-[#FCA13B] rounded-full py-1 px-5">
          {category}
        </div>
        <button className="hidden group-hover:block absolute top-4 right-2 text-white bg-[#FCA13B] rounded-full p-2">
          <FaArrowRightLong size={20} />
        </button>
        <div className="absolute bottom-0 w-full flex flex-col items-start">
          <div className="w-full group-hover:duration-1000">
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 bg-white group-hover:bg-[#0A4A608C] p-2 md:p-4 lg:p-6 rounded-b-2xl">
              <div>
                <h2 className="font-bold text-xs md:text-sm lg:text-base text-[#0F262E] line-clamp-1 group-hover:text-xs md:group-hover:text-sm lg:group-hover:text-base group-hover:text-white mb-3">
                  {post.title}
                </h2>
                <p className="font-medium text-[10px] md:text-xs lg:text-sm text-[#6B797E] group-hover:hidden">
                  {description}
                </p>
              </div>
              <hr className="border-0 border-t-[0.5px] border-[#479E9C]" />
              <div className="flex justify-between text-[#6B797E] group-hover:text-white text-xs md:text-xs lg:text-sm gap-2 md:gap-3 lg:gap-4">
                <p className="flex justify-center items-center gap-0.5 md:gap-1">
                  <MdOutlineCalendarMonth />
                  {formatDateBlog(date)}
                </p>
                <p className="flex justify-center items-center gap-0.5 md:gap-1">
                  <FaRegClock />
                  {readTime} min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
