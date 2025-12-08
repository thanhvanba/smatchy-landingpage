import Loading from "../../../components/Loading";
import { useContactPage } from "../../../hooks/useContactPage";
import { useHero } from "../../../hooks/useHero";
//import heroBanner from "/hero-banner.png";
import Yay from "/Yay.png";
export default function ContactHeroBanner() {
  const { data, isLoading, error } = useHero("k8pxj4vdpa46rs41wsc94o63");
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  const { data: contact } = useContactPage();

  //console.log(contact);

  const titleBlock = contact?.blocks?.[0];
  //console.log(titleBlock);

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const slider = data?.heros?.find((h) => h.__component === "hero.slider");
  if (!slider) return [];

  const listBaner = slider.slider_images.map((img: any) => ({
    id: img.id,
    banner: img.url, // url gốc (có thể dùng img.formats.large.url nếu muốn)
  }));
  //console.log(listBaner);
  return (
    <>
      <div
        className="relative w-full h-full pt-10 md:pt-20 z-50"
        style={{
          backgroundImage: `url(${assetUrl}${listBaner[0].banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 mx-auto">
          <div
            className="flex flex-col items-center gap-4 md:gap-6 py-16 md:py-24 lg:py-32"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative font-bold text-2xl md:text-3xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-white text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock?.heading ? titleBlock?.heading : "",
                }}
              />
              <img
                className="absolute -top-10 -right-8 md:-top-10 md:-right-10 lg:-top-20 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay}
                alt=""
              />
            </div>
            <div className="font-medium text-base md:text-lg lg:text-2xl text-white text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: titleBlock?.sub_heading
                    ? titleBlock?.sub_heading
                    : "",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
