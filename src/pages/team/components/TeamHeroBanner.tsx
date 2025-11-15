import { useTeam } from "../../../hooks/useTeam";
import heroBanner from "/team/team-background.jpg";
import Yay from "/Yay.png";
export default function TeamHeroBanner() {
  const { data, isLoading, error } = useTeam();

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Error loading team.</p>;

  const heading = data?.teamPage?.blocks?.[0].heading;
  const sub_heading = data?.teamPage?.blocks?.[0].sub_heading;

  return (
    <>
      <div
        className="relative inset-0 bg-cover bg-bottom w-full h-[564px] pt-20 z-30"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0 z-40 bg-[#00000054]"></div>
        <div className="absolute z-50 top-1/2 -translate-1/2 left-1/2  flex flex-col items-center">
          <div className="text-5xl font-bold text-white">
            <img className="absolute -top-24 -right-20" src={Yay} alt="" />
            <div dangerouslySetInnerHTML={{ __html: heading }} />
          </div>
          <div className="text-2xl font-medium text-center text-white mt-4">
            <div dangerouslySetInnerHTML={{ __html: sub_heading }} />
          </div>

          {/* <h2 className="text-5xl font-bold text-white">
            MEET <span className="text-[#FCA13B]">OUR TEAM</span>
            <img className="absolute -top-24 -right-20" src={Yay} alt="" />
          </h2> */}
          {/* <p className="text-2xl font-medium text-center text-white mt-4">
            A passionate team transforming <br /> the world of sport!
          </p> */}
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
