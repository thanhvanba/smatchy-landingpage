import { useQuery } from "@tanstack/react-query";
import { fetchPro } from "../services/strapi";

export const usePro = () => {
  const query = useQuery({
    queryKey: ["pro"],
    queryFn: fetchPro,
    staleTime: 5 * 60 * 1000,
  });
  return query;
};
