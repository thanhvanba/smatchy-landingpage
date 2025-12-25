// Centralized form field configuration used across forms
export const contactFormConfig = {
  title: {
    en: "Send us a message",
    fr: "Envoyez-nous un message",
  },
  full_name: {
    label: {
      en: "Full name",
      fr: "Nom complet",
    },
    placeholder: {
      en: "Your name",
      fr: "Votre nom",
    },
    rules: {
      en: [{ required: true, message: "Please enter your full name" }],
      fr: [{ required: true, message: "Veuillez entrer votre nom complet" }],
    },
  },
  email: {
    label: {
      en: "Email",
      fr: "Email",
    },
    placeholder: {
      en: "your.email@example.com",
      fr: "votre.email@exemple.com",
    },
    rules: {
      en: [
        { required: true, message: "Please enter your email" },
        { type: "email", message: "Please enter a valid email" },
      ],
      fr: [
        { required: true, message: "Veuillez entrer votre email" },
        { type: "email", message: "Veuillez entrer un email valide" },
      ],
    },
  },
  subject: {
    label: {
      en: "Subject",
      fr: "Sujet",
    },
    placeholder: {
      en: "Subject of your message",
      fr: "Sujet de votre message",
    },
    rules: {
      en: [{ required: true, message: "Please enter the subject" }],
      fr: [{ required: true, message: "Veuillez entrer le sujet" }],
    },
  },
  message: {
    label: {
      en: "Message",
      fr: "Message",
    },
    placeholder: {
      en: "Your message",
      fr: "Votre message",
    },
    rules: {
      en: [{ required: true, message: "Please enter your message" }],
      fr: [{ required: true, message: "Veuillez entrer votre message" }],
    },
  },
  buttons: {
    submit: {
      en: "Submit",
      fr: "Envoyer",
    },
    sendMessage: {
      en: "Send Message",
      fr: "Envoyer le message",
    },
  },
  messages: {
    success: {
      en: "Sent successfully!",
      fr: "Envoyé avec succès!",
    },
    error: {
      en: "Failed to send",
      fr: "Échec de l'envoi",
    },
  },
};

export const proFormConfig = {
  title: {
    en: "Pre-register to become a Smatchy Pro",
    fr: "Préinscrivez-vous pour devenir un pro Smatchy",
  },
  full_name: {
    label: {
      en: "Full name",
      fr: "Nom complet",
    },
    placeholder: {
      en: "Your name",
      fr: "Votre nom",
    },
    rules: {
      en: [{ required: true, message: "Please enter your full name" }],
      fr: [{ required: true, message: "Veuillez entrer votre nom complet" }],
    },
  },
  email: {
    label: {
      en: "Email",
      fr: "Email",
    },
    placeholder: {
      en: "your.email@example.com",
      fr: "votre.email@exemple.com",
    },
    rules: {
      en: [
        { required: true, message: "Please enter your email" },
        { type: "email", message: "Please enter a valid email" },
      ],
      fr: [
        { required: true, message: "Veuillez entrer votre email" },
        { type: "email", message: "Veuillez entrer un email valide" },
      ],
    },
  },
  role: {
    label: {
      en: "Role",
      fr: "Rôle",
    },
    placeholder: {
      en: "Select your role",
      fr: "Sélectionnez votre rôle",
    },
    rules: {
      en: [{ required: true, message: "Please select your role" }],
      fr: [{ required: true, message: "Veuillez sélectionner votre rôle" }],
    },
  },
  sport: {
    label: {
      en: "Sport",
      fr: "Sport",
    },
    placeholder: {
      en: "Select your sport",
      fr: "Sélectionnez votre sport",
    },
    rules: {
      en: [{ required: true, message: "Please select your sport" }],
      fr: [{ required: true, message: "Veuillez sélectionner votre sport" }],
    },
  },
  comment: {
    label: {
      en: "Comment",
      fr: "Commentaire",
    },
    placeholder: {
      en: "Tell us more about your experience",
      fr: "Dites-nous en plus sur votre expérience",
    },
    rules: {
      en: [],
      fr: [],
    },
  },
  modal: {
    title: {
      en: "Other Role",
      fr: "Autre Rôle",
    },
    description: {
      en: "Describe your role",
      fr: "Décrivez votre rôle",
    },
    placeholder: {
      en: "Please specify your role (e.g., Club Manager, Instructor)",
      fr: "Veuillez spécifier votre rôle (ex. Gestionnaire de Club, Instructeur)",
    },
    okText: {
      en: "Submit",
      fr: "Soumettre",
    },
    cancelText: {
      en: "Cancel",
      fr: "Annuler",
    },
    required: {
      en: "Please describe your role",
      fr: "Veuillez décrire votre rôle",
    },
  },
  buttons: {
    submit: {
      en: "Submit",
      fr: "Soumettre",
    },
  },
  messages: {
    success: {
      en: "Registration submitted!",
      fr: "Inscription soumise!",
    },
    warning: {
      en: "Please describe your role",
      fr: "Veuillez décrire votre rôle",
    },
    error: {
      en: "Failed to send",
      fr: "Échec de l'envoi",
    },
  },
};

export const roleOptions = {
  en: [
    { label: "Professional Athlete", value: "professional_athlete" },
    { label: "Personal Trainer / Coach", value: "personal_trainer_coach" },
    { label: "Association / Club", value: "association_club" },
    { label: "Other", value: "other" },
  ],
  fr: [
    { label: "Athlète Professionnel", value: "professional_athlete" },
    { label: "Entraîneur Personnel / Coach", value: "personal_trainer_coach" },
    { label: "Association / Club", value: "association_club" },
    { label: "Autre", value: "other" },
  ],
};

export const sportOptions = {
  en: [
    { label: "Badminton", value: "badminton" },
    { label: "Basketball", value: "basketball" },
    { label: "Bike", value: "bike" },
    { label: "Climbing", value: "climbing" },
    { label: "Football", value: "football" },
    { label: "Golf", value: "golf" },
    { label: "Hiking", value: "hiking" },
    { label: "Padel", value: "padel" },
    { label: "Running", value: "running" },
    { label: "Swimming", value: "swimming" },
    { label: "Table Tennis", value: "table_tennis" },
    { label: "Tennis", value: "tennis" },
    { label: "Trail", value: "trail" },
    { label: "Trampoline", value: "trampoline" },
  ],
  fr: [
    { label: "Badminton", value: "badminton" },
    { label: "Basketball", value: "basketball" },
    { label: "Vélo", value: "bike" },
    { label: "Escalade", value: "climbing" },
    { label: "Football", value: "football" },
    { label: "Golf", value: "golf" },
    { label: "Randonnée", value: "hiking" },
    { label: "Padel", value: "padel" },
    { label: "Courir", value: "running" },
    { label: "Natation", value: "swimming" },
    { label: "Tennis de Table", value: "table_tennis" },
    { label: "Tennis", value: "tennis" },
    { label: "Trail", value: "trail" },
    { label: "Trampoline", value: "trampoline" },
  ],
};
