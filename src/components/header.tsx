import { useEffect, useState } from "react";
import logo from "/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import LangSwitch from "./LangSwitch";

const menu = [
  { title: "Home", link: "/" },
  { title: "Team", link: "/team" },
  { title: "Investors", link: "/investors" },
  { title: "Events", link: "/events" },
  { title: "Contact", link: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (item: (typeof menu)[0]) => {
    navigate(item.link);
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav
      className={`fixed top-0 left-0 py-3 w-full z-100 transition-all duration-300 ${
        isScrolled ? "bg-[#0A4A60]/90 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center gap-4 sm:gap-6 md:gap-10">
        {/* Logo */}
        <div className="shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex flex-wrap justify-start items-center border rounded-full p-2 gap-2 sm:gap-3 md:gap-4 border-[#E2E8F0]">
            {menu.map((item) => {
              const isActive =
                location.pathname === item.link ||
                (item.link !== "/" && location.pathname.startsWith(item.link));
              return (
                <li
                  key={item.title}
                  className={`px-4 py-2 rounded-full cursor-pointer transition text-sm sm:text-base
                    ${
                      isActive
                        ? "bg-[#D9D9D9A8] text-white"
                        : "text-white hover:bg-[#D9D9D9A8]"
                    }`}
                  onClick={() => handleNavigate(item)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            className="bg-[#FCA13B] text-white rounded-3xl py-1 md:py-3 px-4 text-sm"
            onClick={() => alert("Get the app clicked")}
          >
            Get the app
          </button>
          <LangSwitch />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Buttons */}
        {/* <div className="hidden lg:flex items-center gap-2">
          <button
            className="bg-[#FCA13B] text-white rounded-3xl py-1 px-4 text-sm"
            onClick={() => alert("Get the app clicked")}
          >
            Get the app
          </button>
          <LangSwitch />
        </div> */}
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0A4A60]/95 text-white flex flex-col items-center justify-center z-50 transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl text-white"
          >
            <HiX />
          </button>
          <ul className="flex flex-col gap-6 text-xl">
            {menu.map((item) => {
              const isActive =
                location.pathname === item.link ||
                (item.link !== "/" && location.pathname.startsWith(item.link));
              return (
                <li
                  key={item.title}
                  className={`px-6 py-3 rounded-full cursor-pointer transition text-center
              ${
                isActive ? "bg-[#D9D9D9A8] text-white" : "hover:bg-[#D9D9D9A8]"
              }`}
                  onClick={() => handleNavigate(item)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
