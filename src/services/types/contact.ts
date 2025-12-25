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

export interface ProForm {
  full_name: string;
  email: string;
  role: string;
  sport: string | string[];
  comments?: string;
  status_contact: string;
  other_role?: string;
}
