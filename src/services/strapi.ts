// src/services/strapi.ts
import axios from "axios";
import type {
  IGlobalAttributes,
  IHomePage,
  IInvestorPage,
  IEventPage,
  IEventDetail,
  IContact,
} from "./types/global";
import type { Person, Team } from "./types/team";

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
  const response = await fetchStrapi<
    any,
    { data: IGlobalAttributes; meta: any }
  >(
    "/global?fields[0]=siteName&fields[1]=siteDescription&populate[favicon][fields][0]=name&populate[favicon][fields][1]=url"
  );
  if (response.data) {
    return response.data as IGlobalAttributes;
  }

  return null;
};

export const fetchHome = async () => {
  const response = await fetchStrapi<any, { data: IHomePage; meta: any }>(
    "/home?populate[blocks][populate]=*"
  );
  if (response.data) {
    return response.data as IHomePage;
  }

  return null;
};

export const fetchTeamMember = async () => {
  const response = await fetchStrapi<any, { data: Person; meta: any }>(
    "/team-members?populate=*"
  );
  if (response.data) {
    return response.data as Person;
  }

  return null;
};

export const fetchTeam = async () => {
  const response = await fetchStrapi<any, { data: Team; meta: any }>(
    "/team?populate=*"
  );
  if (response.data) {
    return response.data as Team;
  }

  return null;
};

export const fetchInvestor = async () => {
  const response = await fetchStrapi<any, { data: IInvestorPage; meta: any }>(
    "/investors?populate[banner]=*"
  );
  if (response.data) {
    return response.data as IInvestorPage;
  }

  return null;
};

export const fetchEventList = async () => {
  const response = await fetchStrapi<any, { data: IEventPage; meta: any }>(
    "/events?populate[thumbnail]=*"
  );
  if (response.data) {
    return response.data as IEventPage;
  }

  return null;
};

export const fetchEventDetail = async (slug: string) => {
  const response = await fetchStrapi<any, { data: IEventDetail; meta: any }>(
    "/events?populate[thumbnail]=*"
  );
  if (response.data) {
    return response.data as IEventDetail;
  }

  return null;
};

export const fetchContact = async () => {
  const response = await fetchStrapi<any, { data: IContact; meta: any }>(
    "/contact?populate=*"
  );
  if (response.data) {
    return response.data as IContact;
  }

  return null;
};
