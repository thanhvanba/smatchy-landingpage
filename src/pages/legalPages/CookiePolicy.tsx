import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
export default function CookiePolicy() {
  return (
    <div>
      <div
        className="relative w-full h-24 pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="container ">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-52 left-20 scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
          />
        </div>
        <div className="relative flex flex-col gap-6 bg-[#E2F6F6] shadow rounded-2xl p-8 mt-20 mb-52 z-30">
          <div className="inline-flex">
            <h2 className="relative text-center text-5xl text-[#0A4A60] font-bold pt-4">
              <span className="text-[#FCA13B]">COOKIE </span>
              POLICY
              <img className="absolute -top-16 -right-20 " src={Yay3} alt="" />
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <div className="inline-flex">
              <p className="">
                <span className="font-bold text-[#0F262E]">Publisher: </span>
                LBDC Organisation ("Smatchy")
              </p>
            </div>
            <div className="inline-flex">
              <p className="">
                Cookies are stored on users' devices to facilitate navigation
                and improve functionality.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              Types of Cookies
            </h3>
            <ul className="flex flex-col gap-2 list-disc marker:text-[#0A4A60]">
              <li className="ml-6">Session cookies (deleted after session)</li>
              <li className="ml-6">
                Persistent cookies (stored until expiration)
              </li>
              <li className="ml-6">First-party cookies (by Smatchy)</li>
              <li className="ml-6">
                Third-party cookies (analytics or advertising)
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Purpose</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Ensure navigation, security, performance, traffic analysis and
              advertising personalization.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              Third-Party Tools
            </h3>
            <ul className="flex flex-col gap-2 list-disc marker:text-[#0A4A60]">
              <li className="ml-6">Google Analytics</li>
              <li className="ml-6">Matomo</li>
              <li className="ml-6">Facebook Pixel</li>
              <li className="ml-6">SendinBlue</li>
              <li className="ml-6">Jetpack</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Retention</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Cookies are stored from 6 to 13 months depending on category.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Consent</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Only technical cookies are stored without consent. Users can
              accept or refuse others via the consent tool.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A4A6026]">
            <div className="leading-relaxed text-[#0F262E]">
              <p>
                <span className="font-bold">Last updated: </span>March 12, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
