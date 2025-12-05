import Loading from "../../components/Loading";
import { useHome } from "../../hooks/useHome";
import AwardsSection from "./components/AwardsSection";
import CategorySlider from "./components/CategorySlider";
import HeroBanner from "./components/HeroBanner";
import Presentation from "./components/Presentation";
import Testimonials from "./components/Testimonials";
import line from "/line_bg.svg";
import Yay2 from "/Yay2.png";
//@ts-nocheck
export default function HomePage() {
  const { isLoading, error, titles } = useHome();

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="relative container">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-24 md:-top-44 left-20 md:left-56 scale-[8] rotate-13 origin-top-left z-20 px-1.5"
        />
      </div>
      <HeroBanner />
      <div
        className="relative flex items-center justify-center mt-12 md:mt-20 lg:mt-28 px-4 z-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="relative z-30 inline-flex items-center justify-center bg-[#F49F3F] rounded-[20px] md:rounded-[30px] text-white font-bold text-xl md:text-2xl lg:text-[32px] p-6 md:p-8">
          {titles[0].title}
          <img
            className="absolute top-0 -left-1 md:top-0 md:-left-2 w-12 md:w-16"
            src={Yay2}
            alt=""
          />
        </div>
      </div>
      <Presentation />
      <CategorySlider />
      <AwardsSection />
      <Testimonials />
    </div>
  );
}
