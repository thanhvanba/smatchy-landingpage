import { FaArrowRightLong } from "react-icons/fa6";
import Yay3 from "/Yay3.png";
import TeamCard from "./teamCard";
// import team1 from "/team/communication-manager.png";
// import team2 from "/team/lead-partner-2.png";
import { useTeam } from "../../../hooks/useTeam";
import Loading from "../../../components/Loading";
import { InvestorPopulateType } from "../../../services/strapi";
import { useInvestor } from "../../../hooks/useInvestor";
// const teamMembers = [
//   {
//     name: "Amandine Lecerf",
//     title: "Communication Manager",
//     avatar: team1,
//     bio: "Associé dans le projet depuis ses débuts, Johan est le chef d'orchestre derrière toute l'interface technique de l'app. Ses compétences en tant que développeur Full Stack depuis 7 ans font de lui un maillon essentiel dans la chaine de développement. Passionné de sport, triathlète accompli qui enchaine les records sur ses courses, il apporte une passion et du dynamisme à toute l'équipe.",
//     social: {
//       facebook: "https://facebook.com/philippe.nguyen",
//       instagram: "https://instagram.com/philippe.nguyen",
//       linkedin: "https://linkedin.com/in/philippe-nguyen",
//     },
//   },
//   {
//     name: "Romain Felix",
//     title: "Growth Hacking",
//     avatar: "team/growth-hacking.png",
//     bio: "C'est celle que l'on voit le plus ! Elle s'occupe de tout le monde et s'assure que le projet avance comme sur des roulettes ! La comm' et le marketing n'ont pas de secret pour elle. Après avoir travaillé dans le monde du luxe, puis des startups digitales, elle s'est lancée en tant qu'entrepreneuse et a monté deux projets : Print Your Race et Les Bornées. Triathlète, sportive passionnée, on peut la retrouver dans les montagnes annéciennes sur son vélo ou en train de courir.",
//     social: {
//       facebook: "https://facebook.com/maude.baudier",
//       instagram: "https://instagram.com/maude.baudier",
//       linkedin: "https://linkedin.com/in/maude-baudier",
//     },
//   },
//   {
//     name: "Emilie Fravallo",
//     title: "Lead Partner – Maemi",
//     avatar: team2,
//     bio: "La tête pensante derrière toute l'interface de l'app. Elle imagine et crée les écrans et les parcours utilisateurs pour transcender l'expérience des membres. Quand elle ne réalise pas des recettes ou des maquettes sous Figma, on peut la retrouver dans la région d'Annecy sur son vélo, en tain de courir ou de nager. Vous l'aurez compris, c'est aussi une triathlète passionnée qui réalise de magnifique performances sur ses courses.",
//     social: {
//       facebook: "https://facebook.com/emilie.fravallo",
//       instagram: "https://instagram.com/emilie.fravallo",
//       linkedin: "https://linkedin.com/in/emilie-fravallo",
//     },
//   },
//   {
//     name: "Maude Baudier",
//     title: "CEO & Fondatrice",
//     avatar: "team/CEO.png",
//     bio: "La tête pensante derrière toute l'interface de l'app. Elle imagine et crée les écrans et les parcours utilisateurs pour transcender l'expérience des membres. Quand elle ne réalise pas des recettes ou des maquettes sous Figma, on peut la retrouver trong la région d'Annecy sur son vélo, en tain de courir ou de nager. Vous l'aurez compris, c'est aussi une triathlète passionnée qui réalise de magnifique performances sur ses courses.",
//     social: {
//       facebook: "https://facebook.com/emilie.fravallo",
//       instagram: "https://instagram.com/emilie.fravallo",
//       linkedin: "https://linkedin.com/in/emilie-fravallo",
//     },
//   },
// ];
export default function TheTeamSection() {
  const { data, isLoading, error } = useTeam();
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const {
    data: basic,
    isLoading: isLoadingStats,
    error: errorStats,
  } = useInvestor(InvestorPopulateType.BASIC);

  //console.log("🚀 ~ Members ~ data:", data);

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading team.</p>;
  if (!data?.teamMembers) return <p>No data available.</p>;

  if (isLoadingStats) return <Loading />;
  if (errorStats) return null;

  //console.log(basic);

  const titleBlock = basic?.blocks?.find(
    (block: any): block is any =>
      block.__component === "shared.icon-text" && block.title === "The Team"
  );

  // const teamMembers = data.teamMembers.map((member: any) => ({
  //   name: member.name,
  //   title: member.title,
  //   avatar: member.avatar?.url,
  //   bio: member.bio,
  //   order: member.order,
  //   excerpt: member.excerpt,
  //   social: {
  //     facebook: member.facebook,
  //     instagram: member.instagram,
  //     linkedin: member.linkedin,
  //   },
  // }));

  // Filter team members by name
  const SELECTED_NAMES = [
    "Maude Baudier",
    "Romain Bauer",
    "Amandine Lecerf",
    "Emilie Fravallo",
  ];
  const selectedMembers = data.teamMembers.filter((member: any) =>
    SELECTED_NAMES.includes(member.name)
  );

  const ORDER_INDICES = [0, 3, 2, 1];
  const filteredTeamMembers = ORDER_INDICES.map(
    (index) => selectedMembers[index]
  ).filter(Boolean);

  // console.log("🚀 ~ TheTeamSection ~ teamMembers:", teamMembers);
  // console.log("🚀 ~ TheTeamSection ~ teamMembers:", teamMembers);
  // console.log(
  //   "🚀 ~ TheTeamSection ~ filteredTeamMembers:",
  //   filteredTeamMembers
  // );

  return (
    <div className="mb-12 md:mb-16 lg:mb-20">
      <div className="relative w-full z-20">
        <div className="absolute -left-5 w-[110vw] h-[220px] md:h-[422.38px] -top-[30px] md:-top-[50px] -rotate-[4.99deg] bg-[#E2F6F6] opacity-100" />
        <div className="absolute -left-5 w-[120vw] h-[220px] md:h-[422.38px] top-[120px] md:top-[220px] rotate-[6.24deg] bg-[#E2F6F6] opacity-100" />
      </div>

      <div className="container relative z-30 py-8! md:py-10! lg:py-12!">
        <div className="flex flex-col items-center">
          <div
            className=" inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-4 md:mb-6 lg:mb-8">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock.heading ? titleBlock.heading : "",
                }}
              />
              <img
                className="absolute -top-8 -right-8 md:-top-10 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </div>
          </div>
          <div
            className="text-center text-[#0A4A60] mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: titleBlock.description ? titleBlock.description : "",
              }}
            />
          </div>

          <div
            className="mb-6 md:mb-7 lg:mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
              Learn More <FaArrowRightLong />
            </button> */}
            <button
              onClick={() =>
                titleBlock.button.link &&
                window.open(
                  titleBlock.button.link,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              disabled={!titleBlock.button.link}
              className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FCA13B] bg-[#FCA13B]/90 transition"
            >
              {titleBlock.button.label}
              <FaArrowRightLong />
            </button>
          </div>

          <div className="container relative z-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
              {filteredTeamMembers.map((member: any, index: number) => {
                // Convert bio array [{platform, url}] to social object {platform: url}
                const social =
                  member.bio?.reduce((acc: any, item: any) => {
                    acc[item.platform] = item.url;
                    return acc;
                  }, {} as Record<string, string>) || {};

                let avatarUrl = "";
                if (typeof member.avatar === "object" && member.avatar) {
                  const avatar = member.avatar as { url: string };
                  avatarUrl = `${assetUrl}${avatar.url}`;
                } else if (typeof member.avatar === "string") {
                  avatarUrl = member.avatar;
                }

                const teamMember = {
                  name: member.name,
                  title: member.role,
                  bio: member.description,
                  avatar: avatarUrl,
                  social: social,
                };

                return (
                  <div key={index}>
                    <TeamCard teamMember={teamMember as any} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
