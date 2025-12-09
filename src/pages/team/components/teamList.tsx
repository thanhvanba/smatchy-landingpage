import type { TeamMember } from "../types";
import TeamCard from "./teamCard";

export default function TeamList({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  return (
    <div className="container relative z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 lg:gap-10 xl:gap-24 lg:px-8">
        {teamMembers.map((member, index) => (
          <div
            className={
              index === 0 || index === 2 ? "pt-0 md:pt-0 lg:pt-20" : ""
            }
            data-aos="fade-up"
            data-aos-duration={index === 0 ? "500" : "2000"}
            key={index}
          >
            <TeamCard teamMember={member} />
          </div>
        ))}
      </div>
    </div>
  );
}

