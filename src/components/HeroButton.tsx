import { useEffect, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Loading from "./Loading";

interface RatingData {
  icon: string;
  title: string;
  rating: number;
  ratingsCount: number;
}
export default function HeroButton() {
  const [playData, setPlayData] = useState<RatingData | null>(null);
  const [appStoreData, setAppStoreData] = useState<RatingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const PLAY_STORE_ID = "com.smatchy.app";
  const APP_STORE_ID = "6473653332";
  // const API_BASE_URL = "https://smatchy-landingpage.amagumolabs.net/api";

  const API_BASE_URL = import.meta.env.VITE_STRAPI_URL;

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        setError(null);
        const [playRes, appRes] = await Promise.all([
          PLAY_STORE_ID
            ? fetch(`${API_BASE_URL}/ratings/play-store/${PLAY_STORE_ID}`)
            : Promise.resolve(null),
          APP_STORE_ID
            ? fetch(`${API_BASE_URL}/ratings/app-store/${APP_STORE_ID}`)
            : Promise.resolve(null),
        ]);

        if (playRes) setPlayData(await playRes.json());
        if (appRes) setAppStoreData(await appRes.json());
      } catch (error) {
        console.error("Error fetching ratings:", error);
        setError("Không thể tải đánh giá");
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, [PLAY_STORE_ID, APP_STORE_ID]);

  console.log(playData);
  console.log(appStoreData);

  if (loading) return <Loading />;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex gap-3 md:gap-4 flex-wrap md:flex-nowrap w-full md:w-auto justify-center md:justify-start">
      <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
        {/* App Store Button */}
        <a
          href="https://apps.apple.com/us/app/smatchy/id6473653332"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-2 rounded-full bg-white hover:bg-gray-50 text-gray-900 transition-all duration-200 hover:scale-[1.02] md:hover:scale-[1.03] shadow-sm min-w-[130px] md:min-w-[150px] w-fit"
        >
          <FaApple size={24} className="flex-shrink-0 md:size-7" />
          <div className="flex flex-col items-end">
            <span className="text-xs md:text-sm font-semibold tracking-wide">
              App Store
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-yellow-400 text-[10px] md:text-xs">⭐</span>
              <span className="text-[10px] md:text-xs font-medium">
                {playData?.rating
                  ? parseFloat(playData.rating.toFixed(1))
                  : "4.5"}
              </span>
            </div>
          </div>
        </a>

        {/* Google Play Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.smatchy.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-2 rounded-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 transition-all duration-200 hover:scale-[1.02] md:hover:scale-[1.03] shadow-sm min-w-[130px] md:min-w-[150px] w-fit"
        >
          <FaGooglePlay size={24} className="flex-shrink-0 md:size-7" />
          <div className="flex flex-col items-end">
            <span className="text-xs md:text-sm font-semibold tracking-wide">
              Google Play
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-yellow-400 text-[10px] md:text-xs">⭐</span>
              <span className="text-[10px] md:text-xs font-medium">
                {appStoreData?.rating
                  ? parseFloat(appStoreData.rating.toFixed(1))
                  : "4.2"}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
