import { contactFormConfig } from "../../config/formConfig";
import { useLocale } from "../../contexts/LangContext";
import { useContactPage } from "../../hooks/useContactPage";
import ChatBot from "./components/ChatBot";
import ContactFormCard from "./components/ContactFormCard";
import ContactHeroBanner from "./components/ContactHeroBanner";
import line from "/line_bg.svg";
import Yay2 from "/Yay2.png";

export default function ContactPage() {
  const { locale } = useLocale();
  const { data: contact } = useContactPage();

  console.log(contact);

  const titleBlock = contact?.blocks?.[1];
  console.log(titleBlock);
  return (
    <div className="relative pb-4">
      <div className="relative w-full">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-28 md:-top-40 lg:-top-56 left-8 md:left-16 lg:left-28 scale-[3.5] md:scale-[5] lg:scale-[7] origin-top-left z-30 px-1.5 rotate-[3.5deg]"
          />
        </div>
        <ContactHeroBanner />
        <div
          className="relative flex items-center justify-center my-8 md:my-12 lg:my-20 z-40 px-4 md:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="relative inline-flex items-center justify-center text-center leading-6 md:leading-8 lg:leading-10 bg-[#F49F3F] rounded-2xl md:rounded-3xl lg:rounded-[30px] text-white font-bold text-sm md:text-lg lg:text-[32px] w-full md:w-[700px] lg:w-[930px] p-4 md:p-5 lg:p-6 ">
            <div dangerouslySetInnerHTML={{ __html: titleBlock?.heading ? titleBlock?.heading : "" }} />
            <img
              className="absolute top-0  md:-top-1 lg:-top-4 left-0 lg:-left-1 w-8 md:w-12 lg:w-auto"
              src={Yay2}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center relative container z-40 pb-16! md:pb-24! lg:pb-32!">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="inline-flex items-center justify-center bg-[#0A4A60] text-white text-xs md:text-sm lg:text-xl font-bold rounded-[5px] px-6 md:px-8 lg:px-12 py-1 mb-4 md:mb-5 lg:mb-6"
          >
            {(contactFormConfig.title as any)[locale]}
          </div>
          <div
            className="h-full -bg-conic-0 bg-white border border-[#d8d9da5c] rounded-2xl md:rounded-3xl shadow-2xl w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-full">
              <ContactFormCard />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end z-40 px-4 md:px-6 lg:px-10">
        <ChatBot />
      </div>
    </div>
  );
}
