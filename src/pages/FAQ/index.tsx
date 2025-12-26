import { useState } from "react";
import Yay3 from "/Yay3.png";
import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface FAQItem {
  title: string;
  content: string;
}

const faqs: FAQItem[] = [
  {
    title: "How to add a payment method?",
    content:
      "To create paid events and receive payouts, Pro Organizers must connect a Stripe Express account. The connection process is guided by Stripe and requires basic identity and bank information.",
  },
  {
    title: "How to connect Stripe?",
    content:
      "Go to your dashboard, select Payments, then follow the Stripe onboarding steps to connect your account securely.",
  },
  {
    title: "Refund as a Participant",
    content:
      "Participants can request a refund from the event page if the organizer allows refunds.",
  },
  {
    title: "Help for Event Creator",
    content:
      "Once connected, payouts will be processed securely through Stripe. Matchy does not store your banking details.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div
        className="relative w-full h-16 md:h-20 lg:h-24 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="relative pt-32 pb-10 mx-5">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="hidden md:block absolute w-auto -top-40 md:-top-48 lg:-top-52 left-10 md:left-16 lg:left-20 scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
          />
        </div>
        <div className="relative container z-40 bg-[#E2F6F6] rounded-2xl p-4! lg:p-9! shadow-md">
          {/* Header */}
          <div
            className="inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="relative text-center text-xl md:text-2xl lg:text-5xl text-[#0A4A60] font-bold pt-2 md:pt-3 lg:pt-4">
              <span className="text-[#FCA13B]">FREQUENTLY </span>
              ASKED QUESTIONS
              <img
                className="absolute -top-6 md:-top-8 lg:-top-16 -right-8 md:-right-12 lg:-right-20 w-12 md:w-16 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2>
          </div>

          {/* List */}
          <div className="space-y-6 mt-6">
            {faqs.map((item, index) => {
              const isOpen: boolean = openIndex === index;

              return (
                <div
                  key={index}
                  className={`flex flex-col gap-4 rounded-xl transition-all py-2 px-4 ${
                    isOpen ? "bg-[#1A7D9C26]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className={`${
                      isOpen
                        ? "text-[#0A4A60] font-bold"
                        : "text-[#0F262E] font-medium"
                    } w-full flex items-center justify-between text-left text-xl`}
                  >
                    <span className="pr-2">{item.title}</span>
                    <span className="flex items-center justify-center min-w-6 min-h-6 rounded-full bg-[#0A4A60] text-white text-sm">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {isOpen && (
                    <>
                      <div className="border border-white"></div>
                      <p className="text-[#0F262E] leading-relaxed">
                        {item.content}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
