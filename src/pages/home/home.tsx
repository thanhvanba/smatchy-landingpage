import { useHome } from "../../hooks/useHome";
import Loading from "../../components/Loading";
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
          className="absolute w-auto top-0 left-8 scale-[7.4] origin-top-left z-20 px-1.5"
        />
      </div>
      <HeroBanner />
      <div
        className="flex items-center justify-center mt-12 md:mt-20 lg:mt-28 px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="relative flex items-center justify-center bg-[#F49F3F] rounded-[20px] md:rounded-[30px] text-white font-bold text-xl md:text-2xl lg:text-[32px] w-full md:w-[504px] p-4 md:p-6">
          {titles[0].title}
          <img
            className="absolute -top-2 left-4 md:-top-3 md:left-1 w-12 md:w-16 lg:w-auto"
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
