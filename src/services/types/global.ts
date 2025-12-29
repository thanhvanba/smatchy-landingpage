// src/types/global.ts (Tên file nên để chữ thường)

interface IGlobalAttributes {
  siteName: string;
  siteDescription: string;
  favicon: any;
  defaultSeo: string;

  title?: string;
  header?: any;
  footer?: any;
  phone?: string;
  email?: string;
  address?: string;
  blocks?: any[];
  url: string;
  social?: any[];
}

interface IHomePage {
  siteName: string;
  siteDescription: string;
  favicon: string;
  defaultSeo: string;
}

interface IInvestorPage {
  siteName: string;
  siteDescription: string;
  favicon: string;
  defaultSeo: string;
  blocks?: any[];
}

interface IEventPage {
  siteName: string;
  siteDescription: string;
  favicon: string;
  defaultSeo: string;
}

interface IEventDetail {
  siteName: string;
  siteDescription: string;
  favicon: string;
  defaultSeo: string;
}

interface IContact {
  siteName: string;
  siteDescription: string;
  favicon: string;
  defaultSeo: string;
}

// src/services/types/hero.ts
interface IHero {
  id: number;
  documentId: string;
  title: string;
  subtitle?: string;
  heros: any[];
  background?: {
    url: string;
    alternativeText?: string;
  };
  cta?: {
    label: string;
    link: string;
  };
}

interface ISport {
  id: number;
  documentId: string;
  name: string;
  slug: string | null;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface IFAQ {
  id: number;
  question: string;
  answer: string;
  category: {
    data: {
      attributes: {
        slug: string;
        name: string;
      };
    };
  };
}

export type {
  IGlobalAttributes,
  IHomePage,
  IInvestorPage,
  IEventPage,
  IEventDetail,
  IContact,
  IHero,
  ISport,
  IFAQ,
};
