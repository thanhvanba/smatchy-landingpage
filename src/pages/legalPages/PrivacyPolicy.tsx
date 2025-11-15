import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
export default function PrivacyPolicy() {
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
              <span className="text-[#FCA13B]">PRIVACY </span>
              POLICY
              <img className="absolute -top-16 -right-20 " src={Yay3} alt="" />
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-[#0F262E]">
              LBDC Organisation (Smatchy) collects and processes personal data
              in accordance with GDPR.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Data Collected</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Account information, contact details, purchases, payments,
              interactions, device data.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Purpose</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Account management, payments, communications, personalization,
              analytics and security.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Legal Basis</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Consent, contract, legal compliance, legitimate interest.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Recipients</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Some data may be processed outside the EU (e.g., SurveyMonkey in
              the United States) with standard protection clauses.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              International Transfers
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Users must maintain accurate data and account confidentiality, and
              report any misuse to support@smatchy.app. Illegal use, identity
              theft, multiple accounts or harmful behavior are prohibited.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Retention</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Data is retained from 6 months to 10 years depending on purpose
              (e.g., invoices: 10 years).
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">User Rights</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Access, rectification, deletion, opposition, limitation,
              portability, post-mortem directives.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A4A6026]">
            <div className="leading-relaxed text-[#0F262E] space-y-3">
              <div>
                <h3 className="font-bold">Contact</h3>
                <p>
                  <a
                    className="text-[#0A4A60] font-semibold underline"
                    href="#"
                  >
                    donneespersonnelles@smatchy.app
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold">Supervisory Authority:</h3>
                <p>CNIL, 3 Place de Fontenoy, 75334 Paris Cedex 07</p>
              </div>
            </div>
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
