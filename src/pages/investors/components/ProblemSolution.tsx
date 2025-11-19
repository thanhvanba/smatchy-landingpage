import type { ProblemSolutionData } from "../types";
import ListProblemSolution from "./ListProblemSolution";
import problemIcon1 from "/investors/finding-user.png";
import problemIcon2 from "/investors/team-sport.png";
import problemIcon3 from "/investors/coach.png";
import problemIcon4 from "/investors/shake-hands.png";
import problemIcon5 from "/investors/earn-money.png";
import problemIcon6 from "/investors/ecosystem.png";
const problemSolutionData: ProblemSolutionData = {
  problem: {
    title: "The Problem",
    items: [
      {
        icon: problemIcon2,
        title: "Decline of traditional clubs",
        description:
          "Traditional club sports practices are declining, people seek more flexibility.",
      },
      {
        icon: problemIcon1,
        title: "Difficulty finding partners",
        description:
          "Looking for someone with the same availabilities, sport and level is difficult.",
      },
      {
        icon: problemIcon3,
        title: "Lack of tools for coaches and brands",
        description:
          "Sports professionals lack a dedicated platform to reach their audience.",
      },
    ],
  },
  solution: {
    title: "The Solution",
    items: [
      {
        icon: problemIcon4,
        title: "Instant connection",
        description:
          "Smatchy connects athletes in a few clicks based on their preferences and level.",
      },
      {
        icon: problemIcon5,
        title: "Integrated monetization",
        description:
          "Commission + advertising model to generate sustainable revenue.",
      },
      {
        icon: problemIcon6,
        title: "Complete ecosystem",
        description:
          "A B2C and B2B platform serving users, coaches, clubs and brands.",
      },
    ],
  },
};

const ProblemSolution = () => {
  const { problem, solution } = problemSolutionData;

  return (
    <div className="relative z-40" data-aos="fade-up" data-aos-duration="1000">
      <div className="container py-6! md:py-8! lg:py-10! px-2! md:px-4! lg:px-6!">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <ListProblemSolution
            title={problem.title}
            items={problem.items}
            bgColor="#F6E3E3"
            accentColor="#C73F3F"
          />
          <ListProblemSolution
            title={solution.title}
            items={solution.items}
            bgColor="#DDEDE5"
            accentColor="#1F8554"
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
