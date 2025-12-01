// types/post.ts

// Type cho category
export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Type cho content block (Rich Text)
export interface ContentBlock {
  type: string;
  children: {
    text: string;
    type: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  }[];
}

// Type cho featured image (nếu có)
export interface FeaturedImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

// Type cho post
export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: ContentBlock[];
  contents: ContentBlock[];
  excerpt: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featuredImage: FeaturedImage | null;
  categories: Category[];
}

// Type cho API response từ Strapi
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PostsResponse extends StrapiResponse<Post[]> {}

// Params cho fetch function
export interface FetchPostsParams {
  categories?: string | string[]; // slug hoặc array of slugs
  populate?: string | string[];
  page?: number;
  pageSize?: number;
}
