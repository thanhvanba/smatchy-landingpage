// src/types/global.ts (Tên file nên để chữ thường)

interface IGlobalAttributes {
  siteName: string;
  siteDescription: string;
  favicon: string;
  defaultSeo: string;

  title?: string;
  header?: any;
  footer?: any;
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

export type {
  IGlobalAttributes,
  IHomePage,
  IInvestorPage,
  IEventPage,
  IEventDetail,
  IContact,
};
