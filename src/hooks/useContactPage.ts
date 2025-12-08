import { useQuery } from "@tanstack/react-query";
import { fetchContactPage } from "../services/strapi";

export const useContactPage = () => {
  const query = useQuery({
    queryKey: ["contactPage"],
    queryFn: fetchContactPage,
    staleTime: 5 * 60 * 1000,
  });
  return query;
};
