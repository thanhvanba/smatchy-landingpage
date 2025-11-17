import { useEffect, useState } from "react";
import logo from "/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

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
        <div className="shrink-0">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1">
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
        <div className="lg:hidden flex items-center gap-2">
          <button
            className="bg-[#FCA13B] text-white rounded-3xl py-1 px-4 text-sm"
            onClick={() => alert("Get the app clicked")}
          >
            Get the app
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A4A60]/90 text-white w-full mt-2 rounded-b-lg shadow-lg transition-all">
          <ul className="flex flex-col p-2 gap-2">
            {menu.map((item) => {
              const isActive =
                location.pathname === item.link ||
                (item.link !== "/" && location.pathname.startsWith(item.link));
              return (
                <li
                  key={item.title}
                  className={`px-4 py-2 rounded-full cursor-pointer transition text-base
                    ${
                      isActive
                        ? "bg-[#D9D9D9A8] text-white"
                        : "hover:bg-[#D9D9D9A8]"
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
