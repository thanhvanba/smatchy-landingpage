import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { TeamMember } from "../../team/types";

const socialIcons = [
  {
    name: "facebook",
    icon: FaFacebookF,
  },
  {
    name: "instagram",
    icon: FaInstagram,
  },
  {
    name: "linkedin",
    icon: FaLinkedinIn,
  },
];

export default function TeamCard({ teamMember }: { teamMember: TeamMember }) {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="group flex flex-col items-center text-center border-[6px] border-[#FFFFFF5C] rounded-full bg-[#ECEEEF] hover:bg-[#0A4A60] px-6 pb-20 w-full transition-colors duration-300"
    >
      {/* Avatar */}
      <img
        src={teamMember.avatar}
        alt={teamMember.name}
        className="object-cover mb-6 rounded-full"
      />

      {/* Name & Title */}
      <div>
        <h3 className="text-xl font-bold text-[#0A4A60] group-hover:text-white mb-2 transition-colors duration-300">
          {teamMember.name}
        </h3>
        <p className="text-[14px] font-bold text-[#FCA13B] mb-4">
          {teamMember.title}
        </p>
      </div>

      {/* Bio */}
      <p className="text-[14px] text-[#0F262E] group-hover:text-white leading-relaxed mb-6 transition-colors duration-300 line-clamp-4">
        {teamMember.bio}
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-auto">
        {socialIcons.map(({ name, icon: Icon }) => {
          const url = teamMember.social[name as keyof typeof teamMember.social];
          if (!url) return null;

          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A4A60] text-white group-hover:text-[#0A4A60] p-3 rounded-full group-hover:bg-white transition"
            >
              <Icon size={28} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
