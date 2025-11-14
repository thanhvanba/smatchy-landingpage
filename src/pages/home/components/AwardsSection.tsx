import GoEntrepreneurs from "/Go_Entrepreneurs.png";
import Choiseul2 from "/Choiseul 02.png";
import Choiseil3 from "/Choiseul 3.png";
import Choiseil4 from "/Choiseul 4.png";

export default function AwardsSection() {
  const awards = [
    { id: 1, image: GoEntrepreneurs, alt: "Go Entrepreneurs Award" },
    { id: 2, image: Choiseul2, alt: "Choiseul 100 Award 2022" },
    { id: 3, image: Choiseil3, alt: "Choiseul 100 Award 2023" },
    { id: 4, image: Choiseil4, alt: "Choiseul 100 Award 2024" },
  ];
  return (
    <div>
      <div className="container my-20!">
        <div className=" flex justify-center items-end gap-4">
          {awards.map((award) => (
            <img
              key={award.id}
              src={award.image}
              alt={award.alt}
              className="inline-block mx-4 h-auto w-full z-50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
