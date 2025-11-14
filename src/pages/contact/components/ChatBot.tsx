import LogoFondjaune from "/contact/Logo_fondjaune.png";
import Logo3Blanc from "/contact/Logo3_blanc.png";
import { HiMiniXMark } from "react-icons/hi2";
import { BsChatDotsFill } from "react-icons/bs";
import { useState } from "react";

export default function ChatBot() {
  const [openChatbot, setOpenChatbot] = useState(false);
  return (
    <div className="flex flex-col items-end w-96 gap-6">
      {openChatbot && (
        <div className="flex flex-col w-full shadow">
          <h3 className="flex justify-between items-center gap-2 bg-[#FCA13B] p-3">
            <div className="flex gap-2">
              <img src={LogoFondjaune} alt="" />
              <img className="object-contain" src={Logo3Blanc} alt="" />
            </div>
            <HiMiniXMark
              onClick={() => setOpenChatbot(false)}
              className="text-white h-6 w-6 cursor-pointer"
            />
          </h3>
          <div className="flex-1 flex flex-col gap-3 bg-white min-h-80 overflow-y-auto py-6 px-4">
            <span>s</span>
            <span>s</span>
          </div>
          <div className="flex flex-wrap gap-3 bg-[#FFF3E6] p-4"></div>
        </div>
      )}
      <div
        onClick={() => setOpenChatbot(!openChatbot)}
        className="bg-[#FCA13B] text-white p-4 rounded-full cursor-pointer"
      >
        {openChatbot ? <HiMiniXMark size={36} /> : <BsChatDotsFill size={36} />}
      </div>
    </div>
  );
}
