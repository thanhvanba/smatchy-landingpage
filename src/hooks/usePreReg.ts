import { useMutation } from "@tanstack/react-query";
import { postPreReg } from "../services/strapi";
import type { ProForm } from "../services/types/contact";

export const usePreReg = () => {
  return useMutation({
    mutationFn: (data: ProForm) => postPreReg(data),
  });
};
