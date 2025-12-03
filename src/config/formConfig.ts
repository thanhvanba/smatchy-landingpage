// Centralized form field configuration used across forms
export const contactFormConfig = {
  full_name: {
    label: "Full name",
    placeholder: "Your name",
    rules: [{ required: true, message: "Please enter your full name" }],
  },
  email: {
    label: "Email",
    placeholder: "your.email@example.com",
    rules: [
      { required: true, message: "Please enter your email" },
      { type: "email", message: "Please enter a valid email" },
    ],
  },
  subject: {
    label: "Subject",
    placeholder: "Subject of your message",
    rules: [{ required: true, message: "Please enter the subject" }],
  },
  message: {
    label: "Message",
    placeholder: "Your message",
    rules: [{ required: true, message: "Please enter your message" }],
  },
};

export const roleOptions = [
  { label: "Professional Athlete", value: "professional_athlete" },
  { label: "Personal Trainer / Coach", value: "personal_trainer_coach" },
  { label: "Association / Club", value: "association_club" },
  { label: "Other", value: "other" },
];

export const sportOptions = [
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
];

export const proFormConfig = {
  full_name: {
    label: "Full name",
    placeholder: "Your name",
    rules: [{ required: true, message: "Please enter your full name" }],
  },
  email: {
    label: "Email",
    placeholder: "your.email@example.com",
    rules: [
      { required: true, message: "Please enter your email" },
      { type: "email", message: "Please enter a valid email" },
    ],
  },
  role: {
    label: "Role",
    placeholder: "Select your role",
    rules: [{ required: true, message: "Please select your role" }],
  },
  sport: {
    label: "Sport",
    placeholder: "Select your sport",
    rules: [{ required: true, message: "Please select your sport" }],
  },
  comment: {
    label: "Comment",
    placeholder: "Tell us more about your experience",
    rules: [],
  },
};
