import AwardsSection from "../components/AwardsSection";
import CategorySlider from "../components/CategorySlider";
import HeroBanner from "../components/heroBanner";
import Presentation from "../components/presentation";
import Testimonials from "../components/Testimonials";
import { useGlobal } from "../hooks/useGlobal";
import line from "/line_bg.svg";
import Yay2 from "/Yay2.png";
//@ts-nocheck

const HomePage: React.FC = () => {
  const { data, isLoading, error } = useGlobal();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="relative container">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto top-0 left-4 scale-[7.4] origin-top-left z-20 px-1.5"
        />
      </div>
      <HeroBanner />
      <div className="flex items-center justify-center mt-28">
        <div className="relative flex items-center justify-center bg-[#F49F3F] rounded-[30px] text-white font-bold text-[32px] w-[504px] p-6">
          Find activities near you
          <img className="absolute top-0 left-0" src={Yay2} alt="" />
        </div>
      </div>
      <Presentation />
      <CategorySlider />
      <AwardsSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;
