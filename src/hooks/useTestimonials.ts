// src/hooks/useTestimonials.ts
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "../services/types/testimonial";
import { fetchTestimonialsByPosition } from "../services/strapi";

export const useTestimonials = (position: "home" | "investor" | "about") =>
  useQuery<Testimonial[]>({
    queryKey: ["testimonials", position],
    queryFn: () => fetchTestimonialsByPosition(position),
    staleTime: 5 * 60 * 1000,
  });
