// import type { TeamMember } from "../types";
// import TeamCard from "./teamCard";

// export default function TeamList({
//   teamMembers,
// }: {
//   teamMembers: TeamMember[];
// }) {
//   return (
//     <div className="container relative z-50">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 lg:gap-10 xl:gap-24 lg:px-8">
//         {teamMembers.map((member, index) => (
//           <div
//             className={
//               index === 0 || index === 2 ? "pt-0 md:pt-0 lg:pt-20" : ""
//             }
//             data-aos="fade-up"
//             data-aos-duration={index === 0 ? "500" : "2000"}
//             key={index}
//           >
//             <TeamCard teamMember={member} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import type { TeamMember } from "../types";
import TeamCard from "./teamCard";

export default function TeamList({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  return (
    <div className="container relative z-50 px-4 sm:px-6">
      {/* 
        - mobile: 1 cột
        - tablet (≥640px): 3 cột (scale nhỏ)
        - desktop: vẫn 3 cột, nhưng nới rộng gap/padding
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
        {teamMembers.map((member, index) => (
          <div
            key={member.id ?? index}
            className={`${
              index === 0 || index === 2 ? "pt-0 sm:pt-16" : "pt-0"
            }`}
            data-aos="fade-up"
            data-aos-duration={index === 0 ? "500" : "2000"}
          >
            <TeamCard teamMember={member} />
          </div>
        ))}
      </div>
    </div>
  );
}
