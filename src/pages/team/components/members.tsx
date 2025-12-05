import Loading from "../../../components/Loading";
import { useTeam } from "../../../hooks/useTeam";
import TeamList from "./teamList";
import background from "/background.png";
import line from "/line_bg.svg";
import type { Person } from "../../../services/types/team";
// import mem2 from "/team/CEO.png";
// import mem3 from "/team/lead-partner-2.png";
// import mem1 from "/team/lead-partner.png";
// const teamMembers_data = [
//   {
//     name: "Philippe Nguyen",
//     title: "Lead Partner – Amagumo Labs",
//     avatar: mem1,
//     bio: "Associé dans le projet depuis ses débuts, Johan est le chef d'orchestre derrière toute l'interface technique de l'app. Ses compétences en tant que développeur Full Stack depuis 7 ans font de lui un maillon essentiel dans la chaine de développement. Passionné de sport, triathlète accompli qui enchaine les records sur ses courses, il apporte une passion et du dynamisme à toute l'équipe.",
//     social: {
//       facebook: "https://facebook.com/philippe.nguyen",
//       instagram: "https://instagram.com/philippe.nguyen",
//       linkedin: "https://linkedin.com/in/philippe-nguyen",
//     },
//   },
//   {
//     name: "Maude Baudier",
//     title: "CEO & Fondatrice",
//     avatar: mem2,
//     bio: "C'est celle que l'on voit le plus ! Elle s’occupe de tout le monde et s'assure que le projet avance comme sur des roulettes ! La comm’ et le marketing n'ont pas de secret pour elle. Après avoir travaillé dans le monde du luxe, puis des startups digitales, elle s'est lancée en tant qu'entrepreneuse et a monté deux projets : Print Your Race et Les Bornées. Triathlète, sportive passionnée, on peut la retrouver dans les montagnes annéciennes sur son vélo ou en train de courir.",
//     social: {
//       facebook: "https://facebook.com/maude.baudier",
//       instagram: "https://instagram.com/maude.baudier",
//       linkedin: "https://linkedin.com/in/maude-baudier",
//     },
//   },
//   {
//     name: "Emilie Fravallo",
//     title: "Lead Partner – Maemi",
//     avatar: mem3,
//     bio: "La tête pensante derrière toute l'interface de l'app. Elle imagine et crée les écrans et les parcours utilisateurs pour transcender l'expérience des membres. Quand elle ne réalise pas des recettes ou des maquettes sous Figma, on peut la retrouver dans la région d'Annecy sur son vélo, en tain de courir ou de nager. Vous l'aurez compris, c'est aussi une triathlète passionnée qui réalise de magnifique performances sur ses courses.",
//     social: {
//       facebook: "https://facebook.com/emilie.fravallo",
//       instagram: "https://instagram.com/emilie.fravallo",
//       linkedin: "https://linkedin.com/in/emilie-fravallo",
//     },
//   },
// ];
export default function Members() {
  const { data, isLoading, error } = useTeam();
  console.log("🚀 ~ Members ~ data:", data);

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading team.</p>;
  if (!data?.teamMembers) return <p>No data available.</p>;

  const chunkSize = 3;
  const chunks: (Person[] | null | undefined)[] = [];
  for (let i = 0; i < data.teamMembers!.length; i += chunkSize) {
    chunks.push(data.teamMembers!.slice(i, i + chunkSize));
  }

  // const teamMembers = [];

  //console.log(teamMembers)

  // 2. Template 1
  interface TemplateProps {
    members: Person[] | null | undefined;
  }

  const Template1 = ({ members }: TemplateProps) => (
    <div className="-mt-28">
      {/* @ts-expect-error Person[] is compatible with TeamMember[] for display purposes */}
      <TeamList teamMembers={members} />
    </div>
  );

  // 3. Template 2
  const Template2 = ({ members }: TemplateProps) => (
    <div>
      <div className="relative w-full z-20">
        <div className="absolute w-[110vw] h-80 md:h-[422.38px] -top-60 -left-5 rotate-[-4.99deg] bg-[#E2F6F6]" />
        <div className="absolute w-[110vw] h-80 md:h-[422.38px] -top-[30px] -left-5 rotate-[6.24deg] bg-[#E2F6F6]" />
      </div>

      {/* @ts-expect-error Person[] is compatible with TeamMember[] for display purposes */}
      <TeamList teamMembers={members} />
    </div>
  );

  // 4. Template 3
  const Template3 = ({ members }: TemplateProps) => (
    <div className="relative w-full mt-5">
      <div className="hidden sm:block relative z-30 container">
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-32 md:-top-48 lg:-top-64 left-[60%] md:left-[70%] lg:left-[80%] scale-[4] md:scale-[6] lg:scale-[8] origin-top-left px-1.5 rotate-[40.67deg]"
        />
      </div>
      <div
        className="relative z-20 w-full h-[300px] lg:h-[360px] bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
      <div className="relative -mt-[300px] lg:-mt-[380px]">
        {/* @ts-expect-error Person[] is compatible with TeamMember[] for display purposes */}
        <TeamList teamMembers={members} />
      </div>
    </div>
  );

  const templates = [Template1, Template2, Template3];

  return (
    <div>
      <div>
        <div className="relative flex flex-col gap-[30px]">
          {chunks.map((members, index) => {
            let Template;

            if (index === 0) {
              // Nhóm đầu tiên → Template1
              Template = Template1;
            } else {
              Template = templates[1 + ((index - 1) % 2)];
            }

            return <Template key={index} members={members} />;
          })}
        </div>
      </div>
    </div>
  );
}
