import LogoFondjaune from "/contact/Logo_fondjaune.svg";
import Logo3Blanc from "/contact/Logo3_blanc.png";
import { HiMiniXMark } from "react-icons/hi2";
import { BsChatDotsFill } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
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

// export default function ChatBot() {
//   const [openChatbot, setOpenChatbot] = useState(false);
//   const { botText, actions, setStep } = useChatFlow();
//   const [history, setHistory] = useState<Message[]>(() => {
//     return [{ id: ++msgId, sender: "bot", text: botText }];
//   });

//   // khi step thay đổi => thêm tin nhắn bot mới
//   useEffect(() => {
//     setHistory((prev) => [
//       ...prev,
//       { id: ++msgId, sender: "bot", text: botText },
//     ]);
//   }, [botText]);

//   const addUserMsg = (text: string) =>
//     setHistory((prev) => [...prev, { id: ++msgId, sender: "user", text }]);

//   const handleReset = () => {
//     msgId = 0;
//     setHistory([]);
//     setStep("INIT");
//   };

//   const handleBtn = (label: string, next: ChatStep | "EXTERNAL") => {
//     addUserMsg(label); // hiển thị lựa chọn user
//     if (next === "EXTERNAL") return handleExternal(label);
//     setStep(next);
//   };

//   // RESET khi đóng
//   useEffect(() => {
//     if (!openChatbot) {
//       setHistory([{ id: ++msgId, sender: "bot", text: botText }]);
//       setStep("INIT");
//     }
//   }, [openChatbot, botText, setStep]);

//   return (
//     <div className="relative z-50 flex flex-col items-end w-[400px] gap-4">
//       {/* ---------- MODAL ---------- */}
//       {openChatbot && (
//         <div
//           className="absolute bottom-24 flex flex-col w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]"
//           data-aos="zoom-in"
//           data-aos-duration="1000"
//         >
//           {/* Header */}
//           <div className="flex justify-between items-center gap-2 bg-[#FCA13B] px-4 py-3">
//             <div className="flex gap-2 items-center">
//               <img src={LogoFondjaune} alt="" className="h-16" />
//               <img
//                 className="h-4 w-32 object-contain"
//                 src={Logo3Blanc}
//                 alt=""
//               />
//             </div>
//             <div className="flex gap-2">
//               <TbReload
//                 onClick={handleReset}
//                 className="text-white h-6 w-6 cursor-pointer hover:rotate-180 transition-transform"
//               />
//               <HiMiniXMark
//                 onClick={() => setOpenChatbot(false)}
//                 className="text-white h-6 w-6 cursor-pointer"
//               />
//             </div>
//           </div>

//           {/* Body – chỉ 1 dòng bot hiện tại (không lưu history) */}
//           <div className="flex-1 flex flex-col gap-2 min-h-60 overflow-y-auto px-4 py-4">
//             {history.map((m) => (
//               <div
//                 key={m.id}
//                 className={`inline-block px-3 py-2 rounded-3xl text-white ${
//                   m.sender === "bot"
//                     ? "bg-[#0A4A60] self-start"
//                     : "bg-[#FCA13B] self-end"
//                 }`}
//               >
//                 {m.text}
//               </div>
//             ))}
//           </div>

//           {/* Footer – buttons hoặc form */}
//           <div className="drop-shadow-2xl shadow-2xl">
//             <div className="flex flex-wrap justify-end gap-3 bg-[#FFF3E6] p-4 max-h-[40vh] overflow-y-auto">
//               {actions.map((a, idx) =>
//                 a.type === "button" ? (
//                   <button
//                     key={idx}
//                     onClick={() => handleBtn(a.label, a.next)}
//                     className="inline-block px-3 py-2 rounded-3xl text-sm font-medium text-white bg-[#FCA13B]"
//                   >
//                     {a.label}
//                   </button>
//                 ) : (
//                   <ContactFormChatBot key={idx} />
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ---------- FLOAT BUTTON ---------- */}
//       <div
//         onClick={() => setOpenChatbot((v) => !v)}
//         className="bg-[#FCA13B] hover:bg-[#FCA13B]/90 text-white p-4 rounded-full cursor-pointer shadow-lg"
//       >
//         {openChatbot ? <HiMiniXMark size={36} /> : <BsChatDotsFill size={36} />}
//       </div>
//     </div>
//   );
// }

export default function ChatBot() {
  const [openChatbot, setOpenChatbot] = useState(false);
  const { botText, actions, setStep } = useChatFlow();
  const [history, setHistory] = useState<Message[]>(() => {
    return [{ id: ++msgId, sender: "bot", text: botText }];
  });

  useEffect(() => {
    setHistory((prev) => [
      ...prev,
      { id: ++msgId, sender: "bot", text: botText },
    ]);
  }, [botText]);

  const addUserMsg = (text: string) =>
    setHistory((prev) => [...prev, { id: ++msgId, sender: "user", text }]);

  const handleReset = () => {
    msgId = 0;
    setHistory([]);
    setStep("INIT");
  };

  const handleBtn = (label: string, next: ChatStep | "EXTERNAL") => {
    addUserMsg(label);
    if (next === "EXTERNAL") {
      handleGetAppClick();
      return;
    }
    setStep(next);
  };

  useEffect(() => {
    if (!openChatbot) {
      setHistory([{ id: ++msgId, sender: "bot", text: botText }]);
      setStep("INIT");
    }
  }, [openChatbot, botText, setStep]);

  const handleGetAppClick = () => {
    const userAgent =
      (typeof navigator !== "undefined" &&
        (navigator.userAgent || navigator.vendor)) ||
      "";
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      window.open(
        "https://apps.apple.com/us/app/smatchy/id6473653332",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    if (isAndroid) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.smatchy.app&pcampaignid=web_share",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    window.open("https://smatchy.app", "_blank", "noopener,noreferrer");
  };

  return (
    // <div
    //   className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end"
    //   style={{ maxWidth: "400px", width: "100%" }}
    // >
    //   {/* ---------- MODAL CHAT ---------- */}
    //   {openChatbot && (
    //     <div
    //       className="flex flex-col w-full bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[80vh]"
    //       data-aos="zoom-in"
    //       data-aos-duration="1000"
    //     >
    //       {/* Header */}
    //       <div className="flex justify-between items-center gap-2 bg-[#FCA13B] px-4 py-3">
    //         <div className="flex gap-2 items-center">
    //           <img src={LogoFondjaune} alt="Fond jaune" className="h-16" />
    //           <img
    //             className="h-4 w-32 object-contain"
    //             src={Logo3Blanc}
    //             alt="Logo blanc"
    //           />
    //         </div>
    //         <div className="flex gap-2">
    //           <TbReload
    //             onClick={handleReset}
    //             className="text-white h-6 w-6 cursor-pointer hover:rotate-180 transition-transform"
    //           />
    //           <HiMiniXMark
    //             onClick={() => setOpenChatbot(false)}
    //             className="text-white h-6 w-6 cursor-pointer"
    //           />
    //         </div>
    //       </div>

    //       {/* Body */}
    //       <div className="flex-1 flex flex-col gap-2 min-h-[120px] max-h-48 overflow-y-auto px-4 py-4">
    //         {history.map((m) => (
    //           <div
    //             key={m.id}
    //             className={`inline-block px-3 py-2 rounded-3xl text-white max-w-[80%] break-words ${
    //               m.sender === "bot"
    //                 ? "bg-[#0A4A60] self-start"
    //                 : "bg-[#FCA13B] self-end"
    //             }`}
    //           >
    //             {m.text}
    //           </div>
    //         ))}
    //       </div>

    //       {/* Footer */}
    //       <div className="drop-shadow-2xl shadow-2xl">
    //         <div className="flex flex-wrap justify-end gap-3 bg-[#FFF3E6] p-4 max-h-[40vh] overflow-y-auto">
    //           {actions.map((a, idx) =>
    //             a.type === "button" ? (
    //               <button
    //                 key={idx}
    //                 onClick={() => handleBtn(a.label, a.next)}
    //                 className="inline-block px-3 py-2 rounded-3xl text-sm font-medium text-white bg-[#FCA13B] whitespace-nowrap"
    //               >
    //                 {a.label}
    //               </button>
    //             ) : (
    //               <ContactFormChatBot key={idx} />
    //             )
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   {/* ---------- FLOAT BUTTON ---------- */}
    //   <button
    //     onClick={() => setOpenChatbot((v) => !v)}
    //     className="mt-3 bg-[#FCA13B] hover:bg-[#FCA13B]/90 text-white p-4 rounded-full cursor-pointer shadow-lg focus:outline-none"
    //     aria-label={openChatbot ? "Close chat" : "Open chat"}
    //   >
    //     {openChatbot ? <HiMiniXMark size={36} /> : <BsChatDotsFill size={36} />}
    //   </button>
    // </div>
    <div
      className="
    fixed 
    inset-x-4 bottom-4                /* mobile: cách 2 bên 16px, đáy 16px */
    sm:inset-x-auto sm:right-6 sm:bottom-6  /* từ sm trở lên: góc phải như cũ */
    z-[1000] 
    flex flex-col items-stretch sm:items-end
    w-auto
  "
    >
      {/* ---------- MODAL CHAT ---------- */}
      {openChatbot && (
        <div
          className="
        flex flex-col 
        w-full 
        max-w-full sm:max-w-[400px]   /* mobile full width, desktop 400px */
        bg-white rounded-2xl shadow-2xl 
        overflow-hidden 
        max-h-[70vh] sm:max-h-[80vh]  /* giới hạn theo viewport */
      "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Header */}
          <div className="flex justify-between items-center gap-2 bg-[#FCA13B] px-3 sm:px-4 py-2 sm:py-3">
            <div className="flex gap-2 items-center">
              <img
                src={LogoFondjaune}
                alt="Fond jaune"
                className="h-12 sm:h-16"
              />
              <img
                className="h-3 sm:h-4 w-24 sm:w-32 object-contain"
                src={Logo3Blanc}
                alt="Logo blanc"
              />
            </div>
            <div className="flex gap-2">
              <TbReload
                onClick={handleReset}
                className="text-white h-6 w-6 cursor-pointer hover:rotate-180 transition-transform"
              />
              <HiMiniXMark
                onClick={() => setOpenChatbot(false)}
                className="text-white h-6 w-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Body */}
          <div
            className="
          flex-1 flex flex-col gap-2 
          min-h-[120px] 
          max-h-40 sm:max-h-56 md:max-h-[50vh]  /* cao hơn trên màn to */
          overflow-y-auto px-3 sm:px-4 py-3 sm:py-4
        "
          >
            {history.map((m) => (
              <div
                key={m.id}
                className={`
              inline-block px-3 py-2 rounded-3xl text-white 
              max-w-[80%] break-words
              ${
                m.sender === "bot"
                  ? "bg-[#0A4A60] self-start"
                  : "bg-[#FCA13B] self-end"
              }
            `}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="drop-shadow-2xl shadow-2xl">
            <div
              className="
            flex flex-wrap justify-end gap-2 sm:gap-3 
            bg-[#FFF3E6] 
            p-3 sm:p-4 
            max-h-[40vh] overflow-y-auto
          "
            >
              {actions.map((a, idx) =>
                a.type === "button" ? (
                  <button
                    key={idx}
                    onClick={() => handleBtn(a.label, a.next)}
                    className="
                  inline-block px-3 py-2 rounded-3xl 
                  text-xs sm:text-sm font-medium 
                  text-white bg-[#FCA13B] whitespace-nowrap
                "
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
      <button
        onClick={() => setOpenChatbot((v) => !v)}
        className="
      mt-3 
      bg-[#FCA13B] hover:bg-[#FCA13B]/90 text-white 
      p-3 sm:p-4 
      rounded-full cursor-pointer shadow-lg 
      focus:outline-none self-end
    "
        aria-label={openChatbot ? "Close chat" : "Open chat"}
      >
        {openChatbot ? (
          <HiMiniXMark size={28} className="sm:size-9" />
        ) : (
          <BsChatDotsFill size={28} className="sm:size-9" />
        )}
      </button>
    </div>
  );
}
