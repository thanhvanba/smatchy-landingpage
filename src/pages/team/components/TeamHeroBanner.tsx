import Loading from "../../../components/Loading";
import { useTeam } from "../../../hooks/useTeam";
import heroBanner from "/team/team-background.jpg";
import Yay from "/Yay.png";
export default function TeamHeroBanner() {
  const { data, isLoading, error } = useTeam();

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading team.</p>;

  const heading = data?.teamPage?.blocks?.[0].heading;
  const sub_heading = data?.teamPage?.blocks?.[0].sub_heading;

  return (
    <>
      <div
        className="relative inset-0 bg-cover bg-bottom w-full h-[400px] md:h-[564px] pt-10 md:pt-20 z-30"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0 z-40 bg-[#00000054]"></div>
        <div
          className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            <img
              className="absolute -top-10 md:-top-14 lg:-top-24 right-2 md:-right-8 lg:-right-20 w-12 md:w-20 lg:w-auto"
              src={Yay}
              alt=""
            />
            <div dangerouslySetInnerHTML={{ __html: heading ? heading : "" }} />
          </div>
          <div className="text-sm md:text-xl lg:text-2xl font-medium text-center text-white mt-3 md:mt-4">
            <div
              dangerouslySetInnerHTML={{
                __html: sub_heading ? sub_heading : "",
              }}
            />
          </div>
        </div>
        <div
          className="
    pointer-events-none
    absolute inset-x-0 bottom-0
    h-16 sm:h-24
    z-40
  "
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 8.24%, #FBFBFB 84.56%)",
          }}
        />
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
