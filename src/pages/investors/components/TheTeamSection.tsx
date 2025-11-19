import { FaArrowRightLong } from "react-icons/fa6";
import Yay3 from "/Yay3.png";
import TeamCard from "./teamCard";
import team1 from "/team/communication-manager.png";
import team2 from "/team/lead-partner-2.png";
const teamMembers = [
  {
    name: "Amandine Lecerf",
    title: "Communication Manager",
    avatar: team1,
    bio: "Associé dans le projet depuis ses débuts, Johan est le chef d'orchestre derrière toute l'interface technique de l'app. Ses compétences en tant que développeur Full Stack depuis 7 ans font de lui un maillon essentiel dans la chaine de développement. Passionné de sport, triathlète accompli qui enchaine les records sur ses courses, il apporte une passion et du dynamisme à toute l'équipe.",
    social: {
      facebook: "https://facebook.com/philippe.nguyen",
      instagram: "https://instagram.com/philippe.nguyen",
      linkedin: "https://linkedin.com/in/philippe-nguyen",
    },
  },
  {
    name: "Romain Felix",
    title: "Growth Hacking",
    avatar: "team/growth-hacking.png",
    bio: "C'est celle que l'on voit le plus ! Elle s'occupe de tout le monde et s'assure que le projet avance comme sur des roulettes ! La comm' et le marketing n'ont pas de secret pour elle. Après avoir travaillé dans le monde du luxe, puis des startups digitales, elle s'est lancée en tant qu'entrepreneuse et a monté deux projets : Print Your Race et Les Bornées. Triathlète, sportive passionnée, on peut la retrouver dans les montagnes annéciennes sur son vélo ou en train de courir.",
    social: {
      facebook: "https://facebook.com/maude.baudier",
      instagram: "https://instagram.com/maude.baudier",
      linkedin: "https://linkedin.com/in/maude-baudier",
    },
  },
  {
    name: "Emilie Fravallo",
    title: "Lead Partner – Maemi",
    avatar: team2,
    bio: "La tête pensante derrière toute l'interface de l'app. Elle imagine et crée les écrans et les parcours utilisateurs pour transcender l'expérience des membres. Quand elle ne réalise pas des recettes ou des maquettes sous Figma, on peut la retrouver dans la région d'Annecy sur son vélo, en tain de courir ou de nager. Vous l'aurez compris, c'est aussi une triathlète passionnée qui réalise de magnifique performances sur ses courses.",
    social: {
      facebook: "https://facebook.com/emilie.fravallo",
      instagram: "https://instagram.com/emilie.fravallo",
      linkedin: "https://linkedin.com/in/emilie-fravallo",
    },
  },
  {
    name: "Maude Baudier",
    title: "CEO & Fondatrice",
    avatar: "team/CEO.png",
    bio: "La tête pensante derrière toute l'interface de l'app. Elle imagine et crée les écrans et les parcours utilisateurs pour transcender l'expérience des membres. Quand elle ne réalise pas des recettes ou des maquettes sous Figma, on peut la retrouver trong la région d'Annecy sur son vélo, en tain de courir ou de nager. Vous l'aurez compris, c'est aussi une triathlète passionnée qui réalise de magnifique performances sur ses courses.",
    social: {
      facebook: "https://facebook.com/emilie.fravallo",
      instagram: "https://instagram.com/emilie.fravallo",
      linkedin: "https://linkedin.com/in/emilie-fravallo",
    },
  },
];
export default function TheTeamSection() {
  return (
    <div className="mb-12 md:mb-16 lg:mb-20">
      <div className="relative w-full z-20">
        <div
          style={{
            width: "110vw",
            height: "422.38px",
            position: "absolute",
            top: "-50px",
            left: "0px",
            transform: "rotate(-4.99deg)",
            opacity: 1,
            backgroundColor: "#E2F6F6",
          }}
        ></div>

        <div
          style={{
            width: "110vw",
            height: "422.38px",
            position: "absolute",
            top: "220px",
            left: "0px",
            transform: "rotate(6.24deg)",
            opacity: 1,
            backgroundColor: "#E2F6F6",
          }}
        ></div>
      </div>
      <div className="container relative z-30 py-8! md:py-10! lg:py-12!">
        <div className="flex flex-col items-center">
          <div
            className=" inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-4 md:mb-6 lg:mb-8">
              THE <span className="text-[#FCA13B]">TEAM</span>
              <img
                className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2>
          </div>
          <p
            className="text-center text-[#0A4A60] mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            A proven team with deep expertise in sports, technology, and scaling
            consumer platforms
          </p>

          <div
            className="mb-6 md:mb-7 lg:mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
              Learn More <FaArrowRightLong />
            </button>
          </div>

          <div className="container relative z-50 px-2 md:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index}>
                  <TeamCard teamMember={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
