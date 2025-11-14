import email from "/contact/email.png";
import location from "/contact/location.png";
import instagram from "/Instagram.png";
import Tiktok from "/Tiktok.png";
import Facebook from "/Facebook.png";
import Youtube from "/Youtube.png";
import LinkedIn from "/LinkedIn.png";

export default function ContactInfoCard() {
  return (
    <div>
      <div className="w-full bg-[#0A4A60] border border-[#0A4A605C] text-white p-9 rounded-3xl space-y-9">
        {/* Title */}
        <h2 className="text-3xl font-bold leading-snug">
          Hi! We are always here to help you.
        </h2>

        <div className="flex flex-col gap-6">
          <div className="bg-[#39758A] p-6 rounded-3xl flex items-start gap-5 shadow-md">
            <img className="h-16 w-16" src={email} alt="" />
            <div>
              <p className="text-2xl font-bold mb-2">Email</p>
              <p className="">support@smatchy.app</p>
            </div>
          </div>

          <div className="bg-[#39758A] p-6 rounded-3xl flex items-start gap-5 shadow-md">
            <img className="h-16 w-16" src={location} alt="" />
            <div>
              <p className="text-2xl font-bold mb-2">Address</p>
              <p className="leading-relaxed">
                LBDC Organisation
                <br />
                5 rue de l'Industrie
                <br />
                74000 Annecy
                <br />
                France
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[#FFFFFF40]" />

        <div className="text-center space-y-3">
          <p className="text-xl font-bold">Connect with us</p>

          <ul className="flex justify-center gap-5 mt-6">
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
    </div>
  );
}
