// src/hooks/useTeam.ts
import { useQuery } from "@tanstack/react-query";
import { fetchTeam, fetchTeamMember } from "../services/strapi";
import type { Person, Team } from "../services/types/team";

export const useTeam = () => {
  return useQuery<{
    teamMembers: Person | null;
    teamPage: Team | null;
  }>({
    queryKey: ["team"],
    queryFn: async () => {
      const [members, page] = await Promise.all([
        fetchTeamMember(),
        fetchTeam(),
      ]);
      return {
        teamMembers: members,
        teamPage: page,
      };
    },
    staleTime: 5 * 60 * 1000, // 5 phút
  });
};
