import line from "/line_bg.svg";
import Yay2 from "/Yay2.png";
import ProblemSolution from "./components/ProblemSolution";
import BusinessMetrics from "./components/BusinessMetrics";
import MarketOpportunity from "./components/MarketOpportunity";
import WhySmatchyWins from "./components/WhySmatchyWins";
import DifferentiationSection from "./components/DifferentiationSection";
import TractionProofSection from "./components/TractionProofSection";
import PeopleSay from "./components/PeopleSay";
import ProductFeatures from "./components/ProductFeatures";
import UserJourneySection from "./components/UserJourneySection";
import BusinessModelSection from "./components/BusinessModelSection";
import RoadmapSection from "./components/RoadmapSection";
import AmbitionVisionSection from "./components/AmbitionVisionSection";
import TheTeamSection from "./components/TheTeamSection";
import JoinSmatchy from "./components/JoinSmatchy";
import InvestorsHeroBanner from "./components/InvestorsHeroBanner";

export default function InvestorsPage() {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-56 left-28 scale-[7] origin-top-left z-30 px-1.5 rotate-[3.5deg]"
          />
        </div>
        <InvestorsHeroBanner />
        <div
          className="relative flex items-center justify-center mt-20 z-40"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-center px-4">
            <div className="relative flex items-end justify-end text-center bg-[#F49F3F] rounded-[20px] md:rounded-[30px] text-white font-bold text-xl md:text-2xl lg:text-[32px] w-full md-[w-720px] lg:w-[930px] p-4 md:p-6">
              Raising 1M€ for 20% equity to accelerate product development and
              international growth.
              <img
                className="absolute -top-3 -left-2 md:left-1 w-14 md:w-auto"
                src={Yay2}
                alt=""
              />
            </div>
          </div>
        </div>
        <ProblemSolution />
        <BusinessMetrics />
        <MarketOpportunity />
        <WhySmatchyWins />
        <DifferentiationSection />
        <TractionProofSection />
        <PeopleSay />
        <ProductFeatures />
        <UserJourneySection />
        <BusinessModelSection />
        <RoadmapSection />
        <AmbitionVisionSection />
        <TheTeamSection />
        <JoinSmatchy />
      </div>
    </div>
  );
}
