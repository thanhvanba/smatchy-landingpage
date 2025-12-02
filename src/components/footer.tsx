import { useNavigate } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";
import { usePost } from "../hooks/usePost";
import Loading from "./Loading";
import backgroundFooter from "/background-footer.png";
import Facebook from "/Facebook.png";
import instagram from "/Instagram.png";
import LinkedIn from "/LinkedIn.png";
import logo from "/logo2.png";
import Tiktok from "/Tiktok.png";
import Youtube from "/Youtube.png";
import { useReorder } from "../hooks/useReorder";

export default function Footer() {
  const { data, isLoading, error } = useGlobal();
  const { data: postsResponse } = usePost();
  const posts = postsResponse?.data || [];
  //console.log(posts);
  const sortedLegal = useReorder(
    posts,
    ["legal-notices", "terms-of-use", "privacy-policy", "cookies"],
    "slug"
  );

  const navigate = useNavigate();
  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //console.log(sortedLegal);

  // Icon mapping by platform
  const platformIcons: Record<string, string> = {
    instagram: instagram,
    tiktok: Tiktok,
    linkedin: LinkedIn,
    facebook: Facebook,
    youtube: Youtube,
  };

  const socialData = data?.social || [];

  // const legalLinks = [
  //   { label: "Legal Notices", path: "/legal-notice" },
  //   { label: "Terms of Use", path: "/terms-use" },
  //   { label: "Privacy Policy", path: "/privacy-policy" },
  //   { label: "Cookies", path: "/cookie-policy" },
  // ];

  return (
    // <div className="relative w-full">
    //   <div
    //     className="z-30"
    //     style={{
    //       width: "120vw",
    //       height: "497.33px",
    //       position: "absolute",
    //       top: "-132px",
    //       left: "0px",
    //       transform: "rotate(-7.67deg)",
    //       opacity: 1,
    //       backgroundColor: "#E2F6F6",
    //     }}
    //   ></div>

    //   <div
    //     className="relative w-full h-auto lg:h-[270px] mt-4 z-30"
    //     style={{
    //       backgroundImage: `url(${backgroundFooter})`,
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //       backgroundPosition: "top",
    //     }}
    //   >
    //     <div className="container pt-6! md:pt-10!">
    //       <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-48 items-start md:items-center">
    //         <img
    //           className="h-10 w-10 md:h-32 md:w-32 mb-6 md:mb-0"
    //           src={logo}
    //           alt=""
    //         />
    //         <div className="flex-1 text-white font-bold">
    //           <div className="flex flex-col gap-8 md:flex-row justify-center items-center text-center">
    //             <div className="flex flex-col items-center">
    //               <h3 className="text-base md:text-2xl">Our social networks</h3>
    //               <ul className="flex gap-2 md:gap-5 mt-1 md:mt-6 justify-center">
    //                 <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
    //                   <img src={instagram} alt="" />
    //                 </li>
    //                 <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
    //                   <img src={Tiktok} alt="" />
    //                 </li>
    //                 <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
    //                   <img src={LinkedIn} alt="" />
    //                 </li>
    //                 <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
    //                   <img src={Facebook} alt="" />
    //                 </li>
    //                 <li className="h-6 w-6 md:h-14 md:w-14 cursor-pointer">
    //                   <img src={Youtube} alt="" />
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-[60px] mb-2 mt-4 md:mt-8 text-xs md:text-base cursor-pointer">
    //             <p onClick={() => navigate("/legal-otice")}>Legal Notices</p>
    //             <p onClick={() => navigate("/terms-use")}>Terms of Use</p>
    //             <p onClick={() => navigate("/privacy-policy")}>
    //               Privacy Policy
    //             </p>
    //             <p onClick={() => navigate("/cookie-policy")}>Cookies</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer className="relative bg-[#E2F6F6">
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
      {/* Background rotated layer */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundColor: "#E2F6F6",
          transform: "rotate(-7.67deg) scale(1.1)",
          top: "-20%",
          height: "140%",
        }}
      />
      {/* Main footer content */}
      <div
        // className="relative z-10 bg-cover bg-no-repeat bg-top"
        // style={{ backgroundImage: `url(${backgroundFooter})` }}
        className="relative w-full h-auto lg:h-[270px] mt-4 z-30"
        style={{
          backgroundImage: `url(${backgroundFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 py-8 md:py-12">
            {/* Logo column */}
            <div className="w-full md:w-1/5 flex justify-center md:justify-start shrink-0">
              <img
                src={logo}
                alt="Company Logo"
                className="h-10 w-10 md:h-24 md:w-24 object-contain"
                loading="lazy"
              />
            </div>

            {/* Right content */}
            <div className="w-full md:w-4/5 text-white font-bold">
              {/* Social networks row */}
              <div className="flex flex-col items-center md:items-start mb-6 md:mb-8">
                <h3 className="text-base md:text-2xl mb-3 md:mb-4">
                  Our social networks
                </h3>

                {/* Loading state */}
                {isLoading ? (
                  <div className="text-white/70 text-sm">
                    Loading social links...
                  </div>
                ) : (
                  <nav aria-label="Social networks">
                    <ul className="flex gap-3 md:gap-5 justify-center">
                      {socialData.map((social: any) => {
                        const platformLower = social.platform?.toLowerCase();
                        const icon = platformIcons[platformLower];
                        return (
                          <li key={social.id}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-2 rounded-lg hover:bg-white/10 transition-colors"
                              aria-label={social.platform}
                            >
                              {icon && (
                                <img
                                  src={icon}
                                  alt={social.platform}
                                  className="h-6 w-6 md:h-10 md:w-10 object-contain"
                                  loading="lazy"
                                />
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                )}
              </div>

              {/* Legal links row */}
              <nav
                aria-label="Legal pages"
                className="border-t border-white/20 pt-4 md:pt-6"
              >
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-xs md:text-sm">
                  {sortedLegal.map((link) => (
                    <li
                      key={link.documentId}
                      className="text-center md:text-left"
                    >
                      <button
                        onClick={() => navigate(link.slug)}
                        className="text-white/90 hover:text-white transition-colors py-2 px-1 hover:underline underline-offset-4 w-full md:w-auto cursor-pointer"
                      >
                        {link.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
