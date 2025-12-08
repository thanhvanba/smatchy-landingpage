// src/services/strapi.ts
import axios from "axios";
import type {
  IGlobalAttributes,
  IHomePage,
  IInvestorPage,
  IEventPage,
  IEventDetail,
  //IContact,
  IHero,
  ISport,
} from "./types/global";
import type { Person, Team } from "./types/team";
import type { ContactForm } from "./types/contact";
import type { TestimonialList } from "./types/testimonial";
import type { Post, PostsResponse, Category } from "./types/post";

const DEFAULT_STRAPI_URL = "https://strapi.annk.info/api";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || DEFAULT_STRAPI_URL;

export const STRAPI_ASSET_URL =
  import.meta.env.VITE_STRAPI_ASSET_URL ||
  STRAPI_URL.replace(/\/api$/, "");

const strapiApi = axios.create({
  baseURL: STRAPI_URL,
});

strapiApi.interceptors.request.use((config) => {
  const locale = localStorage.getItem("locale") || "en";
  config.params = { ...config.params, locale };
  return config;
});

type StrapiItem<T> = { id: number; attributes: T };
type StrapiSingleResponse<T> = {
  data: StrapiItem<T>;
  meta?: object;
};

// Hàm tiện ích
const fetchStrapi = async <T, R = StrapiSingleResponse<T>>(
  endpoint: string
): Promise<R> => {
  const res = await strapiApi.get(endpoint);

  if (!res.data) {
    throw new Error(`Data is null or undefined for endpoint: ${endpoint}`);
  }
  return res.data as R;
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
  const response = await fetchStrapi<any, { data: Person[]; meta: any }>(
    "/team-members?populate=*"
  );
  if (response.data) {
    return response.data as Person[];
  }

  return null;
};

export const fetchTeam = async () => {
  const response = await fetchStrapi<any, { data: Team; meta: any }>(
    "/team?populate[blocks][populate]=*"
  );
  if (response.data) {
    return response.data as Team;
  }

  return null;
};

export const InvestorPopulateType = {
  BASIC: "basic",
  STATS: "stats",
  FULL: "full",
  TITLE: "title",
} as const;

export type InvestorPopulateType =
  (typeof InvestorPopulateType)[keyof typeof InvestorPopulateType];

const investorEndpoints: Record<InvestorPopulateType, string> = {
  basic: "/investor?populate[blocks][populate]=*",
  stats:
    "/investor?populate[blocks][populate]=*&populate[blocks][on][blocks.stats][populate][stats_item][populate]=*&populate[blocks][on][blocks.stats][populate][stats_icon][populate]=*",
  full: "/investor?populate=*",
  title: "/investor?populate[blocks][on][blocks.title][populate]=*",
};

export const fetchInvestor = async (
  type: InvestorPopulateType = InvestorPopulateType.BASIC
) => {
  const endpoint = investorEndpoints[type];
  const response = await fetchStrapi<any, { data: IInvestorPage; meta: any }>(
    endpoint
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

export const fetchPost = async (
  categories?: string | string[],
  populate: string = "*"
) => {
  const endpoint = buildPostsEndpoint(categories, populate);
  const response = await fetchStrapi<any, { data: Post[]; meta: any }>(
    endpoint
  );
  return response as PostsResponse;
};

/**
 * Helper function to build posts endpoint URL
 */
const buildPostsEndpoint = (
  categories?: string | string[],
  populate: string = "*"
): string => {
  const params = new URLSearchParams();
  params.append("populate", populate);

  if (categories) {
    if (Array.isArray(categories)) {
      params.append("filters[categories][slug][$in]", categories.join(","));
    } else {
      params.append("filters[categories][slug][$eq]", categories);
    }
  }

  return `/posts?${params.toString()}`;
};

/**
 * Fetch single post by slug
 */
export const fetchPostBySlug = async (slug: string) => {
  const response = await fetchStrapi<any, { data: Post[]; meta: any }>(
    `/posts?filters[slug][$eq]=${slug}&populate=*`
  );
  return response as PostsResponse;
};

/**
 * Fetch all categories
 */
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetchStrapi<any, { data: Category[]; meta: any }>(
    "/categories?populate=*"
  );
  return response.data || [];
};
