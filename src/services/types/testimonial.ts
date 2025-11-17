// src/services/types/testimonial.ts
export interface Testimonial {
  id: number;
  documentId: string;
  title: string;
  author: string;
  content: string;
  position: 'home' | 'investor' | 'about';
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  avatar: null | {
    id: number;
    documentId: string;
    url: string;
    // thêm field nếu cần
  };
}

export interface TestimonialList {
  data: Testimonial[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}