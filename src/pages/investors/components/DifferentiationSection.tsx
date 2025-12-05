import { FaArrowRightLong } from "react-icons/fa6";
//import differentiation from "/investors/differentiation.png";
import Yay3 from "/Yay3.png";
import { InvestorPopulateType } from "../../../services/strapi";
import { useInvestor } from "../../../hooks/useInvestor";
import Loading from "../../../components/Loading";
const DifferentiationSection = () => {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  if (isLoading) return <Loading />;
  if (error) return null;
  // console.log(data);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "shared.icon-text" &&
      block.title === "Our Differentiation"
  );

  const differentiation = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "shared.media" &&
      block.title === "Image Our Differentiation"
  );

  return (
    <div
      className="container relative z-30 pb-8! md:pb-12! lg:pb-16!"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col items-center">
        <div className=" inline-flex">
          <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8 lg:mb-12">
            <div
              dangerouslySetInnerHTML={{
                __html: titleBlock.heading ? titleBlock.heading : "",
              }}
            />
            <img
              className="absolute -top-10 -right-8 md:-top-14 md:-right-14 lg:-top-20 lg:-right-20 w-8 md:w-20 lg:w-auto"
              src={Yay3}
              alt=""
            />
          </div>
        </div>
        <div className="text-center text-[#0A4A60] mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-base">
          <div
            dangerouslySetInnerHTML={{
              __html: titleBlock.sub_heading ? titleBlock.sub_heading : "",
            }}
          />
        </div>
        {/* <p className="text-center text-[#0A4A60] mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-base">
          Smatchy is not just a social network – it's the central ecosystem for
          all sports.
        </p> */}

        <div className="mb-6 md:mb-7 lg:mb-8">
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
            {titleBlock.button.label} <FaArrowRightLong />
          </button>
        </div>

        <div className="w-full">
          <img
            className="w-full"
            src={`${assetUrl}${differentiation.file.url}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DifferentiationSection;
