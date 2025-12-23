// import React, { useEffect, useState } from "react";

// const PLAY_STORE_ID = "com.smatchy.app";
// const APP_STORE_ID = "6473653332";
// const API_BASE_URL = "http://localhost:5001/api";

// interface RatingData {
//   icon: string;
//   title: string;
//   rating: number;
//   ratingsCount: number;
// }

// interface RatingProps {
//   playStoreId?: string;
//   appStoreId?: string;
// }

// export default function Rating({
//   playStoreId = PLAY_STORE_ID,
//   appStoreId = APP_STORE_ID,
// }: RatingProps) {
//   const [playData, setPlayData] = useState<RatingData | null>(null);
//   const [appStoreData, setAppStoreData] = useState<RatingData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchRatings = async () => {
//       try {
//         setError(null);
//         const [playRes, appRes] = await Promise.all([
//           playStoreId
//             ? fetch(`${API_BASE_URL}/play-store/${playStoreId}`)
//             : Promise.resolve(null),
//           appStoreId
//             ? fetch(`${API_BASE_URL}/app-store/${appStoreId}`)
//             : Promise.resolve(null),
//         ]);

//         if (playRes) setPlayData(await playRes.json());
//         if (appRes) setAppStoreData(await appRes.json());
//       } catch (error) {
//         console.error("Error fetching ratings:", error);
//         setError("Không thể tải đánh giá");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRatings();
//   }, [playStoreId, appStoreId]);

//   const renderStars = (rating: number) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     return (
//       <>
//         {Array.from({ length: fullStars }, (_, i) => (
//           <span key={i} className="star filled">
//             ★
//           </span>
//         ))}
//         {hasHalfStar && (
//           <span className="star half">★</span>
//         )}
//       </>
//     );
//   };

//   const StoreRating = ({
//     data,
//     storeName,
//   }: {
//     data: RatingData;
//     storeName: string;
//   }) => (
//     <div className="store-rating">
//       <img src={data.icon} alt={data.title} className="app-icon" />
//       <h4>{storeName}</h4>
//       <div className="stars">{renderStars(data.rating)}</div>
//       <p>
//         {data.rating.toFixed(1)} ({data.ratingsCount.toLocaleString()} đánh giá)
//       </p>
//     </div>
//   );

//   if (loading) return <div>Đang tải đánh giá...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="app-ratings-container">
//       {playData && <StoreRating data={playData} storeName="Google Play" />}
//       {appStoreData && <StoreRating data={appStoreData} storeName="App Store" />}
//     </div>
//   );
// }
