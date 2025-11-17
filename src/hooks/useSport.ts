// src/hooks/useHero.ts
import { useQuery } from "@tanstack/react-query";
import { fetchSport } from "../services/strapi";

export const useSport = () => {
  const query = useQuery({
    queryKey: ["sport"],
    queryFn: fetchSport,
    staleTime: 5 * 60 * 1000,
  });
  return query;
};
