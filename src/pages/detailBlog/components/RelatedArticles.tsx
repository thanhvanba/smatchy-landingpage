import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useMemo } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Yay3 from "/Yay3.png";
import BLogCard from "../../blog/components/BLogCard";
import type { Post } from "../../../services/types/post";
import { usePostBySlug, usePost } from "../../../hooks/usePost";

interface RelatedArticlesProps {
  currentSlug: string;
}

export default function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const swiperRef = useRef<any>(null);
  const navigate = useNavigate();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Fetch current post để lấy category
  const { data: currentPostData } = usePostBySlug(currentSlug);
  const currentPost = currentPostData?.data?.[0];

  // Fetch tất cả posts
  const { data: allPostsData } = usePost(undefined, "*");
  const allPosts = allPostsData?.data || [];

  // Filter posts có cùng category, exclude current post
  const relatedArticles = useMemo(() => {
    if (!currentPost || !allPosts.length) {
      return [];
    }

    const currentCategoryId = currentPost.categories?.[0]?.id;
    if (!currentCategoryId) return [];

    const filtered = allPosts
      .filter(
        (post: Post) =>
          post.slug !== currentSlug &&
          post.categories?.some((cat) => cat.id === currentCategoryId)
      )
      .slice(0, 4); // Lấy 4 posts

    return filtered;
  }, [currentPost, allPosts, currentSlug]);

  // Hide section nếu không có related articles
  if (!relatedArticles.length) {
    return null;
  }

  return (
    <div className="mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <div
            className=" inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6">
              <div className="uppercase">Related articles</div>
              <img
                className="absolute -top-8 -right-8 md:-top-10 lg:-top-14 md:-right-10 lg:-right-20 w-12 md:w-16 lg:w-24"
                src={Yay3}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className={`text-xl cursor-pointer ${
              isBeginning ? "text-gray-300" : "text-[#FCA13B]"
            }`}
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className={`text-xl cursor-pointer ${isEnd ? "text-gray-300" : "text-[#FCA13B]"}`}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        spaceBetween={24}
        slidesPerView={3}
        onSlideChange={(s) => {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        onInit={(s) => {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {relatedArticles.map((article) => (
          <SwiperSlide key={article.slug}>
            <div
              onClick={() => navigate(`/blogs/${article.slug}`)}
              className="cursor-pointer"
            >
              <BLogCard {...article} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
