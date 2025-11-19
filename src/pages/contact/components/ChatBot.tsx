// import LogoFondjaune from "/contact/Logo_fondjaune.png";
// import Logo3Blanc from "/contact/Logo3_blanc.png";
// import { HiMiniXMark } from "react-icons/hi2";
// import { BsChatDotsFill } from "react-icons/bs";
// import { useState } from "react";

// export default function ChatBot() {
//   const [openChatbot, setOpenChatbot] = useState(false);
//   return (
//     <div className="flex flex-col items-end w-96 gap-6">
//       {openChatbot && (
//         <div className="flex flex-col w-full shadow">
//           <h3 className="flex justify-between items-center gap-2 bg-[#FCA13B] p-3">
//             <div className="flex gap-2">
//               <img src={LogoFondjaune} alt="" />
//               <img className="object-contain" src={Logo3Blanc} alt="" />
//             </div>
//             <HiMiniXMark
//               onClick={() => setOpenChatbot(false)}
//               className="text-white h-6 w-6 cursor-pointer"
//             />
//           </h3>
//           <div className="flex-1 flex flex-col gap-3 bg-white min-h-80 overflow-y-auto py-6 px-4">
//             <span>s</span>
//             <span>s</span>
//           </div>
//           <div className="flex flex-wrap gap-3 bg-[#FFF3E6] p-4"></div>
//         </div>
//       )}
//       <div
//         onClick={() => setOpenChatbot(!openChatbot)}
//         className="bg-[#FCA13B] text-white p-4 rounded-full cursor-pointer"
//       >
//         {openChatbot ? <HiMiniXMark size={36} /> : <BsChatDotsFill size={36} />}
//       </div>
//     </div>
//   );
// }
// src/components/ChatBot/ChatBot.tsx
import LogoFondjaune from "/contact/Logo_fondjaune.svg";
import Logo3Blanc from "/contact/Logo3_blanc.png";
import { HiMiniXMark } from "react-icons/hi2";
import { BsChatDotsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
//import MiniForm from "./MiniForm";
//import ContactFormCard from "./ContactFormCard";
import { useChatFlow, type ChatStep } from "../../../hooks/useChatFlow";
import ContactFormChatBot from "./ContactFormChatBot";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
}

let msgId = 0; // đơn giản tạo id unique

export default function ChatBot() {
  const [openChatbot, setOpenChatbot] = useState(false);
  const { botText, actions, setStep } = useChatFlow();
  const [history, setHistory] = useState<Message[]>([
    { id: ++msgId, sender: "bot", text: botText },
  ]);

  // khi step thay đổi => thêm tin nhắn bot mới
  useEffect(() => {
    setHistory((prev) => [
      ...prev,
      { id: ++msgId, sender: "bot", text: botText },
    ]);
  }, [botText]);

  const addUserMsg = (text: string) =>
    setHistory((prev) => [...prev, { id: ++msgId, sender: "user", text }]);

  const handleBtn = (label: string, next: ChatStep | "EXTERNAL") => {
    addUserMsg(label); // hiển thị lựa chọn user
    if (next === "EXTERNAL") return handleExternal(label);
    setStep(next);
  };

  // RESET khi đóng
  useEffect(() => {
    if (!openChatbot) {
      setHistory([{ id: ++msgId, sender: "bot", text: botText }]);
      setStep("INIT");
    }
  }, [openChatbot, botText, setStep]);

  return (
    <div className="relative z-50 flex flex-col items-end w-[400px] gap-4">
      {/* ---------- MODAL ---------- */}
      {openChatbot && (
        <div
          className="absolute bottom-24 flex flex-col w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Header */}
          <div className="flex justify-between items-center gap-2 bg-[#FCA13B] px-4 py-3">
            <div className="flex gap-2 items-center">
              <img src={LogoFondjaune} alt="" className="h-16" />
              <img
                className="h-4 w-32 object-contain"
                src={Logo3Blanc}
                alt=""
              />
            </div>
            <HiMiniXMark
              onClick={() => setOpenChatbot(false)}
              className="text-white h-6 w-6 cursor-pointer"
            />
          </div>

          {/* Body – chỉ 1 dòng bot hiện tại (không lưu history) */}
          <div className="flex-1 flex flex-col gap-2 min-h-60 overflow-y-auto px-4 py-4">
            {history.map((m) => (
              <div
                key={m.id}
                className={`inline-block px-3 py-2 rounded-3xl text-white ${
                  m.sender === "bot"
                    ? "bg-[#0A4A60] self-start"
                    : "bg-[#FCA13B] self-end"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Footer – buttons hoặc form */}
          <div className="drop-shadow-2xl shadow-2xl">
            <div className="flex flex-wrap justify-end gap-3 bg-[#FFF3E6] p-4 max-h-[40vh] overflow-y-auto">
              {actions.map((a, idx) =>
                a.type === "button" ? (
                  <button
                    key={idx}
                    onClick={() => handleBtn(a.label, a.next)}
                    className="inline-block px-3 py-2 rounded-3xl text-sm font-medium text-white bg-[#FCA13B]"
                  >
                    {a.label}
                  </button>
                ) : (
                  <ContactFormChatBot key={idx} />
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------- FLOAT BUTTON ---------- */}
      <div
        onClick={() => setOpenChatbot((v) => !v)}
        className="bg-[#FCA13B] text-white p-4 rounded-full cursor-pointer shadow-lg"
      >
        {openChatbot ? <HiMiniXMark size={36} /> : <BsChatDotsFill size={36} />}
      </div>
    </div>
  );
}
/* helper mở app / mail */
function handleExternal(label: string) {
  if (label.includes("app")) {
    // deep-link store
    window.open(
      "https://play.google.com/store/apps/details?id=com.smatchy.app",
      "_blank"
    );
  } else {
    window.location.href = "mailto:support@smatchy.app";
  }
}
