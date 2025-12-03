export default function Benefits() {
  const items = [
    {
      title: "Earn Money Hosting Paid Events",
      description:
        "Monetize your expertise by organizing exclusive training sessions, workshops, and competitions. Set your own prices and keep the majority of earnings.",
      icon: "/professional/benefits1.png",
    },
    {
      title: "Grow Your Sport Community",
      description:
        "Connect directly with fans, athletes, and enthusiasts. Build a loyal following and expand your influence in the sport community.",
      icon: "/professional/benefits2.png",
    },
    {
      title: "Gain Early Access & Visibility",
      description:
        "Be among the first Smatchy Pros with premium profile placement, featured listings, and priority support when the platform launches.",
      icon: "/professional/benefits3.png",
    },
  ];

  return (
    <div className="container relative z-30">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-4 bg-[#E2F6F6] rounded-2xl shadow-md p-6"
          >
            <img src={item.icon} alt="" className="w-12 h-12" />
            <h3 className="text-xl font-bold text-[#0F262E]">{item.title}</h3>
            <p className="text-sm text-[#0F262E]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
