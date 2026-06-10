// src/hooks/useEvent.ts
import { useQuery } from '@tanstack/react-query';
import { fetchEventList, fetchEventPage } from '../services/strapi';

export const useEventList = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEventList,
  });
};

export const useEventPage = () => {
  return useQuery({
    queryKey: ['event-page'],
    queryFn: fetchEventPage,
    staleTime: 5 * 60 * 1000,
  });
};



