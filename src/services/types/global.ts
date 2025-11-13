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

export type { IGlobalAttributes };
