import backgroundFooter from "/background-footer.png";
import logo from "/logo2.png";
import instagram from "/Instagram.png";
import Tiktok from "/Tiktok.png";
import Facebook from "/Facebook.png";
import Youtube from "/Youtube.png";
import LinkedIn from "/LinkedIn.png";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useGlobal } from "../hooks/useGlobal";

export default function Footer() {
  const { data, isLoading, error } = useGlobal();
  const navigate = useNavigate();
  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="relative w-full">
      <div
        className="z-30"
        style={{
          width: "120vw",
          height: "497.33px",
          position: "absolute",
          top: "-132px",
          left: "0px",
          transform: "rotate(-7.67deg)",
          opacity: 1,
          backgroundColor: "#E2F6F6",
        }}
      ></div>

      <div
        className="relative w-full h-auto lg:h-[270px] mt-4 z-30"
        style={{
          backgroundImage: `url(${backgroundFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container px-4! pt-6! md:pt-10!">
          <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-48 items-start md:items-center">
            <img
              className="h-10 w-10 md:h-32 md:w-32 mb-6 md:mb-0"
              src={logo}
              alt=""
            />
            <div className="flex-1 text-white font-bold">
              <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center items-start md:text-left">
                <div>
                  <h3 className="text-base md:text-2xl">Contact</h3>
                  <div className="text-xs md:text-base space-y-1 mt-1 md:mt-6">
                    <p>Phone: {data?.phone} </p>
                    <p>E-mail: {data?.email} </p>
                    <p>Address: {data?.address} </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-base md:text-2xl">Our social networks</h3>
                  <ul className="flex gap-2 md:gap-5 mt-1 md:mt-6">
                    <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
                      <img src={instagram} alt="" />
                    </li>
                    <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
                      <img src={Tiktok} alt="" />
                    </li>
                    <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
                      <img src={LinkedIn} alt="" />
                    </li>
                    <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
                      <img src={Facebook} alt="" />
                    </li>
                    <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
                      <img src={Youtube} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-[60px] mb-2 mt-4 md:mt-8 text-xs md:text-base cursor-pointer">
                <p onClick={() => navigate("/legal-otice")}>Legal Notices</p>
                <p onClick={() => navigate("/terms-use")}>Terms of Use</p>
                <p onClick={() => navigate("/privacy-policy")}>
                  Privacy Policy
                </p>
                <p onClick={() => navigate("/cookie-policy")}>Cookies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
