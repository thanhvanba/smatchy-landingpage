import type { TeamMember } from "../types";
//import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

// const socialIcons = [
//   {
//     name: "facebook",
//     icon: FaFacebookF,
//   },
//   {
//     name: "instagram",
//     icon: FaInstagram,
//   },
//   {
//     name: "linkedin",
//     icon: FaLinkedinIn,
//   },
// ];

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  github: FaGithub,
  facebook: FaFacebook,
  website: FaGlobe,
  instagram: FaInstagram,
};

export default function TeamCard({ teamMember }: { teamMember: TeamMember }) {
  console.log(teamMember);
 const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const avatar = (teamMember.avatar as { url?: string })?.url;

  return (
    <div className="group flex flex-col items-center text-center border-[6px] border-[#FFFFFF5C] rounded-full bg-[#ECEEEF] hover:bg-[#0A4A60] px-6 pb-20 w-full transition-colors duration-300">
      {/* Avatar */}
      <img
        src={`${assetUrl}${avatar}`}
        //src={teamMember.avatar}
        alt={teamMember.name}
        className="object-cover mb-6 rounded-full"
      />

      {/* Name & Title */}
      <div>
        <h3 className="text-base md:text-lg lg:text-[24px] font-bold text-[#0A4A60] group-hover:text-white mb-1 md:mb-2 transition-colors duration-300">
          {teamMember.name}
        </h3>
        <p className="text-xs md:text-sm lg:text-[16px] font-semibold text-[#FCA13B] mb-2 md:mb-3 lg:mb-4">
          {teamMember.role}
        </p>
      </div>

      {/* Bio */}
      <p className="text-[11px] md:text-xs lg:text-[14px] text-[#0F262E] group-hover:text-white leading-relaxed mb-4 md:mb-5 lg:mb-6 transition-colors duration-300">
        {teamMember.description}
      </p>

      {/* Social Icons */}
      {/* <div className="flex gap-4 mt-auto">
        {bio.map(({ name, icon: Icon }) => {
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
      </div> */}
      <div className="flex gap-2 md:gap-3 lg:gap-4 mt-auto justify-center pt-2 md:pt-3 lg:pt-4">
        {/* {teamMember.bio?.map(({ id, platform, url }) => {
          const key = platform.toLowerCase();
          const Icon = SOCIAL_ICONS[key] || SOCIAL_ICONS.website;
          if (!url) return null;

          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A4A60] text-white group-hover:text-[#0A4A60] p-3 rounded-full group-hover:bg-white transition"
            >
              <Icon size={28} />
            </a>
          );
        })} */}

        {(Array.isArray(teamMember.bio) ? teamMember.bio : []).map(
          (item: any) => {
            const { id, platform, url } = item as {
              id: string | number;
              platform: string;
              url?: string;
            };
            const key = platform.toLowerCase();
            console.log(key);
            const Icon = SOCIAL_ICONS[key] || SOCIAL_ICONS.website;
            if (!url) return null;

            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A4A60] text-white group-hover:text-[#0A4A60] p-2 md:p-2.5 lg:p-3 rounded-full group-hover:bg-white transition"
              >
                <Icon size={28} />
              </a>
            );
          }
        )}
      </div>
    </div>
  );
}
