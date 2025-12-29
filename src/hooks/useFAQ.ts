import { useQuery } from "@tanstack/react-query";
import { fetchFAQ } from "../services/strapi";

export const useFAQ = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFAQ,
  });
};
