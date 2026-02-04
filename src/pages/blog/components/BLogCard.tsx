import type { Article } from "../types";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { formatDateBlog } from "../../../utils/formatDateBlog";

export default function BLogCard(article: Article) {
  console.log("🚀 ~ BLogCard ~ article:", article);

  return (
    <div className="group w-full rounded-2xl overflow-hidden cursor-pointer border border-[#DADEDF]">
      <div
        className="relative h-[423px] w-[337px ] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${article.image})`,
        }}
      >
        <div className="absolute top-4 left-2 text-white font-semibold text-sm bg-[#FCA13B] rounded-full py-1 px-5">
          {article.category}
        </div>
        <button className="hidden group-hover:block absolute top-4 right-2 text-white bg-[#FCA13B] rounded-full p-2">
          <FaArrowRightLong size={20} />
        </button>
        <div className="absolute bottom-0 w-full flex flex-col items-start">
          {/* <img
            className="h-12 w-12 rounded-2xl m-2"
            src={picturearticle}
            alt=""
          /> */}
          {/* <div className="absolute right-4 top-4">
            {article.price !== null && article.price !== 0 && (
              <PriceActive price={article.price} />
            )}
          </div> */}
          <div className="w-full group-hover:duration-1000">
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 bg-white group-hover:bg-[#0A4A608C] p-2 md:p-4 lg:p-6 rounded-b-2xl">
              <div>
                <h2 className="font-bold text-xs md:text-sm lg:text-base text-[#0F262E] line-clamp-1 group-hover:text-xs md:group-hover:text-sm lg:group-hover:text-base group-hover:text-white mb-3">
                  {article.title}
                </h2>
                <p className="font-medium text-[10px] md:text-xs lg:text-sm text-[#6B797E] group-hover:hidden">
                  {article.description}
                </p>
              </div>
              <hr className="border-0 border-t-[0.5px] border-[#479E9C]" />
              <div className="flex justify-between text-[#6B797E] group-hover:text-white text-xs md:text-xs lg:text-sm gap-2 md:gap-3 lg:gap-4">
                <p className="flex justify-center items-center gap-0.5 md:gap-1">
                  <MdOutlineCalendarMonth />
                  {formatDateBlog(article.date)}
                </p>
                <p className="flex justify-center items-center gap-0.5 md:gap-1">
                  <FaRegClock />
                  {article.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
