// Shared layout translations for header and footer
export const headerTexts = {
  menu: [
    { link: "/", label: { en: "Home", fr: "Accueil" } },
    { link: "/team", label: { en: "Team", fr: "Équipe" } },
    { link: "/investors", label: { en: "Investors", fr: "Investisseurs" } },
    { link: "/events", label: { en: "Events", fr: "Événements" } },
    {
      link: "/professional",
      label: { en: "Professional", fr: "Professionnels" },
    },
    { link: "/contact", label: { en: "Contact", fr: "Contact" } },
  ],
  getApp: {
    en: "Get the app",
    fr: "Télécharger l'app",
  },
};

export const footerTexts = {
  socialHeading: {
    en: "Our social networks",
    fr: "Nos réseaux sociaux",
  },
  socialLoading: {
    en: "Loading social links...",
    fr: "Chargement des liens sociaux...",
  },
  legalLinks: [
    {
      path: "/legal-notices",
      label: { en: "Legal Notices", fr: "Mentions légales" },
    },
    {
      path: "/terms-of-use",
      label: { en: "Terms of Use", fr: "Conditions d'utilisation" },
    },
    {
      path: "/privacy-policy",
      label: { en: "Privacy Policy", fr: "Politique de confidentialité" },
    },
    { path: "/cookie-policy", label: { en: "Cookies", fr: "Cookies" } },
  ],
};
