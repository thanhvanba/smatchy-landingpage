import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";

export default function LegalNotice() {
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
              <span className="text-[#FCA13B]">LEGAL </span>
              NOTICE
              <img className="absolute -top-16 -right-20 " src={Yay3} alt="" />
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <div className="inline-flex">
              <p className="">
                <span className="font-bold text-[#0F262E]">Reference: </span>
                Website – SMATCHY
              </p>
            </div>
            <div className="inline-flex">
              <p className="">
                <span className="font-bold text-[#0F262E]">Last update: </span>
                August 1, 2025
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Publisher</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              This website, accessible from{" "}
              <span className="text-[#0A4A60] font-semibold underline">
                smatchyelementor.cloud
              </span>
              , and the Smatchy mobile application, available on the Apple Store
              and Google Store, are published by LBDC ORGANISATION, a simplified
              joint-stock company with capital of 216,585€, registered with the
              Nanterre Trade and Companies Register under number 839 133 814.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A4A6026]">
            <div className="leading-relaxed text-[#0F262E]">
              <p className="font-bold">LES BORNEES DIGITAL COMPANY</p>
              <p>5 rue de l’Industrie</p>
              <p>74000 Annecy</p>
              <p>
                Email:{" "}
                <span className="text-[#0A4A60] font-semibold underline">
                  support@smatchy.app
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              Publication Director
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              Maude BAUDIER, acting as legal representative.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">Web Host</h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              3 & 1 IONOS SARL, specialized in professional web hosting,
              registered with the Sarreguemines Trade and Companies Register
              under number 8 431 303 775, VAT number FR 134 310 775.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A4A6026]">
            <div className="leading-relaxed text-[#0F262E]">
              <p>Address: 7 Place de la Gare, 57200 SARREGUEMINES</p>
              <p>Phone: 0970 808 911</p>
              <p>
                Email:{" "}
                <span className="text-[#0A4A60] font-semibold underline">
                  info@ionos.fr
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              Application Database Host
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              MongoDB Limited, registered in the United States, with servers in
              Europe (Frankfurt).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A4A6026]">
            <div className="leading-relaxed text-[#0F262E]">
              <p>
                Building Two, Number One Ballsbridge, Ballsbridge, Dublin 4,
                Ireland
              </p>
              <p>
                <a className="text-[#0A4A60] font-semibold underline" href="#">
                  www.mongodb.com/fr-fr/company/contact
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-[#0A4A60]">
              Application Image Host
            </h3>
            <p className="text-sm leading-relaxed text-[#0F262E]">
              AWS, registered in the United States, with servers in Central
              Europe.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A4A6026]">
            <div className="leading-relaxed text-[#0F262E]">
              <p>410 Terry Avenue North, Seattle, Washington, 98109</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
