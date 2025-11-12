import axios from "axios";
import { useEffect, useState } from "react";

interface MediaFormat {
  url: string;
}

interface BackgroundImage {
  formats?: {
    large?: MediaFormat;
  };
}

interface Hero {
  heading?: string;
  sub_heading?: string;
  richtext?: {
    text_area?: string;
  };
  background_image?: BackgroundImage;
}

interface HeroResponse {
  id: string;
  title: string;
  heros?: Hero[];
}

export default function AnNK() {
  const [data, setData] = useState<HeroResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/heroes/e48rfucgo0ox61mbm8hoc5iy?populate[heros][populate]=*"
        );
        setData(response.data.data);
      } catch (err) {
        setError("Failed to load hero data");
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const hero = data.heros?.[0];

  if (!hero) {
    return <div>No hero content available.</div>;
  }

  const bgImageUrl = hero.background_image?.formats?.large?.url
    ? `https://strapi.annk.info/${hero.background_image.formats.large.url}`
    : undefined;

  return (
    <div
      className="w-full h-[564px] pt-20 z-50"
      style={{
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container mx-auto z-50">
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-6">
            {hero.heading && (
              <p className="text-white text-center">
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "48px",
                    lineHeight: "55px",
                    textTransform: "uppercase",
                  }}
                  dangerouslySetInnerHTML={{ __html: hero.heading }}
                />
              </p>
            )}

            {hero.sub_heading && (
              <p className="text-white text-center">
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "28px",
                    lineHeight: "55px",
                    textTransform: "uppercase",
                  }}
                  dangerouslySetInnerHTML={{ __html: hero.sub_heading }}
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
