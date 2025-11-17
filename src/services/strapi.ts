// src/services/strapi.ts
import axios from "axios";
import type {
  IGlobalAttributes,
  IHomePage,
  IInvestorPage,
  IEventPage,
  IEventDetail,
  IContact,
  IHero,
  ISport,
} from "./types/global";
import type { Person, Team } from "./types/team";
import type { ContactForm, ContactPage } from "./types/contact";
import type { TestimonialList } from "./types/testimonial";

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
    //"/global?fields[0]=siteName&fields[1]=siteDescription&populate[favicon][fields][0]=name&populate[favicon][fields][1]=url"
    "/global?populate=*"
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

export const fetchHeroById = async (id: string) => {
  const response = await fetchStrapi<any, { data: IHero; meta: any }>(
    `/heroes/${id}?populate[heros][populate]=*`
  );
  if (response.data) {
    return response.data as IHero;
  }
  return null;
};

export const fetchEventList = async () => {
  const response = await fetchStrapi<any, { data: IEventPage; meta: any }>(
    "/events?populate[sports][populate]=*"
  );
  if (response.data) {
    return response.data as IEventPage;
  }
  return null;
};

export const fetchEventDetail = async (slug: string) => {
  const response = await fetchStrapi<any, { data: IEventDetail; meta: any }>(
    `/events?filters[slug][$eq]=${slug}&populate[sports][populate][0]=image&populate[sports][populate][1]=iconType`
  );
  if (response.data) {
    return response.data as IEventDetail;
  }

  return null;
};

// export const fetchContact = async () => {
//   const response = await fetchStrapi<any, { data: IContact; meta: any }>(
//     "/contact?populate=*"
//   );
//   if (response.data) {
//     return response.data as IContact;
//   }

//   return null;
// };

/* gửi form liên hệ */
export const postContact = async (payload: ContactForm) => {
  try {
    const response = await strapiApi.post<ContactForm>(
      "/contact-form",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error posting contact:", error);
    throw error;
  }
};

export const fetchSport = async () => {
  const response = await fetchStrapi<any, { data: ISport; meta: any }>(
    "/sports?fields[0]=name&populate[image][fields][0]=url"
  );
  if (response.data) {
    return response.data as ISport;
  }
  return null;
};

export const fetchTestimonialsByPosition = async (
  position: "home" | "investor" | "about"
) => {
  const res = await fetchStrapi<any, TestimonialList>(
    `/testimonials?filters[position][$eq]=${position}&populate=*`
  );
  return res.data; // Testimonial[]
};
