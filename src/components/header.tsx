import { useEffect, useState } from "react";
import logo from "../../public/logo.png";

const menu = [
  { title: "Home", link: "#" },
  { title: "Team", link: "#" },
  { title: "Investors", link: "#" },
  { title: "Events", link: "#" },
  { title: "Contact", link: "#" },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container sticky top-0 flex justify-between items-center gap-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex-1">
          <ul className="inline-flex justify-start items-center border rounded-[50px] p-[7px] gap-1 border-[#E2E8F0]">
            {menu.map((item) => (
              <li
                className={`
              flex items-center justify-center w-[83px] h-[30px] rounded-[20px] cursor-pointer transition
              ${
                active === item.title
                  ? "bg-[#D9D9D9A8] text-white"
                  : "text-white hover:bg-[#D9D9D9A8]"
              }
            `}
                key={item.title}
                onClick={() => setActive(item.title)}
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-[#FCA13B] text-white rounded-3xl py-0.5 px-[22px]">
          Get the app
        </button>
      </div>
    </nav>
  );
}
