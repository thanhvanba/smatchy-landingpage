import backgroundFooter from "/background-footer.png";
import logo from "/logo2.png";
import instagram from "/Instagram.png";
import Tiktok from "/Tiktok.png";
import Facebook from "/Facebook.png";
import Youtube from "/Youtube.png";
import LinkedIn from "/LinkedIn.png";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";

export default function Footer() {
  const { data, isLoading, error } = useGlobal();
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        className="relative w-full h-[270px] mt-4 z-30"
        style={{
          backgroundImage: `url(${backgroundFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container pt-12!">
          <div className="flex space-x-48 items-center">
            <img src={logo} alt="" />
            <div className="flex-1 text-white font-bold">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl">Contact</h3>
                  <div className="text-[16px] space-y-1 mt-6">
                    <p>Phone: {data.phone} </p>
                    <p>E-mail: {data.email} </p>
                    <p>Address: {data.address} </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl">Our social networks</h3>
                  <ul className="flex gap-5 mt-6">
                    <li>
                      <img src={instagram} alt="" />
                    </li>
                    <li>
                      <img src={Tiktok} alt="" />
                    </li>
                    <li>
                      <img src={LinkedIn} alt="" />
                    </li>
                    <li>
                      <img src={Facebook} alt="" />
                    </li>
                    <li>
                      <img src={Youtube} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-[60px] mt-8 text-[16px] cursor-pointer">
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
