// src/services/strapi.ts
import axios from "axios";
import type { IGlobalAttributes } from "./types/global";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL || "https://strapi.annk.info/api";

const strapiApi = axios.create({
  baseURL: STRAPI_URL,
});

type StrapiItem<T> = { id: number; attributes: T };
type StrapiSingleResponse<T> = { data: StrapiItem<T>; meta: any };

// Hàm tiện ích
const fetchStrapi = async <T, R = StrapiSingleResponse<T>>(
  endpoint: string
): Promise<R> => {
  const res = await strapiApi.get<R>(endpoint);

  if (!res.data || !res.data.data) {
    throw new Error(`Data is null or undefined for endpoint: ${endpoint}`);
  }
  return res.data;
};

export const fetchGlobal = async () => {
  const response = await fetchStrapi<any, StrapiSingleResponse<any>>(
    "/global?populate=*"
  );

  if (response.data) {
    return response.data;
  }

  return null;
};

// export const fetchHome = () =>
//   fetchStrapi<HomeResponse>("/home?populate[blocks][populate]=*");

// export const fetchTeam = () =>
//   fetchStrapi<any>("/teams?populate[team_members][populate]=image");

// export const fetchInvestor = () =>
//   fetchStrapi<any>("/investors?populate[banner]=*");

// export const fetchEventList = () =>
//   fetchStrapi<any>("/events?populate[thumbnail]=*");

// export const fetchEventDetail = (slug: string) =>
//   fetchStrapi<any>(
//     `/events?filters[slug][$eq]=${encodeURIComponent(
//       slug
//     )}&populate[blocks][populate]=*`
//   );

// export const fetchContact = () => fetchStrapi<any>("/contact?populate=*");
