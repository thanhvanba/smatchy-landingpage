import Loading from "../../../components/Loading";
import { useHome } from "../../../hooks/useHome";
import Slider from "./Slider";

export default function Presentation() {
  const { isLoading, error, reasons } = useHome();

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //console.log(reasons);

  const presentation = reasons.map((r) => r.reason);

  //console.log(presentation);

  return (
    <>
      {presentation[0] && (
        <div
          className="relative container mb-20! z-50"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="mt-12 flex flex-col items-center md:items-start gap-8 md:gap-28">
            {presentation[0].map((item, index) => {
              const baseClass =
                "relative z-50 text-sm md:text-base lg:text-[20px] font-bold space-y-3 md:space-y-4 text-center md:text-start";
              const paddedClass =
                index === 0
                  ? baseClass
                  : index === 1
                  ? "relative md:pl-12 z-50 text-sm md:text-base lg:text-[20px] font-bold space-y-3 md:space-y-4 text-center md:text-start"
                  : index === 2
                  ? "relative md:pl-28 z-50 text-sm md:text-base lg:text-[20px] font-bold space-y-3 md:space-y-4 text-center md:text-start"
                  : baseClass;

              return (
                <div key={item.id} className={paddedClass}>
                  <div className="inline-flex min-w-[150px] md:min-w-[218px] items-center justify-center bg-[#0A4A60] text-white rounded-[5px] px-2 md:px-3 py-1 md:py-0">
                    {item.heading}
                  </div>
                  <div
                    className="lg:pl-38 text-[#172E36] text-xs md:text-sm lg:text-base"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              );
            })}
          </div>

          <div className="hidden md:block absolute top-[-120px] right-0 w-[400px] lg:w-[520px] lg:h-[770px]">
            <Slider />
          </div>
        </div>
      )}
    </>
  );
}
