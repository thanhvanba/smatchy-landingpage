// src/hooks/useHome.ts
import { useQuery } from "@tanstack/react-query";
import { fetchHome } from "../services/strapi";

interface StrapiMedia {
  id: number;
  name: string;
  url: string;
  alternativeText?: string | null;
  formats?: Record<
    string,
    {
      url: string;
      width: number;
      height: number;
    }
  >;
}

interface HeroImageTextBlock {
  __component: "hero.image-text";
  id: number;
  heading: string;
  sub_heading: string;
  main_image: StrapiMedia;
  background_image: StrapiMedia;
  button_image: { id: number; label: string; link: string }[];
}

interface TitleBlock {
  __component: "blocks.title";
  id: number;
  title: string;
  button: any[];
}

interface GroupWhyBlock {
  __component: "blocks.group-why";
  id: number;
  title: string;
  reason: { id: number; title: string; content: string }[];
}

interface HeroSliderBlock {
  __component: "hero.slider";
  id: number;
  heading: string | null;
  sub_heading: string | null;
  title: string;
  button: any[];
  slider_images: StrapiMedia[] | null;
}

interface HeroImageOnlyBlock {
  __component: "hero.image-only";
  id: number;
  heading: string | null;
  sub_heading: string | null;
  title: string | null;
  background_image: StrapiMedia;
}

type HomeBlock =
  | HeroImageTextBlock
  | TitleBlock
  | GroupWhyBlock
  | HeroSliderBlock
  | HeroImageOnlyBlock;

interface IHomePage {
  id: number;
  title: string;
  // ...các field khác nếu có
  blocks: HomeBlock[];
}

export const useHome = () => {
  const query = useQuery({
    queryKey: ["home"],
    queryFn: fetchHome,
    staleTime: 5 * 60 * 1000,
  });

  // data từ fetchHome: IHomePage | null
  const home = query.data as IHomePage | null;
  const blocks = (home?.blocks ?? []) as HomeBlock[];

  console.log(home);

  // Helpers type guard nhỏ nhỏ
  const isHeroImageText = (b: HomeBlock): b is HeroImageTextBlock =>
    b.__component === "hero.image-text";
  const isGroupWhy = (b: HomeBlock): b is GroupWhyBlock =>
    b.__component === "blocks.group-why";
  const isHeroSlider = (b: HomeBlock): b is HeroSliderBlock =>
    b.__component === "hero.slider";
  const isHeroImageOnly = (b: HomeBlock): b is HeroImageOnlyBlock =>
    b.__component === "hero.image-only";
  const isTitle = (b: HomeBlock): b is TitleBlock =>
    b.__component === "blocks.title";

  // ✅ Tách section theo component
  const hero = blocks.find(isHeroImageText) || null;
  const reasons = blocks.filter(isGroupWhy);
  const sliders = blocks.filter(isHeroSlider);
  const imageOnly = blocks.filter(isHeroImageOnly);
  const titles = blocks.filter(isTitle);

  return {
    ...query, // giữ nguyên useQuery: data, isLoading, error, refetch,...
    home,
    blocks,
    hero,
    reasons,
    sliders,
    imageOnly,
    titles,
  };
};
