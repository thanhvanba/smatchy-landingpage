import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
import { usePostBySlug } from "../../hooks/usePost";
import Loading from "../../components/Loading";
export default function TermsUse() {
  const { data, isLoading, isError, error } = usePostBySlug("terms-of-use");
  const post = data?.data?.[0];

  if (isLoading) return <Loading />;

  if (isError) {
    return <div className="container">Error: {error?.message}</div>;
  }
  console.log(post);
  return (
    <div>
      <div
        className="relative w-full h-16 md:h-20 lg:h-24 pt-10 md:pt-16 lg:pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="container">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-32 md:-top-40 lg:-top-52 left-4 md:left-10 lg:left-20 scale-[3] md:scale-[5] lg:scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
          />
        </div>
        <div className="relative flex flex-col gap-4 md:gap-5 lg:gap-6 bg-[#E2F6F6] shadow rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mt-10 md:mt-14 lg:mt-20 mb-52 z-30">
          <div
            className="inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative text-center text-xl md:text-2xl lg:text-5xl text-[#0A4A60] font-bold pt-2 md:pt-3 lg:pt-4">
              <span className="text-[#FCA13B]">TERMS OF </span>
              USE
              <img
                className="absolute -top-8 -right-8 md:-top-12 md:-right-16 lg:-top-16 lg:-right-20 w-6 md:w-10 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              1. Purpose
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
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

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              2. Access Conditions
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              Users can browse or register with an email and password. They must
              be 18 years or older; minors require guardian supervision.
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              3. Application Content
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              The application offers subscriptions to training sessions, events
              and partner experiences. Purchases follow the General Terms and
              Conditions of Sale.
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              4. Application Management
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> may
              suspend access, remove illegal content or update the application
              at any time.
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              5. User Obligations
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              Users must maintain accurate data and account confidentiality, and
              report any misuse to{" "}
              <span className="text-[#0A4A60] font-bold underline">
                support@smatchy.app
              </span>{" "}
              Illegal use, identity theft, multiple accounts or harmful behavior
              are prohibited.
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              6. Liability
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> is not
              responsible for service interruptions, misuse or inaccurate
              third-party content. Claims expire after 6 months.
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              7. Hyperlinks
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> ensures
              there are no illegal links but disclaims any responsibility beyond
              that
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              8. Personal Data and Cookies
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span>is
              responsible for data processing. Users can consult the Privacy and
              Cookie Policies. Contact:{" "}
              <span className="text-[#0A4A60] font-bold underline">
                donneespersonnelles@smatchy.app
              </span>{" "}
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              9. Intellectual Property
            </h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
              All content belongs to Smatchy or its partners. Users only obtain
              non-transferable personal use rights.
            </p>
          </div>

          <div
            className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
              10. General Provisions
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              <span className="text-[#FCA13B] font-bold">Smatchy</span> may
              modify the Terms of Use at any time. Invalid clauses do not affect
              the others
            </p>
          </div>

          <div
            className="flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="font-bold text-xl text-[#0A4A60]">
              11. Law and Jurisdiction
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              The Terms of Use are governed by French law. Disputes fall under
              the jurisdiction of Annecy courts.
            </p>
          </div>

          <div
            className="p-6 rounded-xl bg-[#0A4A6026]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
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
