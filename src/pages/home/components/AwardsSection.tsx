import GoEntrepreneurs from "/Go_Entrepreneurs.png";
import Choiseul2 from "/Choiseul 02.png";
import Choiseil3 from "/Choiseul 3.png";
import Choiseil4 from "/Choiseul 4.png";
import { useHome } from "../../../hooks/useHome";

export default function AwardsSection() {
  const awards = [
    { id: 1, image: GoEntrepreneurs, alt: "Go Entrepreneurs Award" },
    { id: 2, image: Choiseul2, alt: "Choiseul 100 Award 2022" },
    { id: 3, image: Choiseil3, alt: "Choiseul 100 Award 2023" },
    { id: 4, image: Choiseil4, alt: "Choiseul 100 Award 2024" },
  ];

  const { isLoading, error, sliders } = useHome();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(sliders);

  const awardsItem = sliders.find(
    (item: any) => item.__component === "hero.slider" && item.title === "Awards"
  );

  const awardsUrls =
    (awardsItem?.slider_images?.map((img: any) => img) ?? []);

    console.log(awardsUrls)

  return (
    <div>
      <div className="container my-20!">
        <div className=" flex justify-center items-end gap-4">
          {awardsUrls.map((award) => (
            <img
              key={award.documentId}
              src={`https://strapi.annk.info${award.url}`}
              alt={award.alternativeText}
              className="inline-block mx-4 h-auto w-full z-50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
