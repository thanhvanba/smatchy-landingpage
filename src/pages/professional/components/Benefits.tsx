import { usePro } from "../../../hooks/usePro";

export default function Benefits() {
  const items = [
    {
      title: "Earn Money Hosting Paid Events",
      description:
        "Monetize your expertise by organizing exclusive training sessions, workshops, and competitions. Set your own prices and keep the majority of earnings.",
      icon: "/professional/benefits1.svg",
    },
    {
      title: "Grow Your Sport Community",
      description:
        "Connect directly with fans, athletes, and enthusiasts. Build a loyal following and expand your influence in the sport community.",
      icon: "/professional/benefits2.svg",
    },
    {
      title: "Gain Early Access & Visibility",
      description:
        "Be among the first Smatchy Pros with premium profile placement, featured listings, and priority support when the platform launches.",
      icon: "/professional/benefits3.svg",
    },
  ];

  const { data } = usePro();
  //  //const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;

  console.log(data);

  //   //const bg2 = hero?.background_image.url;

  const titleBlock = data?.blocks?.[2];

  //   console.log(titleBlock);

  const benefitsList =
    titleBlock?.stats_icon?.map((item: any, index: number) => ({
      id: index,
      heading: item.heading,
      description: item.description,
    })) || items;

  console.log(benefitsList);

  return (
    <div className="container relative z-30">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {benefitsList.map((benefit: any, id: number) => (
          <div
            key={id}
            className="flex flex-col items-center text-center gap-4 bg-[#E2F6F6] rounded-2xl shadow-md p-6"
          >
            <img
              src={benefit.icon || items[id]?.icon}
              alt=""
              className="w-12 h-12"
            />
            <h3 className="text-xl font-bold text-[#0F262E]">
              {benefit.heading || benefit.title}
            </h3>
            <p className="text-sm text-[#0F262E]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
