// src/hooks/useHero.ts
import { useQuery } from "@tanstack/react-query";
import { fetchHeroById } from "../services/strapi";

export const useHero = (id: string) => {
  const query = useQuery({
    queryKey: ["hero", id],
    queryFn: () => fetchHeroById(id),
    staleTime: 5 * 60 * 1000,
  });
  return query;
};
