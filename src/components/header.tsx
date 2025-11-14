import { useEffect, useState } from "react";
import logo from "/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const menu = [
  { title: "Home", link: "/" },
  { title: "Team", link: "/team" },
  { title: "Investors", link: "/investors" },
  { title: "Events", link: "/events" },
  { title: "Contact", link: "/contact" },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  console.log("🚀 ~ Header ~ active:", active);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("🚀 ~ Header ~ location:", location);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 py-4 w-full z-100 transition-all duration-300 ${
        isScrolled ? "bg-[#0A4A60]/90 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container sticky top-0 flex justify-between items-center gap-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex-1">
          <ul className="inline-flex justify-start items-center border rounded-[50px] p-[7px] gap-1 border-[#E2E8F0]">
            {menu.map((item) => {
              const isActive =
                location.pathname === item.link ||
                (item.link !== "/" && location.pathname.startsWith(item.link));
              return (
                <li
                  className={`
              flex items-center justify-center w-[83px] h-[30px] rounded-[20px] cursor-pointer transition
              ${
                isActive
                  ? "bg-[#D9D9D9A8] text-white"
                  : "text-white hover:bg-[#D9D9D9A8]"
              }
            `}
                  key={item.title}
                  onClick={() => {
                    setActive(item.title);
                    navigate(item.link);
                  }}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="bg-[#FCA13B] text-white rounded-3xl py-0.5 px-[22px]">
          Get the app
        </button>
      </div>
    </nav>
  );
}
