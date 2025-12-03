import Benefits from "./components/Benefits";
import ComingSoon from "./components/ComingSoon";
import ProfessionalBanner from "./components/ProfessionalBanner";
import ProForm from "./components/ProForm";
import ProSlider from "./components/ProSlider";
import line from "/line_bg.svg";

export default function ProfessionalPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="relative container">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-24 md:-top-44 left-20 md:left-56 scale-[7.4] rotate-13 origin-top-left z-20 px-1.5"
        />
      </div>
      <ProfessionalBanner />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative -mt-12! lg:-mt-60! z-40">
        {/* Form đăng ký */}
        <ProForm />

        {/* Slider minh họa */}
        <ProSlider />
      </div>
      <div className="pt-12">
        <Benefits />
      </div>
      <div className="pt-24">
        <ComingSoon />
      </div>
    </div>
  );
}
