// import { useState } from "react";
// import Yay3 from "/Yay3.png";
// import line from "/line_bg.svg";
// import heroBanner from "/hero-banner.png";
// import { FaMinus, FaPlus } from "react-icons/fa6";

// interface FAQItem {
//   title: string;
//   content: string;
// }

// const faqs: FAQItem[] = [
//   {
//     title: "How to add a payment method?",
//     content:
//       "To create paid events and receive payouts, Pro Organizers must connect a Stripe Express account. The connection process is guided by Stripe and requires basic identity and bank information.",
//   },
//   {
//     title: "How to connect Stripe?",
//     content:
//       "Go to your dashboard, select Payments, then follow the Stripe onboarding steps to connect your account securely.",
//   },
//   {
//     title: "Refund as a Participant",
//     content:
//       "Participants can request a refund from the event page if the organizer allows refunds.",
//   },
//   {
//     title: "Help for Event Creator",
//     content:
//       "Once connected, payouts will be processed securely through Stripe. Matchy does not store your banking details.",
//   },
// ];

// const FAQ: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggle = (index: number): void => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <>
//       <div
//         className="relative w-full h-16 md:h-20 lg:h-24 z-50"
//         style={{
//           backgroundImage: `url(${heroBanner})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "top",
//         }}
//       ></div>
//       <div className="relative pt-32 pb-10 mx-5">
//         <div className="relative container">
//           {/* Line background */}
//           <img
//             src={line}
//             alt=""
//             className="hidden md:block absolute w-auto -top-40 md:-top-48 lg:-top-52 left-10 md:left-16 lg:left-20 scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
//           />
//         </div>
//         <div className="relative container z-40 bg-[#E2F6F6] rounded-2xl p-4! lg:p-9! shadow-md">
//           {/* Header */}
//           <div
//             className="inline-flex"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//           >
//             <h2 className="relative text-center text-xl md:text-2xl lg:text-5xl text-[#0A4A60] font-bold pt-2 md:pt-3 lg:pt-4">
//               <span className="text-[#FCA13B]">FREQUENTLY </span>
//               ASKED QUESTIONS
//               <img
//                 className="absolute -top-6 md:-top-8 lg:-top-16 -right-8 md:-right-12 lg:-right-20 w-12 md:w-16 lg:w-auto"
//                 src={Yay3}
//                 alt=""
//               />
//             </h2>
//           </div>

//           {/* List */}
//           <div className="space-y-6 mt-6">
//             {faqs.map((item, index) => {
//               const isOpen: boolean = openIndex === index;

//               return (
//                 <div
//                   key={index}
//                   className={`flex flex-col gap-4 rounded-xl transition-all py-2 px-4 ${
//                     isOpen ? "bg-[#1A7D9C26]" : ""
//                   }`}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => toggle(index)}
//                     className={`${
//                       isOpen
//                         ? "text-[#0A4A60] font-bold"
//                         : "text-[#0F262E] font-medium"
//                     } w-full flex items-center justify-between text-left text-xl`}
//                   >
//                     <span className="pr-2">{item.title}</span>
//                     <span className="flex items-center justify-center min-w-6 min-h-6 rounded-full bg-[#0A4A60] text-white text-sm">
//                       {isOpen ? <FaMinus /> : <FaPlus />}
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <>
//                       <div className="border border-white"></div>
//                       <p className="text-[#0F262E] leading-relaxed">
//                         {item.content}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FAQ;

import { useState, useMemo } from "react";
import Yay3 from "/Yay3.png";
import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useFAQ } from "../../hooks/useFAQ";

interface FAQItem {
  question: string;
  answer: string;
  category: { id: number; name: string };
}

// Cập nhật danh sách FAQ có category
// const faqs: FAQItem[] = [
//   {
//     title: "How to add a payment method?",
//     content:
//       "To create paid events and receive payouts, Pro Organizers must connect a Stripe Express account. The connection process is guided by Stripe and requires basic identity and bank information.",
//     category: "Payment & Payout",
//   },
//   {
//     title: "How to connect Stripe?",
//     content:
//       "Go to your dashboard, select Payments, then follow the Stripe onboarding steps to connect your account securely.",
//     category: "Payment & Payout",
//   },
//   {
//     title: "Refund as a Participant",
//     content:
//       "Participants can request a refund from the event page if the organizer allows refunds.",
//     category: "Refund",
//   },
//   {
//     title: "Help for Event Creator",
//     content:
//       "Once connected, payouts will be processed securely through Stripe. Matchy does not store your banking details.",
//     category: "Payment & Payout",
//   },
// ];

// Lấy danh sách category duy nhất
// const categories = Array.from(new Set(faqs.map((item) => item.category)));
// categories.unshift("All"); // Thêm "All" lên đầu

const FAQ: React.FC = () => {
  const { data: faqData } = useFAQ();
  const faqs = Array.isArray(faqData) ? faqData : [];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item: FAQItem) => {
      // Tìm theo question
      const matchesSearch = item.question
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Lấy tên category thực tế
      const categoryName = item.category?.name || "Uncategorized";

      // So sánh với selectedCategory
      const matchesCategory =
        selectedCategory === "All" || categoryName === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        faqs.map((item: FAQItem) => item.category?.name || "Uncategorized")
      )
    );
    return ["All", ...Array.from(unique)] as string[];
  }, [faqs]);

  //console.log(categories);

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

          {/* Search & Filter */}
          <div className="mt-6">
            {/* Search - full width, centered, with search icon */}
            <div className="relative w-full mx-auto">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0A4A60]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full px-4 py-2 pl-10 pr-10 border border-[#0A4A60] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCA13B]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter - horizontal scroll, hide scrollbar */}
            <div className="mt-4 flex justify-center">
              <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {categories.map((category, index) => (
                  <button
                    key={`category-${index}`}
                    onClick={() => setSelectedCategory(category as string)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap shrink-0 ${
                      selectedCategory === category
                        ? "bg-[#FCA13B] text-white"
                        : "bg-white text-[#0A4A60] border border-[#0A4A60]"
                    }`}
                  >
                    {category as string}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-6 mt-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item: FAQItem, index: number) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`group flex flex-col gap-4 rounded-xl transition-all py-2 px-4 ${
                      isOpen ? "bg-white" : "hover:bg-[#FFF]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className={`w-full flex items-center justify-between text-left text-xl font-medium transition-colors duration-200 ${
                        isOpen
                          ? "text-[#0A4A60] font-bold"
                          : "text-[#0F262E] group-hover:text-[#FCA13B]"
                      }`}
                    >
                      <span className="pr-2">{item.question}</span>
                      <span
                        className={`flex items-center justify-center min-w-6 min-h-6 rounded-full transition-colors duration-200 ${
                          isOpen
                            ? "bg-[#0A4A60] text-white"
                            : "bg-[#0A4A60] text-white group-hover:bg-[#FCA13B] group-hover:text-white"
                        }`}
                      >
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>

                    {isOpen && (
                      <>
                        <div className="border border-gray-200"></div>
                        <p className="text-[#0F262E] leading-relaxed">
                          {item.answer}
                        </p>
                      </>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-center text-[#0F262E] py-8">
                No questions found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
