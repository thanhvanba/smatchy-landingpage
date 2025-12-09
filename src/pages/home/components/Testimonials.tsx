import background from "/background.png";
import line from "/line_bg.svg";
import worldmap from "/world-map.png";
import Yay from "/Yay.png";
import Loading from "../../../components/Loading";
import { useTestimonials } from "../../../hooks/useTestimonials";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef, useState } from "react";
import ReviewSlider from "../../../components/ReviewSlider";
import { useHome } from "../../../hooks/useHome";

export default function Testimonials() {
  const { data, isLoading, error } = useTestimonials("home");
  const { isLoading: isLoadingHome, error: errorHome, titles } = useHome();
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  // const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoadingHome) return <Loading />;

  if (errorHome) {
    return <div>Error: {errorHome.message}</div>;
  }

  //console.log(titles);

  const titleBlock = titles?.find(
    (block: any): block is any =>
      block.__component === "blocks.title" &&
      block.title === "YOUR TESTIMONIALS"
  );

  // Fallback heading if titleBlock not found
  const heading =
    titleBlock?.heading ||
    'YOUR <span style="color:#FCA13B">TESTIMONIALS</span>';
  // const subHeading = titleBlock?.sub_heading || "";

  // console.log("titleBlock:", titleBlock);
  // console.log("heading:", heading);

  const testimonials = data?.map((s) => ({
    id: s.id,
    name: s.author,
    text: s.content,
    rating: 5, // default
    image: s.avatar?.url, // "/uploads/avatar1_d95a6afcff.png"
  }));

  // console.log(data);

  // console.log(testimonials);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative container z-20">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-20 left-[42%] scale-[3] md:scale-[5] lg:scale-[7.4] origin-top-left px-1.5 rotate-[25.67deg]"
        />
      </div>
      <div className="">
        <div
          className="relative w-full h-auto md:h-[360px] z-30 bg-cover bg-bottom py-8 md:py-16"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div
            className="container flex justify-center items-center py-8! md:py-16!"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button
              className={`cursor-pointer absolute left-0 top-1/2 z-10 transform -translate-y-1/2  px-4 py-2 rounded-full ${
                isBeginning ? "text-[#C7CDCF]/60" : "text-[#FCA13B]"
              }`}
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              disabled={isBeginning}
            >
              <BsArrowLeftShort className="text-2xl md:text-6xl" />
            </button>
            <div className="relative inline-flex text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center px-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: heading,
                }}
              />
              <img
                className="absolute -top-8 -right-4 md:-top-14 md:-right-10 lg:-top-24 lg:-right-16 w-12 md:w-20 lg:w-auto"
                src={Yay}
                alt=""
              />
            </div>
            <button
              className={`cursor-pointer absolute right-0 top-1/2 z-10 transform -translate-y-1/2 px-4 py-2 rounded-full ${
                isEnd ? "text-[#C7CDCF]/60" : "text-[#FCA13B]"
              }`}
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              disabled={isEnd}
            >
              <BsArrowRightShort className="text-2xl md:text-6xl" />
            </button>
          </div>

          <ReviewSlider
            testimonials={testimonials!}
            swiperRef={swiperRef}
            onSlideChange={(begin, end) => {
              setIsBeginning(begin);
              setIsEnd(end);
            }}
          />
        </div>
      </div>

      <div
        className="container px-4! md:px-8! lg:px-24! pb-28! md:py-20! lg:py-18! relative flex justify-center z-30"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img className="w-full h-auto" src={worldmap} alt="" />
      </div>
    </div>
  );
}
