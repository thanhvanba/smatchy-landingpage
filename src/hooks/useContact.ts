// // src/hooks/useContact.ts
// import { useMutation } from '@tanstack/react-query';
// import { postContact } from '../services/strapi';
// import type { ContactForm } from '../services/types/contact';

// export const useContact = () => {
//   return useMutation({
//     mutationFn: (data: ContactForm) => postContact(data),
//   });
// };

// src/hooks/useContact.ts
import { useMutation } from "@tanstack/react-query";
import type { ContactForm } from "../services/types/contact";
import { postContact } from "../services/strapi";

export const useContact = () => {
  const sendQ = useMutation({
    mutationFn: (form: ContactForm) => postContact(form),
  });

  return sendQ;
};
