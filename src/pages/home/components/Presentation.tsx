import Slider from "./Slider";

export default function Presentation() {
  return (
    <div className="relative container">
      <div className="mt-12! flex flex-col items-center md:items-start gap-28">
        <div className="relative z-50 text-[20px] font-bold space-y-4">
          <div className="inline-flex min-w-[218px] items-center justify-center bg-[#0A4A60] text-white rounded-[5px] px-3">
            In just a few clicks
          </div>

          <p className="pl-32 text-[#172E36]">
            A simplified activity creation process <br />
            to let you focus on what matters
          </p>
        </div>

        <div className="relative pl-12 z-50 text-[20px] font-bold space-y-4">
          <div className="inline-flex min-w-[218px] items-center justify-center bg-[#0A4A60] text-white rounded-[5px] px-3">
            All levels
          </div>

          <p className="pl-32 text-[#172E36]">
            A level-based algorithm that <br />
            adapts to every practice
          </p>
        </div>

        <div className="relative pl-28 z-50 text-[20px] font-bold space-y-4">
          <div className="inline-flex min-w-[218px] items-center justify-center bg-[#0A4A60] text-white rounded-[5px] px-3">
            Multi-sports
          </div>

          <p className="pl-32 text-[#172E36]">
            All your favorite sports in one <br />
            single app
          </p>
        </div>
      </div>
      <div className="absolute top-[-120px] right-0 w-[520px] h-[770px]">
        <Slider />
      </div>
    </div>
  );
}
