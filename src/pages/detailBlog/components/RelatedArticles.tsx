import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Yay3 from "/Yay3.png";
import BLogCard from "../../blog/components/BLogCard";

type Article = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
};

const RELATED_ARTICLES: Article[] = [
  {
    id: 1,
    category: "Trail",
    title: "Connecting Through Trail Experiences",
    description:
      "Trail activities bring people together through shared outdoor experiences.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    date: "28 Oct 2025",
    readTime: "10 min read",
  },
  {
    id: 2,
    category: "Swimming",
    title: "The Value of Structured Swimming Sessions",
    description:
      "Structured swimming sessions lead to better training outcomes.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    date: "15 Dec 2025",
    readTime: "10 min read",
  },
  {
    id: 3,
    category: "Table Tennis",
    title: "Why Table Tennis Is Perfect for Social Play",
    description:
      "Easy to organize and quick to play, table tennis brings people together.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    date: "11 Nov 2025",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Padel",
    title: "How to Monetize Your Padel Sessions",
    description:
      "Discover practical ways to monetize padel sessions sustainably.",
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e",
    date: "20 Jan 2026",
    readTime: "3 min read",
  },
];

export default function RelatedArticles() {
  const swiperRef = useRef<any>(null);
  const navigate = useNavigate();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
        {RELATED_ARTICLES.map((article) => (
          <SwiperSlide key={article.id}>
            <div
              key={article.id}
              onClick={() => navigate(`/blogs/${article.id}`)}
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
