import { FaArrowRightLong } from "react-icons/fa6";
import Yay3 from "/Yay3.png";
const steps = [
  {
    number: "01",
    label: "Step 1",
    title: "Sign Up & Profile",
    description: "Create profile with skill level, location, preferences",
  },
  {
    number: "02",
    label: "Step 2",
    title: "Get Matched",
    description: "Find perfect teammates & opponents nearby",
  },
  {
    number: "03",
    label: "Step 3",
    title: "Book & Play",
    description: "Reserve venues, pay through app, show up and play",
  },
  {
    number: "04",
    label: "Step 4",
    title: "Earn & Grow",
    description: "Coaches monetize sessions, athletes earn rewards",
  },
];

const UserJourneySection = () => {
  return (
    <div className="relative z-30 mb-28">
      <div className="container">
        <div className="flex flex-col items-center mt-10 md:mt-14 lg:mt-20">
          <div className=" inline-flex">
            <h2
              className="relative text-center text-2xl md:text-3xl lg:text-5xl text-[#0A4A60] font-bold mb-6 md:mb-8 lg:mb-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              THE USER <span className="text-[#FCA13B]">JOURNEY</span>
              <img
                className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2>
          </div>

          <div
            className="mb-6 md:mb-8 lg:mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button className="flex justify-center items-center gap-2 text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base font-semibold bg-[#FCA13B] transition">
              Get the App <FaArrowRightLong />
            </button>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            {steps.map((step, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#A2ABAF] mb-1 md:mb-2 lg:mb-2">
                  {step.number}
                </div>
                <div className="bg-[#E2F6F6] rounded-xl p-6 flex gap-4 items-start shadow-sm">
                  <div>
                    <div className="text-sm inline-flex font-semibold py-1 px-6 rounded-2xl bg-[#D9D9D9A8] bg-linear-to-r from-[#0A4A60]/.88 via-[#7F9EA6]/31 to-[#0A4A60]/65 mb-6">
                      {step.label}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0A4A60] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#0F262E] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourneySection;
