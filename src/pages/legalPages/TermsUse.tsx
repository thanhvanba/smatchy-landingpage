import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
export default function TermsUse() {
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
              <span className="text-[#FCA13B]">TERMS OF </span>
              USE
              <img className="absolute -top-16 -right-20 " src={Yay3} alt="" />
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">1. Purpose</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              LBDC Organisation ("Smatchy" or "the Publisher") operates the
              mobile application and website{" "}
              <span className="text-[#0A4A60] font-bold underline">
                lesbornees.com.
              </span>{" "}
              These Terms of Use define the rules of access, use and obligations
              of users of the{" "}
              <span className="text-[#FCA13B] font-bold">Smatchy</span> mobile
              application.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              2. Access Conditions
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Users can browse or register with an email and password. They must
              be 18 years or older; minors require guardian supervision.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              3. Application Content
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              The application offers subscriptions to training sessions, events
              and partner experiences. Purchases follow the General Terms and
              Conditions of Sale.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              4. Application Management
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> may
              suspend access, remove illegal content or update the application
              at any time.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              5. User Obligations
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Users must maintain accurate data and account confidentiality, and
              report any misuse to{" "}
              <span className="text-[#0A4A60] font-bold underline">
                support@smatchy.app
              </span>{" "}
              Illegal use, identity theft, multiple accounts or harmful behavior
              are prohibited.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">6. Liability</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> is not
              responsible for service interruptions, misuse or inaccurate
              third-party content. Claims expire after 6 months.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">7. Hyperlinks</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> ensures
              there are no illegal links but disclaims any responsibility beyond
              that
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              8. Personal Data and Cookies
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span>is
              responsible for data processing. Users can consult the Privacy and
              Cookie Policies. Contact:{" "}
              <span className="text-[#0A4A60] font-bold underline">
                donneespersonnelles@smatchy.app
              </span>{" "}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              9. Intellectual Property
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              All content belongs to Smatchy or its partners. Users only obtain
              non-transferable personal use rights.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              10. General Provisions
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> may
              modify the Terms of Use at any time. Invalid clauses do not affect
              the others
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              11. Law and Jurisdiction
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              The Terms of Use are governed by French law. Disputes fall under
              the jurisdiction of Annecy courts.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A4A6026]">
            <div className="leading-relaxed text-[#0F262E]">
              <p className="">
                <span className="font-bold">Version: </span>
                 March 12, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
