import pro from "/events/pro.png";

export default function PriceActive({ price }: { price: number }) {
  return (
    <div className="bg-[#0A4A60] rounded-lg lg:w-[130px]">
      <div className="flex items-center justify-center gap-1 p-0.5 md:p-1 text-white text-[10px] md:text-xs lg:text-xs font-medium">
        <img
          className="h-2 md:h-2.5 lg:h-3 w-2 md:w-2.5 lg:w-3"
          src={pro}
          alt=""
        />
        <p>Per participant</p>
      </div>
      <div className="p-0.5">
        <div className="flex items-center justify-center bg-white rounded-b-lg p-0.5 md:p-1 lg:p-1">
          <p className="text-sm md:text-base lg:text-xl text-[#0A4A60] font-bold">
            {price.toFixed(2).replace(".", ",")} €
          </p>
        </div>
      </div>
    </div>
  );
}
