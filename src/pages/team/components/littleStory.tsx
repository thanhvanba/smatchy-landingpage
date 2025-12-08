import Yay from "/Yay3.png";
import backgroundImg from "/team/background-img.png";
import CEO from "/team/CEO-img.png";
import quotation from "/quotation.png";
import quotation2 from "/quotation2.png";
import { useTeam } from "../../../hooks/useTeam";
import Loading from "../../../components/Loading";

export default function LittleStory() {
  const { data, isLoading, error } = useTeam();
  console.log("🚀 ~ Members ~ data:", data);

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading team.</p>;

  const littleStory = data?.teamPage?.blocks?.[1];
  console.log("🚀 ~ LittleStory ~ littleStory:", littleStory);

  return (
    <div className="container flex flex-col items-center relative z-50 mt-6! md:mt-8! lg:mt-10!">
      <div className=" inline-flex" data-aos="fade-up" data-aos-duration="1000">
        <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-8 md:mb-10 lg:mb-12">
          <div
            dangerouslySetInnerHTML={{
              __html: littleStory?.heading ? littleStory.heading : "",
            }}
          />
          <img
            className="absolute -top-6 -right-6 md:-top-14 md:-right-14 lg:-top-20 lg:-right-20 w-8 md:w-20 lg:w-auto"
            src={Yay}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-end items-center lg:items-end gap-6 md:gap-8 lg:gap-10 mb-32 md:mb-48 lg:mb-64">
        <div className="flex justify-center items-center w-full lg:w-3/5 bg-[#E2F6F6] rounded-tl-[30px] md:rounded-tl-[40px] lg:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[50px] rounded-tr-[80px] md:rounded-tr-[120px] lg:rounded-tr-[150px] rounded-bl-[80px] md:rounded-bl-[120px] lg:rounded-bl-[150px]">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="relaive z-10 px-12 lg:px-24 py-8 md:py-10 lg:py-12 rounded-lg text-sm md:text-base lg:text-xl font-medium text-[#0A4A60] space-y-3 md:space-y-3 lg:space-y-4"
          >
            <img
              className="absolute left-4 lg:left-10 h-4 lg:h-auto"
              src={quotation}
              alt=""
            />
            {/* <div>
              <p>
                Pendant la période COVID, Maude demande à sa communauté Les
                Bornées pourquoi ils font du sport avec eux. Une question très
                simple qui va être à la naissance du projet Smatchy, car la
                réponse la plus donnée par ses membres est d’une simplicité
                enfantine :
                <span className="text-[#FCA13B]">
                  {" "}
                  « Je n’aime pas faire du sport seul(e)«{" "}
                </span>
              </p>
              <p>
                Piquée par la curiosité et par cette idée, Maude fait des
                recherches et
                <span className="text-[#FCA13B]">
                  {" "}
                  ne trouve pas d’application qui réponde vraiment à ce besoin.{" "}
                </span>
                C’est là qu’est née l’idée de Smatchy.
              </p>
              <p>
                Il aura fallu deux années de travail et de développement pour
                sortir la première version de l’application en
                <span className="text-[#FCA13B]"> Décembre 2023.</span>
              </p>
            </div> */}
            <div
              dangerouslySetInnerHTML={{
                __html: littleStory?.sub_heading ? littleStory.sub_heading : "",
              }}
            />
            <img
              className="absolute right-10 h-4 lg:h-auto"
              src={quotation2}
              alt=""
            />
          </div>
        </div>
        <div className="relative w-full lg:w-2/5 mt-20 md:mt-0 h-auto">
          <img
            src={backgroundImg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <img
            src={CEO}
            alt="CEO"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="absolute bottom-0 z-10 object-contain origin-bottom"
          />
        </div>
      </div>
    </div>
  );
}
