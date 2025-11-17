export interface ContactPage {
  id: number;
  title: string;
  content?: string;
}

export interface ContactForm {
  full_name: string;
  email: string;
  subject: string;
  message: string;
  status_contact: string;
}
