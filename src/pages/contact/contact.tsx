import ContactFormCard from "./components/ContactFormCard";
import ContactHeroBanner from "./components/ContactHeroBanner";
import ContactInfoCard from "./components/ContactInfoCard";
import line from "/line_bg.svg";
import Yay2 from "/Yay2.png";
import ChatBot from "./components/ChatBot";

export default function ContactPage() {
  return (
    <div className="relative pb-4">
      <div className="relative w-full">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-56 left-28 scale-[7] origin-top-left z-30 px-1.5 rotate-[3.5deg]"
          />
        </div>
        <ContactHeroBanner />
        <div className="relative flex items-center justify-center my-20 z-40">
          <div className="relative flex items-center justify-center text-center leading-10 bg-[#F49F3F] rounded-[30px] text-white font-bold text-[32px] w-[930px] p-6 ">
            For any technical questions or assistance with the app, contact us
            directly via the app or by email.
            <img className="absolute -top-3 left-1" src={Yay2} alt="" />
          </div>
        </div>

        <div className="relative container z-40 pb-32!">
          <div className="inline-flex items-center justify-center bg-[#0A4A60] text-white text-xl font-bold rounded-[5px] px-12 py-1 mb-6">
            Send us a message
          </div>
          <div className="relative z-40">
            <div className="h-full -bg-conic-0 bg-white border border-[#d8d9da5c] rounded-3xl shadow-2xl w-3/4">
              <div className="w-2/3">
                <ContactFormCard />
              </div>
            </div>
            <div className="absolute top-32 right-0 w-1/2">
              <ContactInfoCard />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end z-40 px-10 mt-52">
        <ChatBot />
      </div>
    </div>
  );
}
