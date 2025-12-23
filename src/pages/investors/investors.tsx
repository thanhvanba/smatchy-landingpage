import Loading from "../../components/Loading";
import { useInvestor } from "../../hooks/useInvestor";
import AmbitionVisionSection from "./components/AmbitionVisionSection";
import BusinessMetrics from "./components/BusinessMetrics";
import BusinessModelSection from "./components/BusinessModelSection";
import DifferentiationSection from "./components/DifferentiationSection";
import InvestorsHeroBanner from "./components/InvestorsHeroBanner";
import JoinSmatchy from "./components/JoinSmatchy";
import MarketOpportunity from "./components/MarketOpportunity";
import ProblemSolution from "./components/ProblemSolution";
import ProductFeatures from "./components/ProductFeatures";
import RoadmapSection from "./components/RoadmapSection";
import TheTeamSection from "./components/TheTeamSection";
import TractionProofSection from "./components/TractionProofSection";
import UserJourneySection from "./components/UserJourneySection";
import WhySmatchyWins from "./components/WhySmatchyWins";
import line from "/line_bg.svg";
import Yay2 from "/Yay2.png";

export default function InvestorsPage() {
  const { data, isLoading, error } = useInvestor();

  if (isLoading) return <Loading />;
  if (error) return null;

  console.log(data);

  const block = data?.blocks?.find(
    (b: any) =>
      b.__component === "blocks.title" && b.title === "Raising 1M€ for 20%"
  );

  if (!block) return null;

  //console.log(block.title);
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="hidden md:block absolute w-auto -top-56 left-28 scale-[7] origin-top-left z-30 px-1.5 rotate-[3.5deg]"
          />
        </div>
        <InvestorsHeroBanner />
        <div
          className="relative flex items-center justify-center mt-12 z-40"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-center px-4">
            <div className="relative flex items-end justify-end text-center bg-[#F49F3F] rounded-[20px] md:rounded-[30px] text-white font-bold text-xl md:text-2xl lg:text-[32px] w-full md-[w-720px] lg:w-[1080px] p-4 md:p-6">
              {block.heading}
              <img
                className="absolute -top-2 left-6 md:-top-4 md:left-2 lg:left-12 w-12 md:w-20 lg:w-auto"
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
